"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Sample project data - user can easily modify this
const projects = [
  {
    id: 1,
    title: "FoodBridge",
    description: "FoodBridge is a app that connects restaurants, and NGOs to reduce food waste by redistributing surplus meals.",
    image: "/FoodBridge.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/Probal-Sen/Food_Bridge.git",
    liveUrl: "https://food-bridge-new.vercel.app/",
  },
  {
    id: 2,
    title: "Brain Battle 3.0",
    description: "Brain Battle 3.0 is a flagship hackathon by UIT College that brings together innovators and developers to solve real-world challenges.",
    image: "/BrainBattle.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    githubUrl: "https://github.com/Adrish1512/Brain_Battle_3.0.git",
    liveUrl: "https://brain-battle-psi.vercel.app/",
  },
  {
    id: 3,
    title: "HackTrack",
    description: "A responsive Hacktrack is a hackathon tracker app that helps users discover, organize, and stay updated on upcoming hackathons.",
    image: "/HackTrack.jpg",
    technologies: ["React", "Chart.js", "Tailwind"],
    githubUrl: "https://github.com/Probal-Sen/Portfolio.git",
    liveUrl: "https://hacktrack-nine.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and featuring smooth animations.",
    image: "/Portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/Probal-Sen/Portfolio.git",
    liveUrl: "https://probal-sen-portfolio.vercel.app/",
  },
  
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a learning journey and showcases different
            aspects of web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full bg-card hover-gradient-border hover-gradient-border--strong">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>

                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed h-24 overflow-hidden">{project.description}</p>

                  <div className="flex flex-wrap gap-2 min-h-16">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 + 0.5 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-2 mt-auto">
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent group/btn">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </motion.a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 group/btn">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        Live Demo
                      </motion.a>
                    </Button>
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
