"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import React from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay before animation starts
  childDelay?: number; // Delay between each child
}

const StaggerContainer = ({
  children,
  className = "",
  delay = 0.2,
  childDelay = 0.05,
}: StaggerContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: childDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerContainer;
