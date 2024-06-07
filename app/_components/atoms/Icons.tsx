import { SVGProps } from "react";

export const More = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className="w-6 h-6 text-black"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 12h14m-7 7V5"
    />
  </svg>
);

export const Less = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className="w-6 h-6 text-black"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 12h14"
    />
  </svg>
);