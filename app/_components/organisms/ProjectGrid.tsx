import { useState } from "react";
import StickyCursor from "../atoms/StickyCursor";
import ProjectImage from "../molecules/ProjectImage";

export default function ProjectGrid() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="relative">
      <StickyCursor isHovered={isHovered} />
      <div className="md:grid-cols-2 grid grid-cols-1 gap-8">
        <div>
          <ProjectImage
            name={"Nutmeg Books"}
            desc={
              "HTML / Sass / JavaScript"
            }
            src={"/images/nutmeg-books.jpg"}
            alt={"Nutmeg Books website"}
            href={"https://www.nutmegpublishing.com"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Star Wars Wiki"}
            desc={
              "SWAPI / Next.js / TailwindCSS / Framer Motion"
            }
            src={"/images/star-wars-wiki.jpg"}
            alt={"Star Wars Wiki website"}
            href={"https://star-wars-wiki-pi.vercel.app"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Simple Portfolio Template"}
            desc={
              "Next.js / TailwindCSS / Framer Motion"
            }
            src={"/images/portfolio-template.jpg"}
            alt={"alt text"}
            href={"https://portfolio-template-opal-zeta.vercel.app/"}
          />
        </div>
        <div>
          <ProjectImage
            name={"Personal Portfolio V1.0"}
            desc={
              "HTML / CSS / JavaScript."
            }
            src={"/images/personal-portfolio.jpg"}
            alt={"alt text"}
            href={""}
          />
        </div>
      </div>
    </div>
  );
}
