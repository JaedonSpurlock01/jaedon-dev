import React from "react";
import Title from "../title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
import { Dot } from "lucide-react";
import { Tech } from "../skill";

const Work = () => {
  return (
    <section id="work">
      <Title>Work</Title>

      <Accordion type="single" collapsible className="w-full">
        <WorkAccordionItem
          company="Lockheed Martin"
          imgSrc="/work/lockheed.jpeg"
          role="Associate Software Engineer"
          date="Aug 2025 - Present"
          accordionValue="item-1"
          content={
            <div className="pl-18 space-y-4">
              <p className="leading-relaxed text-base text-primary/808">
                Building automated internal software for F-35 Pilot Training
                organization.
              </p>

              <div className="flex flex-wrap gap-2">
                <Tech technology="python" />
                <Tech technology="react" />
                <Tech technology="sveltekit" />
              </div>
            </div>
          }
        />
        <WorkAccordionItem
          company="Lockheed Martin"
          imgSrc="/work/lockheed.jpeg"
          role="Software Engineer Intern"
          date="May 2025 - Aug 2025"
          accordionValue="item-2"
          content={
            <div className="pl-18 space-y-4">
              <p className="leading-relaxed text-base text-primary/80">
                Working with the F-35 Pilot Training Device. Working under
                Development Environment IPT through build & tools team
                integrating web development solutions and CI/CD pipelines.
              </p>

              <div className="flex flex-wrap gap-2">
                <Tech technology="python" />
                <Tech technology="react" />
                <Tech technology="sveltekit" />
              </div>
            </div>
          }
        />
        <WorkAccordionItem
          company="Welfie"
          imgSrc="/work/welfie.jpeg"
          role="Software Engineer Intern"
          date="May 2024 - Aug 2024"
          accordionValue="item-3"
          content={
            <div className="pl-18 space-y-4">
              <p className="leading-relaxed text-base text-primary/80">
                Part of mobile development team, working with React Native,
                Docker, and CI/CD pipelines with Google Cloud.
              </p>

              <div className="flex flex-wrap gap-2">
                <Tech technology="python" />
                <Tech technology="react" />
                <Tech technology="sveltekit" />
              </div>
            </div>
          }
        />
      </Accordion>
    </section>
  );
};

export default Work;

interface ProjectProps {
  role: string;
  company: string;
  content: React.ReactNode;
  date: string;
  imgSrc: string;
  accordionValue: string;
}

const WorkAccordionItem = ({
  role,
  company,
  content,
  date,
  imgSrc,
  accordionValue,
}: ProjectProps) => {
  return (
    <AccordionItem value={accordionValue}>
      <AccordionTrigger className="[&>svg]:text-blue-400 group">
        <div className="flex items-center gap-4">
          <span className="p-3 border border-border/80 rounded-sm shadow-xs group-hover:shadow-sm transition-shadow">
            <Image
              src={imgSrc}
              alt={company}
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </span>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{role}</h3>

            <div className="flex items-center">
              <p className="text-sm text-primary/80">{company}</p>
              <Dot className="text-muted-foreground" />
              <p className="text-sm text-muted-foreground font-mono">{date}</p>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
};
