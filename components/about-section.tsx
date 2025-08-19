"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, GraduationCap, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Code },
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Code },
  { name: "Node.js", icon: Database },
  { name: "TypeScript", icon: Code },
]

const interests = ["Web Development", "Open Source", "Machine Learning", "Gaming"]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Profile Image Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                  >
                    <img
                      src="/probal-sen.jpg"
                      alt="Probal Sen"
                      className="w-44 h-44 rounded-full object-cover"
                    />
                  </motion.div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Probal Sen</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a passionate web developer and Information Technology student with a love for creating intuitive and
                      beautiful digital experiences. Currently pursuing my degree while building real-world projects
                      that solve meaningful problems.
                    </p>

                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <GraduationCap className="h-5 w-5" />
                      <span>Information Technology Student</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Skills */}
            <Card className="p-6 bg-card">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                      >
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-primary" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="secondary" className="text-sm py-1 px-3 cursor-pointer">
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Education
                </h3>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="space-y-4"
                >
                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.15 }}
                    className="border-l-2 border-primary pl-4 p-3 rounded-md bg-card/50 hover:bg-muted/50 shadow-sm hover:shadow transition-colors"
                  >
                    <h4 className="font-semibold text-foreground">University Institute of Technology, Burdwan University</h4>
                    <p className="text-muted-foreground">B.E. in Information Technology — CGPA: 9.33</p>
                    <p className="text-sm text-muted-foreground">2023 – Present • Bardhaman, West Bengal</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.15 }}
                    className="border-l-2 border-primary pl-4 p-3 rounded-md bg-card/50 hover:bg-muted/50 shadow-sm hover:shadow transition-colors"
                  >
                    <h4 className="font-semibold text-foreground">Ashoknagar Boys’ Secondary School (H.S.), WBCHSE</h4>
                    <p className="text-muted-foreground">Class XII — Physics, Chemistry, Mathematics — Percentage: 90%</p>
                    <p className="text-sm text-muted-foreground">2020 – 2022 • Ashoknagar, West Bengal</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.15 }}
                    className="border-l-2 border-primary pl-4 p-3 rounded-md bg-card/50 hover:bg-muted/50 shadow-sm hover:shadow transition-colors"
                  >
                    <h4 className="font-semibold text-foreground">Ashoknagar Boys’ Secondary School (H.S.), WBBSE</h4>
                    <p className="text-muted-foreground">Class X — English, Mathematics, Science, Social Science — Percentage: 89%</p>
                    <p className="text-sm text-muted-foreground">2014 – 2020 • Ashoknagar, West Bengal</p>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
