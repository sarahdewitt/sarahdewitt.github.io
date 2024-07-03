import React from "react";
import Heading from "./_components/atoms/Text/Heading";
import Paragraph from "./_components/atoms/Text/Paragraph";
import AnchorButton from "./_components/atoms/AnchorButton/AnchorButton";
import Link from "next/link";

export default function NotFound() {
  const text: string[] = new Array(12).fill("404");
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <img
        src="images/gifs/confused.gif"
        alt=""
        className="w-1/2 md:w-[20vw]"
      />
      <div className="flex w-screen items-center overflow-hidden">
        <p className="flex animate-infinite-scroll gap-10 whitespace-nowrap text-8xl uppercase lg:text-[10rem]">
          {text.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
      </div>
      <Paragraph>You seem lost...</Paragraph>
      <Paragraph>Need some help getting back?</Paragraph>
      <Link
        href={"/"}
        className="pt-5 text-base underline transition-all ease-in hover:text-light-gray lg:text-2xl"
      >
        Yes, bring me home
      </Link>
    </div>
  );
}
