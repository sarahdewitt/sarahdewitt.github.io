import ProjectImage from "../molecules/ProjectImage";

export default function ProjectGrid() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <ProjectImage
            name={"Nutmeg Books"}
            desc={"HTML / Sass / JavaScript"}
            src={"/images/nutmeg-books.jpg"}
            alt={"Nutmeg Books"}
            href={"https://www.nutmegpublishing.com"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Star Wars Wiki"}
            desc={"SWAPI / Next.js / TailwindCSS / Framer Motion"}
            src={"/images/star-wars-wiki.jpg"}
            alt={"Star Wars Wiki"}
            href={"https://star-wars-wiki-pi.vercel.app"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Simple Portfolio Template"}
            desc={"Next.js / TailwindCSS / Framer Motion"}
            src={"/images/portfolio-template.jpg"}
            alt={"Simple Portfolio Template"}
            href={"https://portfolio-template-opal-zeta.vercel.app/"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Personal Portfolio V1"}
            desc={"HTML / CSS / JavaScript."}
            src={"/images/personal-portfolio.jpg"}
            alt={"Personal Portfolio V1"}
            href={"https://sarah-portfolio-v1.vercel.app/"}
          />
        </div>
      </div>
    </div>
  );
}
