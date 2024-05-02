import React from "react";

export default function Badge({ text }: { text: string }) {
  return (
    <span className="text-xs lg:text-base text-pink uppercase font-normal px-2.5 py-1 rounded-full bg-pink bg-opacity-20 mr-4 mb-2">
      {text}
    </span>
  );
}
