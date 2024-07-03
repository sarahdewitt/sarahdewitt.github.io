"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Less, More } from "../atoms/Icons";

interface PositionProps {
  position: string;
  company: string;
  from: string;
  to: string;
  children: any;
}

export default function Test({
  position,
  company,
  from,
  to,
  children,
}: PositionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Disclosure
      as={"div"}
      className={"last:border-gray group w-full pb-8 last:border-b"}
    >
      <DisclosureButton
        className={
          "border-gray flex w-full items-center border-t pt-8 text-left transition-all duration-300 ease-in-out"
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex w-full items-center justify-between">
          <span className="text-left text-lg font-medium transition-all duration-300 ease-in-out w-5/6 md:w-full md:text-xl lg:text-2xl">
            {position} / {company}
          </span>
        </div>
        {isOpen ? <Less /> : <More />}
      </DisclosureButton>
      <AnimatePresence>
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
            className={"text-base font-medium lg:text-xl"}
          >
            <div className="w-full md:w-5/6 pt-5">
              <p className="pb-3">
                {from} — {to}
              </p>
              <p>{children}</p>
            </div>
          </DisclosurePanel>
        )}
      </AnimatePresence>
    </Disclosure>
  );
}
