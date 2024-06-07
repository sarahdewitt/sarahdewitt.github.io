import Anchor from "../atoms/Anchor/Anchor";

export default function Footer() {
  return (
    <div className="border-t border-gray-500 px-7 py-8 lg:flex lg:items-center lg:justify-between lg:py-5">
      <p className="pb-3 text-xs uppercase tracking-wide lg:pb-0">
        Designed and Developed with NextJS by Sarah De Witt ❤️
      </p>
      <span className="flex flex-wrap uppercase">
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
