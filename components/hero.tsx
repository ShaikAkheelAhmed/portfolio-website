"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Only render content after component is mounted on the client
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80"></section>
    )
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(22, 163, 74, 0.15) 0%, transparent 70%)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />

      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-green-600/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              transform: `scale(${1 - scrollY / 1000})`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-12 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-6 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl font-light text-muted-foreground"
            >
              Hello, I&apos;m
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">Akheel</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-3xl font-medium text-muted-foreground"
            >
              Full Stack Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            >
              <Link href="https://github.com/ShaikAkheelAhmed" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <GitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shaik-akheel-ahmed-1229401ba/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
           
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-4"
            >
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-600/20 to-green-500/20 blur-xl"></div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-600/30 to-green-500/30 blur-md"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image
                  src="/coat.jpg"
                  alt="Akheel - Software Engineer"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-green-600 font-semibold">React</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-green-600 font-semibold">Next.js</span>
              </motion.div>

               <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -down-2 -right-3 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-green-600 font-semibold">Express</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -top-7   bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-green-600 font-semibold">Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full animate-bounce"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-5 w-5" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </section>
  )
}
