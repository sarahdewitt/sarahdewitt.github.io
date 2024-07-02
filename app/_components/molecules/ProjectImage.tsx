"use client";
import Link from "next/link";
import Picture from "../atoms/Picture";
import { MutableRefObject, useRef, useState } from "react";
import { useMouse } from "@uidotdev/usehooks";
import { motion } from "framer-motion";

interface ProjectImageProps {
  name: string;
  desc: string;
  src: string;
  alt: string;
  href: string;
}

export default function ProjectImage({
  name,
  desc,
  src,
  alt,
  href,
}: ProjectImageProps) {
  return (
    <Link href={href}>
      <Picture src={`${src}`} alt={`${alt}`} />
      <p className="flex flex-col pt-6 text-base tracking-normal text-black lg:w-3/4 lg:text-lg">
        <span>{name}</span>
        <span className="text-light-gray leading-snug">{desc}</span>
      </p>
    </Link>
  );
}
