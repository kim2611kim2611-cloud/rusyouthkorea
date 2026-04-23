"use client";

import { useState, useEffect } from "react";
import { getNextSaturday20KST } from "@/lib/utils";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const target = getNextSaturday20KST();
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "дней", value: timeLeft.days },
    { label: "часов", value: timeLeft.hours },
    { label: "минут", value: timeLeft.minutes },
    { label: "секунд", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-purple-sm border border-blue-100">
              <span className="text-2xl sm:text-3xl font-black gradient-text tabular-nums">
                {String(value).padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="text-xs text-gray-500 mt-2 font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
}
