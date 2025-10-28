"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Devbox Software Private Ltd",
      location: "Hyderabad, Telangana",
      period: "October 2023 - February 2025",
      description:
        "Spearheaded the end-to-end development of a Stream Planner Application to enhance project management efficiency, featuring real-time dashboard analytics, portfolio management, and detailed project summaries. This resulted in a 20% improvement in decision-making speed and provided stakeholders with actionable insights into project progress.",
      skills: ["React", "Next.js", "Node.js", "Dashboard Analytics", "Project Management"],
    },
    {
      title: "Full Stack Developer",
      company: "Designer Dudes Private Ltd",
      location: "Hyderabad, Telangana",
      period: "February 2025 - Present",
      description:
        "Developed Incodocs, a SaaS Platform: Designed and built a comprehensive factory, document, and shipment management system tailored for marble, granite, and slab factories, streamlining operations and improving efficiency.",
      skills: ["SaaS Development", "Document Management", "UI/UX Design", "Full Stack Development"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">My professional journey as a Software Engineer</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-muted"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-auto md:mr-auto md:pl-0"
                  : "md:pl-12 md:ml-auto md:mr-auto md:pr-0"
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? "left-0 md:left-auto md:right-0 md:-mr-3.5" : "left-0 md:-ml-3.5"
                } w-7 h-7 rounded-full bg-green-600/20 border-4 border-green-600 z-10`}
              ></div>

              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className="mt-2 md:mt-0 bg-green-600/10 text-green-600 border-green-600/20"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-green-600">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm md:text-base">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-green-600/10 text-green-600 hover:bg-green-600/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
