import Image from "next/image";
import DefaultSection from "../atoms/DefaultSection";
import Heading from "../atoms/Text/Heading";
import Paragraph from "../atoms/Text/Paragraph";
import { motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function About({ scrollYProgress }: any) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const style = isMobile ? { scale: 1, rotate: 0 } : { scale, rotate };

  return (
    <motion.div
      className="bg-white px-7 pt-20 md:h-[100vh] lg:pt-28"
      id={"About"}
      style={style}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
      >
        <Heading text={"About Me"} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10 lg:gap-16">
          <Paragraph
            text="Hello, I'm Sarah and I'm a self-motivated and results-driven IT fresh
          graduate, seeking to utilise my attention to detail and enhance my
          programming and development skills, particularly to bring web-based
          applications to life."
          />
          <Paragraph
            text="Aspiring to be a web developer, I am constantly searching for
          opportunities that will allow me to extend my knowledge in the web
          development industry while improving my own capabilities and to
          eventually empower those around me."
          />
          <Image
            src={"/testimg.jpg"}
            alt={"Profile photo"}
            width={300}
            height={100}
            className="grayscale"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
