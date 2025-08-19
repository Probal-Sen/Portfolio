"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (no backend needed for demo)
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about web
            development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 hover-gradient-border">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-primary" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello!"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <Button type="submit" className="w-full group" size="lg">
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="p-6 hover-gradient-border">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-6">Let's connect</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Feel free to reach out through any of these platforms. I'm most active on GitHub and LinkedIn, but
                  I'll respond to messages on any platform.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Github, name: "GitHub", handle: "Probal-Sen", url: "https://github.com/Probal-Sen" },
                    {
                      icon: Linkedin,
                      name: "LinkedIn",
                      handle: "Probal Sen",
                      url: "https://www.linkedin.com/in/probal-sen/",
                    },
                    { icon: () => (
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" aria-hidden="true">
                          <path fill="currentColor" d="M18.244 3H21L14.326 10.6 22.5 21h-6.188l-4.84-6.27L5.7 21H3l7.137-8.06L2.25 3h6.344l4.39 5.74L18.244 3Zm-1.086 16.2h1.71L7.92 4.69H6.116l11.042 14.51Z"/>
                        </svg>
                      ), name: "X", handle: "Probal_Sen_2004", url: "https://x.com/Probal_Sen_2004" },
                  ].map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group block"
                      >
                        <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-medium text-foreground">{social.name}</p>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 hover-gradient-border">
                <CardContent className="p-0 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Quick Response</h3>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to messages within 24 hours. Looking forward to hearing from you!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
