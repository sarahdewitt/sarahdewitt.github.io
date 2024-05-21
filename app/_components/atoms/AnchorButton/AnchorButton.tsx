import Link from "next/link";

interface AnchorButtonProps {
  link: string;
  text: string;
}

export default function AnchorButton({
  link,
  text,
}: AnchorButtonProps) {
  return (
    <Link
      href={`${link}`}
      className="text-black font-medium uppercase text-xs lg:text-base inline-flex items-center border border-black px-8 py-5 rounded-full hover:bg-black hover:text-white transition-colors duration-150 ease-in mt-8 md:mt-5"
    >
      <span className="">{text}</span>
    </Link>
  );
}
