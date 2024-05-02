"use client";
import Link from "next/link";
import Image from "next/image";
import styles from './AnchorButton.module.css'

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

  // whileHover={{ scale: 1.1 }}
  //       whileTap={{scale: 0.9}}
  //       transition={{ type: "spring", stiffness: 400, damping: 17}}
  return (
    <Link href={`${link}`} className={`${styles.gradient}`}>
        <span className="">{text}</span>
        {/* <Image
          src={`${src}`}
          alt={`${alt}`}
          width={"20"}
          height={"20"}
        /> */}
    </Link>
  );
}
