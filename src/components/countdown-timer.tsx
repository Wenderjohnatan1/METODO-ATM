"use client";

import { useState, useEffect } from 'react';

type CountdownTimerProps = {
  initialMinutes: number;
  initialSeconds: number;
};

export function CountdownTimer({ initialMinutes, initialSeconds }: CountdownTimerProps) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // This effect should only run on the client
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(s => s - 1);
      } else if (minutes > 0) {
        setMinutes(m => m - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <div className="text-5xl md:text-7xl font-bold tracking-tighter text-accent">
      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  );
}
