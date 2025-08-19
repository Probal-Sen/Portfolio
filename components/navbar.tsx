"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, FileText, Mail, LayoutDashboard, Image as ImageIcon, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "#cv" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>("#home")
  const { theme, setTheme } = useTheme()

  const scrollToSection = (href: string) => {
    if (typeof window === "undefined") return
    const performScroll = () => {
      const target = document.querySelector(href) as HTMLElement | null
      const SCROLL_OFFSET = 72
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
        window.scrollTo({ top: y, behavior: "smooth" })
        if (history.replaceState) {
          history.replaceState(null, "", href)
        } else {
          window.location.hash = href
        }
      } else {
        window.location.hash = href
      }
    }

    if (isOpen) {
      setIsOpen(false)
      // Wait for the collapse animation to finish so layout is stable
      setTimeout(performScroll, 320)
    } else {
      performScroll()
    }
  }

  // Track active section for desktop pill highlighting
  useEffect(() => {
    if (typeof window === "undefined") return
    const ids = navItems.map((i) => i.href.replace("#", ""))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const mobileIconByHref: Record<string, React.ComponentType<any>> = {
    "#home": Home,
    "#about": User,
    "#projects": LayoutDashboard,
    "#cv": FileText,
    "#contact": Mail,
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop pill navbar */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => {
                  const isActive = activeId === item.href
                  const Icon = mobileIconByHref[item.href] || ImageIcon
                  return (
                    <motion.a
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className={`relative rounded-full text-sm font-medium transition-colors px-4 py-2 inline-flex items-center gap-2 ${
                        isActive
                          ? "text-foreground bg-foreground/10 shadow-inner"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </motion.a>
                  )
                })}
                <span className="mx-2 h-5 w-px bg-border" />
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                  className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Sun className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </button>
              </div>
            </div>
          </div>

          {/* Right spacer for layout balance on desktop; hidden on mobile */}
          <div className="hidden md:block w-24" />
        </div>

        {/* Mobile pill navbar centered */}
        <div className="md:hidden flex justify-center pb-2">
          <div className="rounded-full border border-border bg-card/70 backdrop-blur px-2 py-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeId === item.href
                const Icon = mobileIconByHref[item.href] || ImageIcon
                return (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.12 + index * 0.05 }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className={`relative p-2 rounded-full text-sm transition-colors ${
                      isActive
                        ? "text-foreground bg-foreground/10 shadow-inner"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
              <span className="mx-1 h-5 w-px bg-border" />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <Sun className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden relative z-[60]"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[45] md:hidden bg-transparent"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </motion.nav>
  )
}
