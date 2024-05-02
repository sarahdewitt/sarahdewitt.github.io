import Badge from "../atoms/Badge";

interface ProjectProps {
  name: string;
  desc: string;
  badges?: string[]; //make badges optional
}

export default function Project({ name, desc, badges = [] }: ProjectProps) {
  return (
    <div className="text-base lg:text-xl text-light-pink w-full md:w-3/4 pb-10">
      <p className="uppercase font-bold pb-2 md:pb-0">{name}</p>
      <p className="text-justify pb-5">{desc}</p>
      <span className="flex flex-wrap pb-4">
        {badges.map((badge, index) => (
          <Badge key={index} text={badge} />
        ))}
      </span>
      <hr className="text-light-pink"/>
    </div>
  );
}
