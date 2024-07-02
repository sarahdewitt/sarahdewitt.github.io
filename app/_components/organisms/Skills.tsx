import Image from "next/image";
import Heading from "../atoms/Text/Heading";
import Paragraph from "../atoms/Text/Paragraph";
import { motion, useTransform } from "framer-motion";

export default function Skills() {
  return (
    <div className="bg-black px-7 pt-20 lg:pt-28" id={"About"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Heading text={"Skills"} />
        <div className="">
          
        </div>
      </div>
    </div>
  );
}
