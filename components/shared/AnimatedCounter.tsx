"use client";

import { useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: "easeOut" });
    }
  }, [isInView, count, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
