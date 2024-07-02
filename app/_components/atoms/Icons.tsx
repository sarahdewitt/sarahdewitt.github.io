import { motion } from "framer-motion";
import { SVGProps } from "react";

export const More = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <motion.svg
    className="h-6 w-6 text-black"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    animate={{rotate: [45, 0]}}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14m-7 7V5"
    />
  </motion.svg>
);

export const Less = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <motion.svg
  className="h-6 w-6 text-black rotate-45"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24"
  animate={{rotate: [0, 45]}}
  
>
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M5 12h14m-7 7V5"
  />
</motion.svg>
);