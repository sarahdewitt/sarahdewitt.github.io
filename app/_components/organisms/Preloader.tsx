import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import React from "react";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
    >
      Hello
    </motion.div>
  );
}
