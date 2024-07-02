import Link from "next/link";

export default function Playing() {
  return (
    <div>
      <Link href={"/"} className="mx-auto flex w-1/2">
        <span className="bg-white pr-2 uppercase">Now Playing:</span>

        <span className="flex w-1/2 overflow-hidden whitespace-nowrap uppercase">
          <span className="animate-infinite-scroll-header pr-2">
            Be (Acoustic) - Hozier
          </span>
          <span className="animate-infinite-scroll-header pr-2">
            Be (Acoustic) - Hozier
          </span>
        </span>
      </Link>
    </div>
  );
}
