import React from "react";

export default function Badge({ text }: { text: string }) {
  return (
    <span className="text-xs text-white font-normal px-2.5 py-1 uppercase rounded-full bg-black mr-4 mb-2">
      {text}
    </span>
  );
}
