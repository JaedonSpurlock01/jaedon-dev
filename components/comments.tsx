"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

const Comments = () => {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="JaedonSpurlock01/jaedon-dev"
      repoId="R_kgDOPiDG4w"
      category="General"
      categoryId="DIC_kwDOPiDG484CupHX"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === "dark" ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
};

export default Comments;
