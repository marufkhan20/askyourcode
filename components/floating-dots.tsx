"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Dot {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    // Generate random dots
    const colors = ["#8B5CF6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6"]
    const newDots: Dot[] = []

    for (let i = 0; i < 15; i++) {
      newDots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })
    }

    setDots(newDots)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full opacity-30"
          style={{
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

