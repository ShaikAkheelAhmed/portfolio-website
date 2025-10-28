"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, Telangana",
      period: "2023",
      description: "Graduated with distinction, focusing on software engineering and web development technologies.",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
      ],
    },
    {
      degree: "Higher Secondary Education",
      institution: "Noesis Junior College",
      location: "Hyderabad, Telangana",
      period: "2018",
      description: "Completed with focus on Mathematics, Physics and Computer Science.",
      courses: ["Mathematics", "Physics", "Computer Science"],
    },
    {
      degree: "SSC",
      institution: "Shangrilla English High School",
      location: "Hyderabad, Telangana",
      period: "2016",
      description: "Graduated with distinction and participated in various extracurricular activities.",
      courses: ["Science", "Mathematics", "English"],
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">My academic journey and qualifications</p>
        </motion.div>

        {isMounted ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="pb-2 relative">
                    <div className="absolute top-0 left-0 h-full w-1 bg-green-600"></div>
                    <div className="pl-4">
                      <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                          <span className="text-lg font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2 text-green-600" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2 text-green-600" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-8">
                    <p className="mb-4">{edu.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge
                            key={course}
                            variant="secondary"
                            className="bg-green-600/10 text-green-600 hover:bg-green-600/20"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto h-96 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </section>
  )
}
