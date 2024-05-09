import Link from "next/link";
import Anchor from "../atoms/Anchor/Anchor";
import { useScramble } from "use-scramble";

export default function Header() {
  const {ref, replay} = useScramble({
    text: "Sarah De Witt",
    speed: 0.5,
    scramble: 5
  })
  return (
    <div className="flex justify-between px-7 py-8 lg:py-10 sticky top-0 bg-white items-center z-10">
      <Link className="text-xs lg:text-base text-black font-medium" ref={ref} onMouseOver={replay} href={"/"}/>
      <div className="flex items-center">
        <Anchor link={"#About"} text={"About"} />
        <Anchor link={"#Experience"} text={"Experience"} />
        <Anchor link={"#Projects"} text={"Projects"} />
      </div>
    </div>
  );
}
