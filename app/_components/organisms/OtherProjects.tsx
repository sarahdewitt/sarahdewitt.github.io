import DefaultSection from "../atoms/DefaultSection";
import Heading from "../atoms/Text/Heading";
import Project from "../molecules/Projects/Project";


const projects = [
  {
    name: "Project name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue eu quam porttitor laoreet. Donec sit amet libero orci. Ut placerat neque at tempus imperdiet.",
    badges: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Project name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue eu quam porttitor laoreet. Donec sit amet libero orci. Ut placerat neque at tempus imperdiet.",
    badges: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Project name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue eu quam porttitor laoreet. Donec sit amet libero orci. Ut placerat neque at tempus imperdiet.",
    badges: ["HTML", "CSS", "JavaScript"],
  },
];

export default function OtherProjects() {
  return (
    <DefaultSection id="otherProjects">
      <Heading text={"Other Projects"} />
      {projects.map((project, index) => {
        return (
          <Project
            key={index}
            name={project.name}
            desc={project.desc}
            badges={project.badges}
          />
        );
      })}
    </DefaultSection>
  );
}
