"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Badge from "../../atoms/Badge";
import { Less, More } from "../../atoms/Icons";

interface ProjectProps {
  name: string;
  desc: string;
  badges?: string[]; //make badges optional
}

export default function Project({ name, desc, badges = [] }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Disclosure as={"div"} className={"group w-full"}>
      <DisclosureButton
        className={
          "flex w-full flex-col border-b border-gray-500 bg-white text-left transition-all duration-300 ease-in-out group-hover:bg-black"
        }
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex w-full items-center justify-between">
          <span className="py-4 text-left text-lg transition-all duration-300 ease-in-out group-hover:px-4 group-hover:text-white md:text-xl lg:text-3xl">
            {name}
          </span>

          {/* <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "less" : "more"}
              initial={{ rotate: isOpen ? -90 : 90 }}
              animate={{
                zIndex: 1,
                rotate: 0,
                transition: { type: "tween", duration: 0.2, ease: "circInOut" },
              }}
              exit={{
                zIndex: 0,
                rotate: isOpen ? -90 : 90,
                transition: {
                  type: "tween",
                  duration: 0.2,
                  ease: "circIn",
                },
              }}
            >
              {isOpen ? <Less /> : <More />}
            </motion.div>
          </AnimatePresence> */}
        </div>
      </DisclosureButton>
      <AnimatePresence mode="wait">
        {isOpen && (
          <DisclosurePanel
            static
            as={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.5 },
                opacity: { duration: 0.2, delay: 0.25 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.5 },
                opacity: { duration: 0.15 },
              },
            }}
            className={"text-base font-medium lg:text-xl"}
          >
            <div className="py-5">
              <p className="pb-3">{desc}</p>
              <span className="flex flex-wrap pb-4">
                {badges.map((badge, index) => (
                  <Badge key={index} text={badge} />
                ))}
              </span>
            </div>
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Disclosure>
  );
}
