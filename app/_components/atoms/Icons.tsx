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
    animate={{ rotate: [45, 0] }}
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
    className="h-6 w-6 rotate-45 text-black"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    animate={{ rotate: [0, 45] }}
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

export const Arrow = () => (
  <svg
    className="h-3 w-3"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
