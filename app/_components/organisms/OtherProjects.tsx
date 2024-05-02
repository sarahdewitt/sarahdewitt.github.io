import DefaultSection from "../atoms/DefaultSection";
import Heading from "../atoms/Heading";
import Project from "../molecules/Project";

export default function OtherProjects() {
  return (
    <DefaultSection id="otherProjects">
      <Heading text={"Other Projects"} />
      <Project
        name={"Project Name"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue eu quam porttitor laoreet. Donec sit amet libero orci. Ut placerat neque at tempus imperdiet."
        }
        badges={["HTML", "CSS", "JavaScript"]}
      />
      <Project
        name={"Project Name"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue eu quam porttitor laoreet. Donec sit amet libero orci. Ut placerat neque at tempus imperdiet."
        }
        badges={["HTML", "CSS", "JavaScript"]}
      />
    </DefaultSection>
  );
}
