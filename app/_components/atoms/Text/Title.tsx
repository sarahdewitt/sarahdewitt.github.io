"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

export const Title = () => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-50%" });

  const animation = {
    initial: { y: "100%" },
    enter: {
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 2.9 },
    },
  };
  return (
    <div className="block overflow-hidden py-20 md:hidden">
      <motion.div className="font-montreal text-[10vw] uppercase leading-none text-black">
        <h1 className="flex flex-col px-4">
          <span className="flex items-center gap-1">
            <img src="images/gifs/raccoon.gif" alt="" className="w-[9vw]" />
            Sarah De Witt
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <img
              src="images/gifs/audrey-hello.gif"
              alt=""
              className="w-[9vw]"
            />
            Front End{" "}
            <img src="images/gifs/keyboard.gif" alt="" className="w-[12vw]" />{" "}
          </span>
          Developer
          <span className="flex items-center gap-1">
            Based <img src="images/gifs/world.gif" alt="" className="w-[9vw]" />{" "}
            in Kuala{" "}
          </span>
          Lumpur
          <span className="flex items-center gap-1">
            Portfolio{" "}
            <img src="images/gifs/pizza-cat.gif" alt="" className="w-[9vw]" />{" "}
            2024
          </span>
        </h1>
      </motion.div>
    </div>
  );
};

export const TitleDesktop = () => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-50%" });

  const animation = {
    initial: { y: "100%" },
    enter: {
      y: "0",
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 2.9 },
    },
  };

  return (
    <div ref={body} className="mx-auto my-auto hidden overflow-hidden md:block">
      <motion.div
        variants={animation}
        initial="initial"
        animate={isInView ? "enter" : ""}
        // md:text-5xl lg:text-[4rem] xl:text-[5rem] 2xl:text-[6.5rem]
        //hidden lg:flex flex-col items-center
        className="text-center font-montreal text-[5.9vw] uppercase leading-none text-black"
      >
        <h1 className="flex items-center justify-center gap-2">
          <span className="w-[5.9vw]">
            <img src="images/gifs/raccoon.gif" alt="" />
          </span>
          Sarah De Witt
          <span className="w-[5.9vw]">
            <img src="images/gifs/audrey-hello.gif" alt="" className="cover" />
          </span>
        </h1>
        {/* md:self-end */}
        <h1 className="flex items-center justify-center gap-2">
          Front End{" "}
          <span className="w-[7vw]">
            <img src="images/gifs/keyboard.gif" alt="" />
          </span>{" "}
          Developer
        </h1>
        <h1 className="flex items-center justify-center gap-2">
          Based{" "}
          <span className="w-[4.9vw]">
            <img src="images/gifs/world.gif" alt="" />
          </span>{" "}
          in Kuala Lumpur
        </h1>
        <h1 className="flex items-center justify-center gap-2">
          Portfolio{" "}
          <span className="w-[5.9vw]">
            <img src="images/gifs/pizza-cat.gif" alt="" />
          </span>{" "}
          2024
        </h1>
      </motion.div>
    </div>
  );
};
