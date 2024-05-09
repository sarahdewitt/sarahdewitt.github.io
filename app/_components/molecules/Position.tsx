import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from "@headlessui/react";

interface PositionProps {
  position: string;
  company: string;
  from: string;
  to: string;
  desc: string;
}

export default function Position({
  position,
  company,
  from,
  to,
  desc,
}: PositionProps) {
  // <span className="md:flex md:justify-between pb-2">
  //       <p className="uppercase pb-2 md:pb-0">
  //         <span className="font-bold">{position}</span> / {company}
  //       </p>
  //       <p className="uppercase justify-self-end pb-2 md:pb-0">
  //         {from} — {to}
  //       </p>
  //     </span>
  //     <p className="col-span-2 text-justify pb-4">{desc}</p>
  //     <hr className=""/>

  // <Menu
  //   as="div"
  //     className="text-base lg:text-xl w-full md:w-3/4 pb-10"
  //     id="accordian-flush"
  //     data-accordian-collapse
  //   >
  //     <p className="accordian-flush-heading-1">
  //       <Menu.Button
  //         type="button"
  //         className="flex items-center justify-between w-full py-5 font-medium text-black border-b border-black gap-3"
  //         data-accordian-target="#accordian-flush-body-1"
  //         aria-expanded="true"
  //         aria-controls="accordian-flush-body-1"
  //       >
  //         <span>
  //           {position} / {company}{" "}
  //         </span>
  //         <svg
  //           data-accordian-icon
  //           className="w-3 h-3"
  //           xmlns="http://www.w3.org/2000/svg"
  //           x="0px"
  //           y="0px"
  //           width="100"
  //           height="100"
  //           viewBox="0 0 24 24"
  //         >
  //           <path
  //             fill-rule="evenodd"
  //             d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
  //           ></path>
  //         </svg>
  //       </Menu.Button>
  //     </p>
  //     <Menu.Item id="accordian-flush-body-1" className="hidden" aria-labelledby="accordian-flush-heading-1">
  //       <div className="py-5 border-b border-black">
  //         <p>Hello world</p>
  //       </div>
  //     </Menu.Item>
  //   </Menu>
  return (
    <div className="text-base lg:text-xl w-full md:w-3/4 pb-5">
      <Disclosure>
        <DisclosureButton
          className={
            "flex items-center justify-between w-full py-5 font-medium text-black border-b border-black gap-3"
          }
        >
          <span className="text-xl lg:text-4xl text-left">
            {position} / {company}
          </span>
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
          <p className="pb-3">{from} — {to}</p>
          <p>{desc}</p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
