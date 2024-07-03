import Link from "next/link";

interface AnchorButtonProps {
  link: string;
  text: string;
}

export default function AnchorButton({ link, text }: AnchorButtonProps) {
  return (
    <Link
      href={`${link}`}
      className="flex w-3/4 items-center justify-between rounded-full border border-black px-5 py-5 text-xs font-medium uppercase text-black transition-colors duration-150 ease-in hover:bg-black hover:text-white md:w-1/4 lg:text-base"
      target="_blank"
    >
      <p>{text}</p>
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Link>
  );
}
