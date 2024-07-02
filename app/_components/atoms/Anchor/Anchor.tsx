import Link from "next/link";
import styles from "./Anchor.module.css";

export default function Anchor({ link, text }: { link: string; text: string }) {
  return (
    <div className={"relative z-10 flex cursor-pointer flex-col text-sm"}>
      <Link
        href={`${link}`}
        className={"hover:text-gray cursor-pointer transition-all ease-in"}
      >
        {text}
      </Link>
    </div>
  );
}
