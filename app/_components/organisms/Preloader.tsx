import { motion } from "framer-motion";
import React from "react";

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};


export default function Preloader() {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed z-[99] flex h-screen w-screen items-center justify-center bg-black"
    >
      <>
        <motion.p
          variants={opacity}
          initial="initial"
          animate="enter"
          className="absolute z-[1] flex items-center font-mondwest text-[10vw] md:text-5xl uppercase text-white leading-none text-center"
        >
          Bribing the servers... One moment! &#x2697;
        </motion.p>
      </>
    </motion.div>
  );
}
