"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: any) {
  return <ReactLenis root>{children}</ReactLenis>;
}