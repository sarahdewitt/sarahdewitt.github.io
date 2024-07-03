import Link from "next/link";

export default function Playing() {
  return (
    <div>
      <Link href={"https://open.spotify.com/track/5wHgv0W1wf0OJxLyN8cXEg?si=eab24cec81494476"} className="mx-auto flex w-1/2">
        <span className="bg-white pr-2 uppercase">Now Playing:</span>

        <span className="flex w-1/2 overflow-hidden whitespace-nowrap uppercase lg:cursor-[url(/images/hozier.jpg),_default]">
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
