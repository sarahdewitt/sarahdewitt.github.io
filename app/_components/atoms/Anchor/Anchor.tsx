import Link from "next/link";

export default function Anchor({ link, text }: { link: string; text: string }) {
  return (
    <div className={"relative z-10 flex cursor-pointer flex-col text-sm"}>
      <Link
        href={`${link}`}
        className={"hover:text-light-gray cursor-pointer transition-all ease-in"}
        target="_blank"
      >
        {text}
      </Link>
    </div>
  );
}
