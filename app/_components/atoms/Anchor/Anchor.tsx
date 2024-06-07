import Link from "next/link";
import styles from "./Anchor.module.css";

export default function Anchor({ link, text }: { link: string; text: string }) {
  return (
    <div className={"relative z-10 flex cursor-pointer flex-col p-2 text-xs"}>
      <Link
        href={`${link}`}
        className={"cursor-pointer transition-all ease-in hover:text-gray-500"}
      >
        {text}
      </Link>
    </div>
  );
}
