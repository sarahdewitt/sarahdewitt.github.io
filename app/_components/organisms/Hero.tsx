"use client";
import { motion, useTransform } from "framer-motion";
import { Title, TitleDesktop } from "../atoms/Text/Title";
import { useRef } from "react";
import {Header, MobileHeader} from "../molecules/Header";
import HeroFooter from "../molecules/HeroFooter";

export default function Hero({ scrollYProgress }: any) {
  const body = useRef(null);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const style = isMobile ? { scale: 1, rotate: 0 } : { scale, rotate };

  return (
    // lg:py-28
    <motion.div
      className="top-0 -z-10 flex flex-col bg-white md:sticky h-[90vh] md:h-[100vh]"
      style={style}
      ref={body}
    >
      <Header />
      <MobileHeader/>
      <motion.div className="my-auto" id={"Hero"}>
        <Title />
        <TitleDesktop />

        {/* <p className="text-center text-sm font-normal uppercase pt-10">
          (scroll for more)
        </p> */}
      </motion.div>
      <HeroFooter />
    </motion.div>
  );
}
