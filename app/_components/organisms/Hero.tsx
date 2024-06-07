"use client";
import { motion, useInView, useTransform } from "framer-motion";
import AnchorButton from "../atoms/AnchorButton/AnchorButton";
import DefaultSection from "../atoms/DefaultSection";
import Title from "../atoms/Text/Title";
import { useEffect, useRef, useState } from "react";

export default function Hero({ scrollYProgress }: any) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "50%" });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const style = isMobile ? {scale:1, rotate: 0} : {scale, rotate}
  
  return (
    <motion.div
      className="md:sticky top-0 -z-10 md:h-[100vh] bg-white px-7 py-20 lg:py-28"
      id={"Hero"}
      style={style}
      ref={body}
    >
      <Title />
    </motion.div>
  );
}
