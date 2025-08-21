import React from "react";
import Title from "../title";
import { VideoText } from "../magicui/video-text";
import { ShinyButton } from "../magicui/shiny-button";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-4">
      <Title>Contact</Title>

      <div className="relative h-[32px] w-[185px]">
        <VideoText fontSize={"2rem"} src="/nature.mp4">
          Get in touch
        </VideoText>
      </div>

      <p>
        If you have any questions, suggestions, or just want to chat, please
        don&apos;t hesitate to reach out!
      </p>

      <div className="flex items-center gap-4">
        <a href="mailto:jaedonaspurlock@outlook.com">
          <ShinyButton className="py-4">Send Message</ShinyButton>
        </a>
        or
        <ShinyButton className="py-4">Book a call</ShinyButton>
      </div>
    </section>
  );
};

export default Contact;
