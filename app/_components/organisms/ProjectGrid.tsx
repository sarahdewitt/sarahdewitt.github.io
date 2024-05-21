import ProjectImage from "../molecules/Projects/ProjectImage";


export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-7 justify-start">
      <div className="md:col-span-3">
        <ProjectImage
          name={"Project Name"}
          desc={"Brief Description"}
          src={"/testimg.jpg"}
          alt={"alt text"}
        />
      </div>
      <div className="md:col-span-3">
        <ProjectImage
          name={"Project Name"}
          desc={"Brief Description"}
          src={"/testimg.jpg"}
          alt={"alt text"}
        />
      </div>
      <div className="md:col-span-4">
        <ProjectImage
          name={"Project Name"}
          desc={"Brief Description"}
          src={"/testimg.jpg"}
          alt={"alt text"}
        />
      </div>
      <div className="md:col-span-2">
        <ProjectImage
          name={"Project Name"}
          desc={"Brief Description"}
          src={"/testimg.jpg"}
          alt={"alt text"}
        />
      </div>
    </div>
  );
}
