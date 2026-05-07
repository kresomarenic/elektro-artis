"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue/30 hover:shadow-blue/10 transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-blue" />
      </div>
      <h3 className="font-[var(--font-dm-sans)] font-bold text-lg text-text mb-2">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
