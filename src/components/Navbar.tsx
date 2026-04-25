import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '/resume.pdf', download: 'Rohit_Singh_Resume.pdf' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/rohit-singh-ml31', external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'work', 'experience', 'education', 'skills', 'languages', 'stats']
    const observers = sections.map((section) => {
      const element = document.getElementById(section)
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section)
            }
          })
        },
        { threshold: 0.3 }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      >
        <div
          className={`inline-flex items-center rounded-full backdrop-blur-md bg-surface/80 px-2 py-2 transition-all duration-300 ${
            scrolled ? 'shadow-md shadow-black/10 border border-stroke' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="relative w-9 h-9 rounded-full accent-gradient-border group"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
          >
            <div className="absolute inset-0 accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <span className="text-[13px] font-display italic text-text-primary">RS</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 mx-1">
            <div className="w-px h-5 bg-stroke" />
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`text-sm rounded-full px-4 py-2 transition-all duration-300 ${
                  activeSection === link.name.toLowerCase()
                    ? 'text-text-primary bg-stroke/50'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1 mx-1">
            <div className="w-px h-5 bg-stroke" />
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <a
              href="/resume.pdf"
              download="Rohit_Singh_Resume.pdf"
              className="text-sm rounded-full px-4 py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition-all duration-300 flex items-center gap-2"
            >
              Resume
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1 mx-1">
            <div className="w-px h-5 bg-stroke" />
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <a
              href="https://linkedin.com/in/rohit-singh-ml31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm rounded-full px-4 py-2 text-muted hover:text-text-primary hover:bg-stroke/50 transition-all duration-300 flex items-center gap-2"
            >
              LinkedIn
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-1 mx-1">
            <div className="w-px h-5 bg-stroke" />
          </div>

          <a
            href="mailto:itsrohitsingh31@gmail.com"
            className="relative text-sm rounded-full px-4 py-2 text-muted hover:text-text-primary transition-all duration-300"
          >
            <span className="absolute inset-0 accent-gradient rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative bg-surface rounded-full backdrop-blur-md px-1 py-1 flex items-center gap-2 hover:text-text-primary">
              Say hi
              <span>↗</span>
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-9 h-9 flex items-center justify-center ml-1"
          >
            <span className="sr-only">Open menu</span>
            <div className="flex flex-col gap-1.5 w-5">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                className="block h-0.5 w-full bg-text-primary rounded-full"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                className="block h-0.5 w-full bg-text-primary rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                className="block h-0.5 w-full bg-text-primary rounded-full"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-lg lg:hidden pt-20"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 pt-8 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    if (link.download || link.external) {
                      return
                    }
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  download={link.download}
                  className="text-lg text-text-primary py-3 px-6 w-full max-w-xs text-center rounded-full bg-surface/50 border border-stroke hover:bg-stroke/50 hover:border-accent/30 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="mailto:itsrohitsingh31@gmail.com"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="text-lg text-accent py-3 px-6 w-full max-w-xs text-center rounded-full border border-accent/30 hover:bg-accent/10 transition-all duration-300"
              >
                Say hi ↗
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}