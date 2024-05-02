import Link from "next/link";

export default function Anchor({link, text}: {link: string, text: string}) {
  return (
    <Link href={`${link}`} className="text-pink uppercase text-xs lg:text-base font-normal pl-5 hover:underline">{text}</Link>
  )
}
