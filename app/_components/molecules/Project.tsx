"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Badge from "../atoms/Badge";
import { Less, More } from "../atoms/Icons";

interface ProjectProps {
  name: string;
  desc: string;
  badges?: string[]; //make badges optional
}

export default function Project({ name, desc, badges = [] }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Disclosure
      as={"div"}
      className={"last:border-gray group w-full pb-8 last:border-b"}
    >
      <DisclosureButton
        className={
          "border-gray flex w-full items-center border-t bg-white pt-8 text-left transition-all duration-300 ease-in-out"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-full items-center justify-between">
          <span className="text-left text-lg transition-all duration-300 ease-in-out w-5/6 md:w-full md:text-xl lg:text-3xl">
            {name}
          </span>
        </div>
        {isOpen ? <Less /> : <More />}
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
            <div className="pt-5">
              <p className="w-full md:w-5/6">{desc}</p>
              {badges.length > 0 && (
                <span className="flex flex-wrap py-4">
                  {badges.map((badge, index) => (
                    <Badge key={index} text={badge} />
                  ))}
                </span>
              )}
            </div>
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Disclosure>
  );
}
