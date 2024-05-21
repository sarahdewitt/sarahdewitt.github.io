"use client"
import { motion } from "framer-motion";

export default function DefaultSection({
  children,
  id,
}: Readonly<{
  children: React.ReactNode;
  id: string;
}>) {
  return (
    <motion.div
      className="py-20 px-7 lg:py-28"
      id={`${id}`}
      initial={{ opacity: 0, y:100 }}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay: 0.25, ease: "easeInOut"}}
    >
      {children}
    </motion.div>
  );
}
