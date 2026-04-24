import { useEffect, useState } from 'react'

interface Star {
  id: number
  left: number
  top: number
  size: number
  duration: number
  delay: number
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 2 + 2,
    delay: Math.random() * 4,
  }))
}

interface StarsBackgroundProps {
  count?: number
}

export default function StarsBackground({ count = 50 }: StarsBackgroundProps) {
  const [stars] = useState(() => generateStars(count))
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!isClient) return null

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              '--duration': `${star.duration}s`,
              '--delay': `${star.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div
        className="moon-aura hidden md:block"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />
    </>
  )
}