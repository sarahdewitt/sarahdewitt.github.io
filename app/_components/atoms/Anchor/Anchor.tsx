import Link from "next/link";
import styles from "./Anchor.module.css";

export default function Anchor({ link, text }: { link: string; text: string }) {
  return (
    <div className={styles.el}>
      <Link href={`${link}`} className={styles.link}>
        {text}
      </Link>
    </div>
  );
}
