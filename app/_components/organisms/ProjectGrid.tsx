import ProjectImage from "../molecules/ProjectImage";

export default function ProjectGrid() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <ProjectImage
            name={"Nutmeg Books (2021)"}
            desc={"HTML / Sass / JavaScript"}
            src={"/images/nutmeg-books.jpg"}
            alt={"Nutmeg Books"}
            href={"https://www.nutmegpublishing.com"}
          />
        </div>  
        <div>
          <ProjectImage
            name={"Coinodoro (2024)"}
            desc={"Next.js / TailwindCSS / Local Storage"}
            src={"/images/coinodoro.jpg"}
            alt={"Coinodoro"}
            href={"https://github.com/sarahdewitt/coinodoro"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Simple Portfolio Template (2024)"}
            desc={"Next.js / TailwindCSS / Framer Motion"}
            src={"/images/portfolio-template.jpg"}
            alt={"Simple Portfolio Template"}
            href={"https://github.com/sarahdewitt/portfolio-template"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Star Wars Wiki (2024)"}
            desc={"SWAPI / Next.js / TailwindCSS / Framer Motion"}
            src={"/images/star-wars-wiki.jpg"}
            alt={"Star Wars Wiki"}
            href={"https://github.com/sarahdewitt/star-wars-wiki"}
          />
        </div>
      </div>
    </div>
  );
}
