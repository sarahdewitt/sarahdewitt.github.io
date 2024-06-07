"use client";
import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "../atoms/ProgressBar";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import About from "../organisms/About";
import Experience from "../organisms/Experience";
import Projects from "../organisms/Projects";
import Lenis from "lenis";
import Footer from "../organisms/Footer";
import OtherProjects from "../organisms/OtherProjects";
import { AnimatePresence, useScroll } from "framer-motion";
import Preloader from "../organisms/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    };

    //should probably add a cleanup here
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* <ProgressBar /> */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div ref={container} className="relative -z-20 bg-black md:h-[200vh]">
        <Hero scrollYProgress={scrollYProgress} />
        <About scrollYProgress={scrollYProgress} />
      </div>
      <Experience />
      <Projects />
      <OtherProjects />
      <Footer />
    </>
  );
}
