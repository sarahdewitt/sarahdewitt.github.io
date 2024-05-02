import DefaultSection from "../atoms/DefaultSection";
import Heading from "../atoms/Heading";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {
  return (
    <DefaultSection id="Projects">
        <Heading text={"Selected Projects"}/>
        <ProjectGrid/>
    </DefaultSection>
  )
}
