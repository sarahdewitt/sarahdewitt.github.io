import Anchor from "../atoms/Anchor/Anchor";
import DefaultSection from "../atoms/DefaultSection";

export default function Footer() {
  return (
    <div className="px-7 py-8 lg:py-10 lg:flex lg:justify-between">
      <p className="text-light-pink uppercase text-xs lg:text-base pb-3 lg:pb-0">
        Designed and Developed with ❤️ by Sarah De Witt
      </p>
      <span className="flex flex-wrap">
        <Anchor link={"/"} text={"Email"} />
        <Anchor link={"/"} text={"Github"} />
        <Anchor link={"/"} text={"LinkedIn"} />
        <Anchor link={"/"} text={"Behance"} />
        <Anchor link={"/"} text={"Dribbble"} />
        <Anchor link={"/"} text={"Medium"} />
      </span>
    </div>
  );
}
