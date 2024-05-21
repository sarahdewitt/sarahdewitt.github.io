"use client";
import Link from "next/link";
import Anchor from "../atoms/Anchor/Anchor";
import { useScramble } from "use-scramble";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Hamburger from "../molecules/Navigation/Hamburger/Hamburger";

const anchors = [
  {
    link: "#About",
    text: "About",
  },
  {
    link: "#Experience",
    text: "Experience",
  },
  {
    link: "#Projects",
    text: "Projects",
  },
];

export default function Header() {
  const { ref, replay } = useScramble({
    text: "Sarah De Witt",
    speed: 0.5,
    scramble: 5,
  });

  //to get info on the scroll Y coordinates with useScroll hook framer motion
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious(); //to determine whether its scrolling up or down. compare the values
    console.log(previous);
    if (previous !== undefined && latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.div
        className="flex justify-between px-7 py-8 lg:py-10 sticky top-0 items-center z-10 bg-white z-50"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Link
          className="text-base lg:text-xl text-black font-medium"
          ref={ref}
          onMouseOver={replay}
          href={"/"}
        />
        <div className="hidden md:flex items-center">
          {anchors.map((anchor, index) => {
            return <Anchor key={index} link={anchor.link} text={anchor.text} />;
          })}
        </div>
        <div className="block md:hidden">
          <Hamburger />
        </div>
      </motion.div>
    </>
  );
}
