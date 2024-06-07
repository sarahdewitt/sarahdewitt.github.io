import AnchorButton from "../atoms/AnchorButton/AnchorButton";
import DefaultSection from "../atoms/DefaultSection";
import Heading from "../atoms/Text/Heading";
import Position from "../molecules/Position";

const positions = [
  {
    position: "Content Creator",
    company: "Nutmeg Books",
    from: "Jan 2024",
    to: "Present (Part-Time)",
    desc: "Testing...",
  },
  {
    position: "Front-End Developer Intern",
    company: "Studio20",
    from: "Dec 2022",
    to: "Feb 2023",
    desc: "Built and styled high-quality websites optimised for speed scalability, cross-browser and cross-device compatibility for a diverse array of clients using technologies such as Javascript, Typescript, React, NextJS, Tailwind CSS, WordPress, and PHP. Collaborated with senior front-end developers, product and project managers, and designers to transform creative concepts into refined digital experiences.",
  },
  {
    position: "Web Developer",
    company: "Nutmeg Books",
    from: "Sep 2021",
    to: "Jan 2022",
    desc: "Redesigned and developed Nutmeg Books' website with cross-browser and cross-device compatibility primarily using HTML, CSS, Sass and JavaScript. Implemented site structure optimisation and content SEO that resulted in a 429% increase in impressions within 6 months.",
  },
  {
    position: "I.T. Intern",
    company: "Fresh Futures Malaysia",
    from: "Dec 2020",
    to: "Feb 2021",
    desc: "Proposed Machine Learning & AI solutions to support an integrated Chatbot via Dialogflow ES according to the company’s business requirements and goals.",
  },
];

export default function Experience() {
  return (
    <DefaultSection id="Experience">
      <Heading text={"Experience"} />
      <div className="pb-8">
        {positions.map((position, index) => {
          return (
            <Position
              key={index}
              position={position.position}
              company={position.company}
              from={position.from}
              to={position.to}
              desc={position.desc}
            />
          );
        })}
      </div>
      <span className="w-full">
        <AnchorButton link={"/"} text={"View My Resume"} />
      </span>
    </DefaultSection>
  );
}
