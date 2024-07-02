"use client";
import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";

export default function Time() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      <span className="uppercase">
        {isMounted && (
          <Clock
            format={"HH:mm:ss"}
            ticking={true}
            timezone={"Asia/Kuala_Lumpur"}
          />
        )}{" "}
        MY
      </span>
    </div>
  );
}
