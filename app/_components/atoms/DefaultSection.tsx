"use client";
import { motion } from "framer-motion";

export const DefaultSection =({
  children,
  id,
}: Readonly<{
  children: React.ReactNode;
  id: string;
}>) => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024;

  const initial = isDesktop ? { opacity: 0, y: 50 } : {};
  const whileInView = isDesktop ? { opacity: 1, y: 0} : {};

  return (
    <motion.section
      className="bg-white px-7 py-20 lg:py-28"
      id={`${id}`}
      initial={initial}
      whileInView={whileInView}
      transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
}

export const DefaultSectionDark =({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <motion.section
      className="bg-black text-white uppercase h-[70vh] flex flex-col justify-between text-sm"
    >
      {children}
    </motion.section>
  );
}