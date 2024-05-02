import AnchorButton from "../atoms/AnchorButton";
import DefaultSection from "../atoms/DefaultSection";
import Heading from "../atoms/Heading";
import Job from "../molecules/Job";

export default function Experience() {
  return (
    <DefaultSection id="Experience">
      <Heading text={"Where I've Worked"} />
      <Job
        position={"Front-End Developer Intern"}
        company={"Studio20"}
        from={"Dec 2022"}
        to={"Feb 2023"}
        desc={
          "Built and styled high-quality websites optimised for speed scalability, cross-browser and cross-device compatibility for a diverse array of clients using technologies such as Javascript, Typescript, React, NextJS, Tailwind CSS, WordPress, and PHP. Collaborated with senior front-end developers, product and project managers, and designers to transform creative concepts into refined digital experiences."
        }
      />
      <Job
        position={"Web Developer"}
        company={"Nutmeg Books"}
        from={"Sep 2021"}
        to={"Jan 2022"}
        desc={
          "Redesigned and developed Nutmeg Books' website with cross-browser and cross-device compatibility primarily using HTML, CSS, Sass and JavaScript. Implemented site structure optimisation and content SEO that resulted in a 429% increase in impressions within 6 months."
        }
      />
      <Job
        position={"I.T. Intern"}
        company={"Fresh Futures Malaysia"}
        from={"Dec 2020"}
        to={"Feb 2021"}
        desc={
          "Proposed Machine Learning & AI solutions to support an integrated Chatbot via Dialogflow ES according to the company’s business requirements and goals."
        }
      />
      <span className="md:float-right">
          <AnchorButton
            link={"/"}
            text={"View My Resume"}
            src={"/point-right.png"}
            alt={"Point Right"}
          />
        </span>
    </DefaultSection>
  );
}
