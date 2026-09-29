"use client";

import { useState, useEffect } from "react";

export function useISTClock() {
  const [timeString, setTimeString] = useState<string>("--:--:-- IST");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        }).format(now);
        setTimeString(`${formatted} IST`);
      } catch {
        setTimeString("12:00:00 PM IST");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeString;
}
