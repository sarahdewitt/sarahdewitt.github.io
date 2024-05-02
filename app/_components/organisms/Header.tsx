import Anchor from "../atoms/Anchor";

export default function Header() {
  return (
    <div className="flex justify-between px-8 py-8 lg:px-12 lg:py-10 sticky top-0 bg-black items-center z-10">
      <p className="text-xs lg:text-base uppercase text-pink">Sarah De Witt</p>
      <span className="invisible md:visible">
        <Anchor link={"#About"} text={"About"} />
        <Anchor link={"#Experience"} text={"Experience"} />
        <Anchor link={"#Projects"} text={"Projects"} />
      </span>
    </div>
  );
}
