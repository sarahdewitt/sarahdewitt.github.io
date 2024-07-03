import React from "react";
import Anchor from "../atoms/Anchor/Anchor";

export default function HeroFooter() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 text-sm uppercase">
      <div className="flex gap-3">
        <Anchor link={"https://github.com/sarahdewitt"} text={"Github"} />
        <Anchor link={"https://www.linkedin.com/in/sarah-de-witt-926b741a3/"} text={"LI"} />
        <Anchor link={"https://sarahejdewitt.medium.com/"} text={"Me"} />
      </div>
      <p className="hidden md:block">(Scroll to Discover)</p>
    </div>
  );
}
