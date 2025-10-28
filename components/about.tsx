"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "GitHub"
    
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted overflow-hidden">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate software engineer with expertise in building modern web applications. With a strong
                  foundation in both frontend and backend technologies, I create seamless, user-friendly experiences
                  that solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach combines technical excellence with creative problem-solving. I'm constantly learning and
                  adapting to new technologies to stay at the forefront of web development.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 text-sm font-medium bg-green-600/10 text-green-600 hover:bg-green-600/20"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
