'use client';
import React, { useEffect } from 'react'
import ProgressBar from '../atoms/ProgressBar';
import Header from '../organisms/Header';
import Hero from '../organisms/Hero';
import About from '../organisms/About';
import Experience from '../organisms/Experience';
import Projects from '../organisms/Projects';
import Lenis from 'lenis';
import Footer from '../organisms/Footer';
import OtherProjects from '../organisms/OtherProjects';
import Test from '../molecules/Test';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();
    
        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        //should probably add a cleanup here
      }, []);
    
      return (
        <>
          {/* <ProgressBar /> */}
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
