import React from "react";
import Title from "../title";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
      <Title>Projects</Title>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <ProjectCard imgSrc="/projects/routify.gif" />
        <ProjectCard imgSrc="/projects/gdsc.png" />
        <ProjectCard imgSrc="/projects/reside.webp" />
      </ul>
    </section>
  );
};

export default Projects;

interface ProjectProps {
  imgSrc: string;
}

const ProjectCard = ({ imgSrc }: ProjectProps) => {
  return (
    <div className="border border-border rounded-lg p-2 shadow-xs cursor-pointer hover:shadow-sm transition-shadow">
      <Image
        src={imgSrc}
        alt=""
        width={1000}
        height={1000}
        className="w-full rounded-lg aspect-square object-cover"
      />
    </div>
  );
};
