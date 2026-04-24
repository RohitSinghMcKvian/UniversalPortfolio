import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

const words = ['Plan', 'Design', 'Build']

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const wordIntervalRef = useRef<number | null>(null)

  useEffect(() => {
    const duration = 2700
    const startTime = Date.now()

    const updateCounter = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(progress * 100))

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setTimeout(() => onComplete(), 400)
      }
    }

    requestAnimationFrame(updateCounter)

    wordIntervalRef.current = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 900)

    return () => {
      if (wordIntervalRef.current) {
        clearInterval(wordIntervalRef.current)
      }
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative h-20 md:h-32 lg:h-40">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80 whitespace-nowrap"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="w-24 md:w-32 h-[3px] bg-stroke/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full accent-gradient animate-electric"
            style={{ width: `${count}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums"
        >
          {String(count).padStart(3, '0')}
        </motion.div>
      </div>

      <div className="absolute bottom-4 right-6 md:bottom-6 md:right-10">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-8 bg-stroke rounded-full overflow-hidden"
              animate={{
                opacity: count === 100 ? [0.3, 1, 0.3] : 0.3,
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}