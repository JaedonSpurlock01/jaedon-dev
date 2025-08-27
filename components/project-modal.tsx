import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Tech } from "./skill";
import { projects } from "./sections/projects";

export const ProjectModal = ({
  active,
  setActive,
  id,
  ref,
}: {
  active: (typeof projects)[number] | boolean | null;
  setActive: (card: (typeof projects)[number] | null) => void;
  id: string;
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  if (!active) {
    return null;
  }
  return (
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0 grid place-items-center z-[100]">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
            onClick={() => setActive(null)}
          >
            <CloseIcon />
          </motion.button>

          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-lg overflow-hidden"
          >
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                width={200}
                height={200}
                src={active.imageSrc}
                alt={active.title}
                className="w-full h-60 object-cover object-top"
              />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div>
                  <div className="flex gap-2 items-center">
                    <motion.h3
                      className="text-sm font-semibold"
                      layoutId={`title-${active.title}-${id}`}
                    >
                      {active.title}
                    </motion.h3>

                    <motion.span
                      layoutId={`date-${active.date}-${id}`}
                      className="text-muted-foreground rounded-sm text-xs font-normal font-mono"
                    >
                      {active.date}
                    </motion.span>
                  </div>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-sm"
                  >
                    {active.description}
                  </motion.p>
                </div>
              </div>
              <motion.div
                layoutId={`tags-${active.tags}-${id}`}
                className="flex flex-wrap gap-2 px-4"
              >
                {active.tags.map((tag) => (
                  // @ts-expect-error ignore
                  <Tech key={tag} technology={tag.toLowerCase()} />
                ))}
              </motion.div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                >
                  {typeof active.content === "function"
                    ? // @ts-expect-error ignore
                      active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
