'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return count;
}

const stats = [
  { value: "15+", label: "Companies Served" },
  { value: "100+", label: "Successful Placements" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Experience" }
]

export default function Stats() {
  return (
    <section className="py-20 bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">
                {useCountUp(parseInt(stat.value.replace(/\D/g, '')))}
                {stat.value.includes('+') ? '+' : ''}
                {stat.value.includes('%') ? '%' : ''}
              </div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

