"use client"

import { useEffect, useState } from "react"

interface Bubble {
  width: number
  height: number
  top: string
  left: string
  opacity: number
}

export default function Bubbles({ scrollY }: { scrollY: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return

    const generated = Array.from({ length: 20 }).map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5,
    }))

    setBubbles(generated)
  }, [])

  if (bubbles.length === 0) return null // Prevent mismatched DOM

  return (
    <div className="absolute inset-0 z-0">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-green-600/10"
          style={{
            ...bubble,
            transform: `scale(${1 - scrollY / 1000})`,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  )
}
