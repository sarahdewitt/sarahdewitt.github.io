import Anchor from "../atoms/Anchor/Anchor";
import { DefaultSectionDark } from "../atoms/DefaultSection";

export default function Footer() {
  const name: string[] = new Array(12).fill("Sarah De Witt");

  return (
    <DefaultSectionDark>
      <div className="px-7 md:flex justify-between pt-8">
        <div className="pb-5">
          <p className="font-bold">Say hello</p>
          <Anchor
            link={"mailto:sarahejdewitt@gmail.com"}
            text={"sarahejdewitt@gmail.com"}
          />
        </div>
        <div className="flex flex-col justify-between gap-7 md:flex-row">
          <div>
            <p>Sarah De Witt 2024</p>
            <p>Made with ❤️ by Sarah De Witt</p>
          </div>
          <div>
            <Anchor link={"https://github.com/sarahdewitt"} text={"Github"} />
            <Anchor link={"https://www.linkedin.com/in/sarah-de-witt-926b741a3/"} text={"LinkedIn"} />
            <Anchor link={"https://www.behance.net/sarahejdewitt"} text={"Behance"} />
            <Anchor link={"https://dribbble.com/sarahdewitt"} text={"Dribbble"} />
            <Anchor link={"https://sarahejdewitt.medium.com/"} text={"Medium"} />
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-screen items-center overflow-hidden">
          <p className="animate-infinite-scroll flex gap-10 whitespace-nowrap text-9xl uppercase">
            {name.map((name, index) => (
              <span key={index}>{name}</span>
            ))}
          </p>
        </div>
      </div>
    </DefaultSectionDark>
  );
}
