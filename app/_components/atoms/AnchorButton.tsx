"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnchorButtonProps {
  link: string;
  text: string;
  src: string;
  alt: string;
}

export default function AnchorButton({
  link,
  text,
  src,
  alt,
}: AnchorButtonProps) {

  return (
    <Link href={`${link}`}>
      <motion.div
        className="text-pink font-normal uppercase text-xs lg:text-base inline-flex items-center border border-pink px-5 py-3 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{scale: 0.9}}
        transition={{ type: "spring", stiffness: 400, damping: 17}}
      >
        <span className="pr-2">{text}</span>
        <Image
          src={`${src}`}
          alt={`${alt}`}
          width={"20"}
          height={"20"}
        />
      </motion.div>
    </Link>
  );
}
