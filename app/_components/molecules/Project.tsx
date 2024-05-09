import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Badge from "../atoms/Badge";

interface ProjectProps {
  name: string;
  desc: string;
  badges?: string[]; //make badges optional
}

export default function Project({ name, desc, badges = [] }: ProjectProps) {
  return (
    <div className="text-base lg:text-xl w-full md:w-3/4 pb-5">
      <Disclosure>
        <DisclosureButton
          className={
            "flex items-center justify-between w-full py-5 font-medium text-black border-b border-black gap-3"
          }
        >
          <span className="text-xl lg:text-4xl text-left">{name}</span>
          <svg
            data-accordian-icon
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
            ></path>
          </svg>
        </DisclosureButton>
        <DisclosurePanel className={"py-5 border-b border-black"}>
          <p className="pb-3">{desc}</p>
          <span className="flex flex-wrap pb-4">
            {badges.map((badge, index) => (
              <Badge key={index} text={badge} />
            ))}
          </span>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
