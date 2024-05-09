import Link from "next/link";
import Picture from "../atoms/Picture";
import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectImageProps {
  name: string;
  desc: string;
  src: string;
  alt: string;
}

export default function ProjectImage({
  name,
  desc,
  src,
  alt,
}: ProjectImageProps) {
  return (
    <div>
      
      <Link href={"#"}>
        <p className="text-black text-base lg:text-xl pb-2">
          <span>{name}</span> / {desc}
        </p>
        <Picture src={`${src}`} alt={`${alt}`} />
      </Link>
    </div>
  );
}
