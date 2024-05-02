"use client";
import Hero from "./_components/organisms/Hero";
import Header from "./_components/organisms/Header";
import About from "./_components/organisms/About";
import Experience from "./_components/organisms/Experience";
import OtherProjects from "./_components/organisms/OtherProjects";
import Projects from "./_components/organisms/Projects";
import Footer from "./_components/organisms/Footer";
import React, { useEffect } from "react";
import Lenis from "lenis";

function page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OtherProjects />
      <Footer />
    </>
  );
}

export default page;
