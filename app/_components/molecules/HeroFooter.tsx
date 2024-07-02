import React from "react";
import Anchor from "../atoms/Anchor/Anchor";

export default function HeroFooter() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 text-sm uppercase">
      <div className="flex gap-3">
        <Anchor link={"/"} text={"Github"} />
        <Anchor link={"/"} text={"LI"} />
        <Anchor link={"/"} text={"Be"} />
        <Anchor link={"/"} text={"Me"} />
      </div>
      <p className="hidden md:block">(Scroll to Discover)</p>
    </div>
  );
}
