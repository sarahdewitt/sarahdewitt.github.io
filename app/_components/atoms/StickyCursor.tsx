"use client";
import { easeInOut, motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function StickyCursor({ isHovered } : { isHovered : boolean }) {
  const cursorSize = 0 ;
  const expandedCursorSize = 110;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { type: "spring", stiffness: 300, damping: 28 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e;
    mouse.x.set(
      clientX - (isHovered ? expandedCursorSize / 2 : cursorSize / 2),
    );
    mouse.y.set(
      clientY - (isHovered ? expandedCursorSize / 2 : cursorSize / 2),
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        animate={{
          width: isHovered ? expandedCursorSize : cursorSize,
          height: isHovered ? expandedCursorSize : cursorSize,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28, duration: 0.1 }}
        className="t-0 l-0 pointer-events-none fixed z-[9999] flex h-0 w-0 items-center justify-items-center rounded-full bg-black text-center"
      >
        {isHovered && (
          <span className="m-auto flex-auto text-base uppercase tracking-wide text-white">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
}
