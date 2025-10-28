"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Award, Calendar, ExternalLink } from "lucide-react"

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "December 2023",
      image: "/placeholder.svg?height=600&width=800",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      description: "Comprehensive course covering modern full-stack development with the MERN stack.",
    },
    {
      title: "Advanced React & Redux",
      issuer: "Coursera",
      date: "August 2023",
      image: "/placeholder.svg?height=600&width=800",
      skills: ["React", "Redux", "React Hooks", "Context API"],
      description:
        "In-depth course on advanced React patterns, state management with Redux, and modern React features.",
    },
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "March 2023",
      image: "/placeholder.svg?height=600&width=800",
      skills: ["AWS", "Cloud Computing", "Serverless", "Lambda"],
      description: "Professional certification validating expertise in developing and maintaining applications on AWS.",
    },
  ]

  return (
    <section id="certificates" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certificates & Achievements</h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Professional certifications and achievements that demonstrate my expertise and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden h-full cursor-pointer transition-all duration-300 hover:shadow-lg border-2 hover:border-green-600/50">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <Badge className="bg-green-600 hover:bg-green-700 text-white">{cert.issuer}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center mb-2">
                        <Award className="h-5 w-5 mr-2 text-green-600" />
                        <h3 className="font-bold text-lg line-clamp-1">{cert.title}</h3>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{cert.description}</p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs bg-green-600/10 text-green-600 border-green-600/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{cert.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{cert.title}</DialogTitle>
                    <DialogDescription className="flex items-center">
                      <span className="font-medium text-green-600">{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.date}</span>
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                      <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} className="bg-green-600/10 text-green-600 hover:bg-green-600/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700">
                        <span className="mr-1">View Certificate</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

