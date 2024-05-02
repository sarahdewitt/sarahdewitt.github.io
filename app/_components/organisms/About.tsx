import Image from "next/image";
import DefaultSection from "../atoms/DefaultSection";
import Heading from "../atoms/Heading";

export default function About() {
  return (
    <DefaultSection id="About">
      <Heading text={"About Me"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16">
        <Image
          src={"/testimg.jpg"}
          alt={"Profile photo"}
          width={168}
          height={224}
          className="rounded-2xl"
        />
        <p className="text-xs lg:text-base">
          Hello, I'm Sarah and I'm a self-motivated and results-driven IT fresh
          graduate, seeking to utilise my attention to detail and enhance my
          programming and development skills, particularly to bring web-based
          applications to life.
        </p>
        <p className="text-xs lg:text-base">
          Aspiring to be a web developer, I am constantly searching for
          opportunities that will allow me to extend my knowledge in the web
          development industry while improving my own capabilities and to
          eventually empower those around me.
        </p>
      </div>
    </DefaultSection>
  );
}
