import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Location from "@/components/sections/location";
import Photos from "@/components/sections/photos";
import Projects from "@/components/sections/projects";
import Work from "@/components/sections/work";
import StaggerContainer from "@/components/stagger-container";

export default function Home() {
  return (
    <StaggerContainer
      childDelay={0.2}
      className="mt-20 mb-40 flex flex-col gap-16"
    >
      <Hero />
      <Work />
      <Projects />
      <Location />
      <Contact />
      <Photos />
    </StaggerContainer>
  );
}
