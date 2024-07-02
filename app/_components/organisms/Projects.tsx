import {DefaultSection} from "../atoms/DefaultSection";
import Heading from "../atoms/Text/Heading";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <DefaultSection id="Projects">
      <Heading text={"Selected Projects"} />
      <ProjectGrid />
    </DefaultSection>
  );
}
