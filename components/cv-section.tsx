"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function CVSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Curriculum Vitae</h2>
          <p className="text-lg text-muted-foreground">View or download my latest CV.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 hover-gradient-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Left Side - Title */}
              <CardTitle className="text-foreground flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Probal Sen — CV
              </CardTitle>

              {/* Right Side - Buttons */}
              <div className="flex gap-2">
                <Button asChild>
                  <a
                    href="/PROBAL_SEN_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View CV
                  </a>
                </Button>

                <Button variant="outline" asChild>
                  <a href="/PROBAL_SEN_CV.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>

            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


