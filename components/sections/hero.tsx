import React from "react";
import { VideoText } from "../magicui/video-text";
import Image from "next/image";

const data = {
  name: "Jaedon Spurlock",
  role: "Software Engineer",
};

const Hero = () => {
  return (
    <section id="header" className="flex flex-col gap-4">
      <div className="rounded-md border border-border w-full h-60 relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <Image
          src="/jaedon.png"
          alt="Avatar"
          width={270}
          height={270}
          className="rounded-md object-cover absolute right-10 -bottom-40 invert-[4%] dark:invert-[90%]"
        />
      </div>

      <div className="flex items-center gap-4 justify-between">
        <div>
          <div className="relative h-[32px] w-[240px]">
            <VideoText fontSize={"1.85rem"} src="/nature.mp4">
              {data.name}
            </VideoText>
          </div>

          <p className="text-primary/70 text-xl font-semibold">{data.role}</p>
        </div>
      </div>

      <p
        id="description"
        className="text-muted-foreground leading-relaxed tracking-wide"
      >
        Im a full-stack software engineer from Oceanside, California. I have
        industry experience in software engineering with experience in
        full-stack development, devops, and infrastructure (IaC).
      </p>
    </section>
  );
};

export default Hero;
