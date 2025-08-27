"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Title from "../title";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "motion/react";
import { ProjectModal } from "../project-modal";

export const projects = [
  // {
  //   title: "PaperMind",
  //   description:
  //     "Summarize research papers using AI and see a visual map of the paper's references",
  //   websiteUrl: "",
  //   githubUrl: "",
  //   imageSrc: "",
  //   date: "June 2025 - Present",
  //   tags: [
  //     "TypeScript",
  //     "ReactJS",
  //     "Vite",
  //     "Amazon S3",
  //     "Amazon Cloudfront",
  //     "PostgreSQL",
  //   ],
  //   features: ["Search for music, playlists, or albums"],
  //   archived: true,
  // },
  {
    title: "Routify",
    description:
      "City pathfinding visualizer website used to understand pathfinding algorithms",
    websiteUrl: "https://www.routify.cc",
    githubUrl: "https://www.github.com/jaedonspurlock01/routify",
    imageSrc: "/projects/routify.gif",
    date: "Jan 2024 - Mar 2024",
    tags: ["typeScript", "React", "Nominatim API", "Overpass API", "S3"],
    features: [
      "Search any city in the world",
      "Choose between DFS, BFS, A*, and Dijkstra algorithms",
      "Customize the color scheme",
      "Change animation speed realtime",
    ],
    content: <div></div>,
  },
];

const Projects = () => {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects">
      <Title>Projects</Title>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[60]"
          />
        )}
      </AnimatePresence>

      <ProjectModal active={active} setActive={setActive} id={id} ref={ref} />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            id={id}
            setActive={setActive}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;

interface ProjectProps {
  setActive: (card: (typeof projects)[number] | null) => void;
  id: string;
  project: (typeof projects)[number];
}

const ProjectCard = ({ project, setActive, id }: ProjectProps) => {
  return (
    <motion.div
      layoutId={`card-${project.title}-${id}`}
      key={`card-${project.title}-${id}`}
      onClick={() => setActive(project)}
      className="border border-border rounded-lg p-2 shadow-xs cursor-pointer hover:shadow-sm transition-shadow"
    >
      <motion.div
        layoutId={`image-${project.title}-${id}`}
        className="contents"
      >
        <Image
          src={project.imageSrc}
          alt={project.title}
          width={1000}
          height={1000}
          unoptimized={project.imageSrc.endsWith(".gif")}
          className="w-full rounded-lg aspect-square object-cover"
        />
      </motion.div>
    </motion.div>
  );
};
