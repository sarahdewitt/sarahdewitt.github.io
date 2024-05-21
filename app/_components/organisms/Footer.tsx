import Anchor from "../atoms/Anchor/Anchor";

export default function Footer() {
  return (
    <div className="px-7 py-8 lg:py-10 lg:flex lg:justify-between text-white bg-black">
      <p className="text-xs lg:text-base pb-3 lg:pb-0">
        Designed and Developed with NextJS by Sarah De Witt ❤️
      </p>
      <span className="flex flex-wrap text-white" id="dark">
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
