"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../title";

const photos = [
  {
    src: "/personal/1.jpg",
    desc: "Potato Chip Rock, Escondido",
  },
  {
    src: "/personal/2.png",
    desc: "Black's Beach, Carlsbad",
  },
  {
    src: "/personal/5.png",
    desc: "Scout Mountain, Idaho",
  },
  {
    src: "/personal/5.png",
    desc: "Scout Mountain, Idaho",
  },
  {
    src: "/personal/5.png",
    desc: "Scout Mountain, Idaho",
  },
  {
    src: "/personal/5.png",
    desc: "Scout Mountain, Idaho",
  },
];

const Photos = () => {
  return (
    <section id="photos">
      <Title>Photos</Title>
      <div className="relative w-full h-[600px] mt-4 border border-border rounded-md overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-background rounded-md bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {photos.map((photo, index) => (
          <PhotoCard key={index} src={photo.src} desc={photo.desc} />
        ))}
      </div>
    </section>
  );
};

export default Photos;

interface PhotoProps {
  src: string;
  desc: string;
}

const randomOffset = () => {
  return {
    top: `${Math.random() * 300}px`,
    left: `${Math.random() * 400}px`,
    rotate: `${Math.random() * 30 - 15}deg`, // between -15° and +15°
  };
};

const PhotoCard = ({ src, desc }: PhotoProps) => {
  const style = React.useMemo(() => randomOffset(), []);

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="absolute cursor-grab active:cursor-grabbing group"
      style={style}
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="border border-border pb-6 px-3 pt-3 bg-white shadow-lg w-60 group-hover:scale-105 transition-transform duration-300"
      >
        <Image
          src={src}
          alt={desc}
          width={400}
          height={400}
          className="w-full aspect-square object-cover pointer-events-none"
        />
        <p className="italic text-center text-sm mt-2 font-medium text-neutral-800/80">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
};
