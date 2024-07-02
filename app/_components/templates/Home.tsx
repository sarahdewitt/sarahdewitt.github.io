"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "../organisms/Hero";
import About from "../organisms/About";
import Experience from "../organisms/Experience";
import Projects from "../organisms/Projects";
import Footer from "../organisms/Footer";
import OtherProjects from "../organisms/OtherProjects";
import { AnimatePresence, useScroll } from "framer-motion";
import Preloader from "../organisms/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div ref={container} className="relative -z-10 bg-black md:h-[200vh]">
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
