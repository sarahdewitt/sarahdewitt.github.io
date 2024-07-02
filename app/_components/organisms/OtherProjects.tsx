import { DefaultSection } from "../atoms/DefaultSection";
import Heading from "../atoms/Text/Heading";
import Project from "../molecules/Project";

const projects = [
  {
    name: "Personal Portfolio - V1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue eu quam porttitor laoreet. Donec sit amet libero orci. Ut placerat neque at tempus imperdiet.",
  },
  {
    name: "Pickup App - UI/UX",
    desc: "As part of the Human-Computer Interaction subject of my diploma course, this assignment focuses on the design of a high fidelity multimedia prototype of a delivery service system. Hence, Pickup was created as a courier service mobile application for freelance and home-based sellers and delivery riders. I was the main designer working on this project in our fourth semester, 2020 with a team of four other members​.",
  },
  {
    name: "Closecall - A Women's Safety App",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue eu quam porttitor laoreet. Donec sit amet libero orci. Ut placerat neque at tempus imperdiet.",
  },
];

export default function OtherProjects() {
  return (
    <DefaultSection id="otherProjects">
      <Heading text={"Other Projects"} />
      <div>
        {projects.map((project, index) => {
          return (
            <Project key={index} name={project.name} desc={project.desc} />
          );
        })}
      </div>
    </DefaultSection>
  );
}
