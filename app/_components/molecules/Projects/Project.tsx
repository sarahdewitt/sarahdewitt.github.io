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
    <Disclosure as={"div"} className={"w-full md:w-3/4 pb-5"}>
      <DisclosureButton
        className={"flex flex-col text-left w-full py-5 border-b border-black"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex justify-between items-center w-full">
          <span className="text-lg md:text-xl lg:text-4xl text-left font-medium pb-3">
            {name}
          </span>
          <AnimatePresence initial={false} mode="wait">
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
          </AnimatePresence>
        </div>
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
                  opacity: { duration: 0.2, delay: 0.2 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.5 },
                  opacity: { duration: 0.2 },
                },
              }}
              className={"font-medium text-base lg:text-xl"}
            >
              <p className="pb-3">{desc}</p>
              <span className="flex flex-wrap pb-4">
                {badges.map((badge, index) => (
                  <Badge key={index} text={badge} />
                ))}
              </span>
            </DisclosurePanel>
          )}
        </AnimatePresence>
      </DisclosureButton>
    </Disclosure>
  );
}
