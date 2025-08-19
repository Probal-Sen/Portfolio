import { Github, Linkedin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/90 backdrop-blur supports-[backdrop-filter]:bg-card/70 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mt-1">© 2025 Probal Sen. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Probal-Sen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/probal-sen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/probal_sen_._/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Probal_Sen_2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path fill="currentColor" d="M18.244 3H21L14.326 10.6 22.5 21h-6.188l-4.84-6.27L5.7 21H3l7.137-8.06L2.25 3h6.344l4.39 5.74L18.244 3Zm-1.086 16.2h1.71L7.92 4.69H6.116l11.042 14.51Z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/probal.sen.3139"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
