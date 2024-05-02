import Link from "next/link";
import styles from './Anchor.module.css'

export default function Anchor({link, text}: {link: string, text: string}) {
  return (
    <Link href={`${link}`} className={styles.anchorAnimate}>{text}</Link>
  )
}
