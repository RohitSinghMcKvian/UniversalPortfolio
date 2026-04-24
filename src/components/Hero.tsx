import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Hls from 'hls.js'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  {
    title: 'Full-Stack Software Developer',
    description: 'Building scalable enterprise solutions for Real Estate ERP & Cargo Shipment ecosystems.',
  },
  {
    title: 'R&D Engineer',
    description: 'Innovating with Angular, ASP.NET Core, and AI-assisted development workflows.',
  },
  {
    title: 'AI-Assisted Development',
    description: 'Accelerating delivery with Claude Code and intelligent automation.',
  },
]

const techBadges = [
  'Angular',
  'ASP.NET Core',
  'C#',
  'React',
  'Python',
  'AI-Assisted',
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const blurInRefs = useRef<HTMLSpanElement[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hlsUrl = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(hlsUrl)
      hls.attachMedia(video)
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 })

      if (nameRef.current) {
        tl.to(nameRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        })
      }

      blurInRefs.current.forEach((el, i) => {
        if (el) {
          tl.to(
            el,
            {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              duration: 1,
              ease: 'power3.out',
            },
            i === 0 ? '0.3' : '-=0.8'
          )
        }
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const currentRole = roles[roleIndex]
    let charIndex = 0
    const text = currentRole.title
    
    setDisplayText('')
    setIsTyping(true)

    const typeText = () => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex))
        charIndex++
        timeout = setTimeout(typeText, 50)
      } else {
        setIsTyping(false)
        timeout = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 2500)
      }
    }

    timeout = setTimeout(typeText, 300)

    return () => clearTimeout(timeout)
  }, [roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 contrast-[1.15] brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#030303] to-transparent" />
      </div>

      <div ref={contentRef} className="relative z-10 text-center px-6 md:px-10 max-w-[1200px] mx-auto pt-20">
        <motion.span
          ref={(el) => { if (el) blurInRefs.current[0] = el }}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          className="text-xs text-gray-300 uppercase tracking-[0.3em] mb-8 block"
        >
          COLLECTION &apos;26
        </motion.span>

        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-white mb-6"
        >
          Rohit Singh
        </h1>

        <div className="min-h-[80px] flex flex-col items-center justify-center mb-4">
          <motion.p 
            key={roleIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-xl md:text-2xl text-white font-display italic"
          >
            {displayText}
            {isTyping && (
              <span className={`inline-block w-0.5 h-6 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            )}
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${roleIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-sm md:text-base text-gray-300 max-w-md mx-auto mb-6"
          >
            {roles[roleIndex].description}
          </motion.p>
        </AnimatePresence>

        <motion.div
          ref={(el) => { if (el) blurInRefs.current[2] = el }}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-200"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          ref={(el) => { if (el) blurInRefs.current[3] = el }}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          className="inline-flex gap-4"
        >
          <a
            href="#work"
            className="rounded-full text-sm px-7 py-3.5 bg-white text-black hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            See Works
          </a>
          <a
            href="mailto:itsrohitsingh31@gmail.com"
            className="rounded-full text-sm px-7 py-3.5 border-2 border-white/30 text-white hover:scale-105 transition-all duration-300 relative group"
          >
            <span className="absolute inset-0 accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative">Reach out... ↗</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 accent-gradient"
              animate={{
                y: ['-100%', '200%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}