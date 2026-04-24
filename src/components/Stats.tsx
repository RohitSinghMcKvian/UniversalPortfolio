import { motion } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '12+', label: 'Projects Done' },
  { value: '4+', label: 'Companies' },
  { value: '100%', label: 'Satisfied Clients' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const statVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-card text-center p-6 rounded-2xl"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary mb-2">
                {stat.value}
              </div>
              <div className="w-12 h-px accent-gradient mx-auto mb-4" />
              <p className="text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}