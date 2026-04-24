import { motion } from 'framer-motion'

const languages = [
  { name: 'English', proficiency: 'Professional Working Proficiency' },
  { name: 'Hindi', proficiency: 'Native' },
  { name: 'Bengali', proficiency: 'Native' },
]

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
}

export default function Languages() {
  return (
    <section id="languages" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Languages</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
            Languages I <span className="italic">speak</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              whileHover={{ scale: 1.05 }}
              className="glass-card flex items-center gap-4 px-6 py-4 rounded-full"
            >
              <span className="text-lg md:text-xl font-display italic text-text-primary">
                {lang.name}
              </span>
              <span className="w-1 h-1 rounded-full bg-stroke" />
              <span className="text-sm text-muted">{lang.proficiency}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}