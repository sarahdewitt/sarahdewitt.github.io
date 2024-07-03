"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Badge from "../atoms/Badge";
import { Arrow, Less, More } from "../atoms/Icons";
import Link from "next/link";

interface ProjectProps {
  name: string;
  desc: string;
  link: string;
}

export default function Project({ name, desc, link }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Disclosure
      as={"div"}
      className={"group w-full pb-8 last:border-b last:border-gray"}
    >
      <DisclosureButton
        className={
          "flex w-full items-center border-t border-gray bg-white pt-8 text-left transition-all duration-300 ease-in-out"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-full items-center justify-between">
          <span className="w-5/6 text-left text-lg transition-all duration-300 ease-in-out md:w-full md:text-xl lg:text-3xl">
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
              <p className="w-full pb-3 md:w-5/6">{desc}</p>
              <Link
                href={link}
                className="flex w-fit cursor-pointer items-center gap-2 text-base uppercase transition-all ease-in hover:text-light-gray"
              >
                See More
                <Arrow/>
              </Link>
            </div>
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Disclosure>
  );
}
