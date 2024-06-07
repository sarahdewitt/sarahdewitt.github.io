"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Title() {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-50%" });

  const animation = {
    initial: { y: "100%" },
    enter: {
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.25 },
    },
  };
  return (
    <div ref={body} className="overflow-hidden">
      <motion.h1
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
        className="flex flex-col items-start font-montreal text-4xl uppercase text-black md:text-6xl lg:text-[7rem]"
      >
        <span>Sarah De Witt</span>
        <span className="md:self-end">Front End Developer</span>
        <span>Based in Kuala Lumpur</span>
        <span className="md:self-end">Portfolio @ 2024</span>
      </motion.h1>
    </div>
  );
}
