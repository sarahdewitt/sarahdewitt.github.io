import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./NavMobile.module.css";
import Anchor from "../../atoms/Anchor/Anchor";
import { menuSlide } from "@/app/_utils/anim";

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

export default function NavMobile() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          {anchors.map((anchor, index) => {
            return <Anchor key={index} link={anchor.link} text={anchor.text} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
