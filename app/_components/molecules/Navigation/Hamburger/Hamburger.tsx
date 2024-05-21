"use client";
import { useState } from "react";
import styles from "./Hamburger.module.css";
import { AnimatePresence } from "framer-motion";
import NavMobile from "../NavMobile";

export default function Hamburger() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={styles.button}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div
        className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
      ></div>
      <AnimatePresence mode="wait">{isActive && <NavMobile />}</AnimatePresence>
    </div>
  );
}
