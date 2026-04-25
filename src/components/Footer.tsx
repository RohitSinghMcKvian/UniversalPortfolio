import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Hls from 'hls.js'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/rohit-singh-ml31' },
  { name: 'GitHub', url: 'https://github.com' },
]

const marqueeText = 'BUILDING THE FUTURE • '

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!marqueeRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 25,
        ease: 'none',
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

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

  return (
    <footer className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover scale-y-[-1] -translate-x-1/2 -translate-y-1/2 contrast-[1.15] brightness-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      <div className="relative z-10 overflow-hidden mb-12">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="text-5xl md:text-7xl lg:text-8xl font-display text-white/50 px-4">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            Let&apos;s <span className="italic">work</span> together
          </h2>
          <a
            href="mailto:itsrohitsingh31@gmail.com"
            className="relative inline-flex items-center gap-2 text-lg px-8 py-4 rounded-full bg-text-primary text-bg hover:scale-105 transition-transform duration-300 group"
          >
            <span className="absolute inset-0 accent-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative">itsrohitsingh31@gmail.com ↗</span>
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            Available for projects
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-8">
          © 2026 Rohit Singh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}