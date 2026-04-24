import { motion } from 'framer-motion'

const entries = [
  {
    title: 'The Future of AI-Driven Web Development',
    readTime: '5 min read',
    date: 'Jan 2025',
    image: 'https://picsum.photos/seed/ai-web/200/200',
  },
  {
    title: 'Micro-interactions That Enhance User Experience',
    readTime: '4 min read',
    date: 'Dec 2024',
    image: 'https://picsum.photos/seed/ux/200/200',
  },
  {
    title: 'Building Accessible Design Systems',
    readTime: '6 min read',
    date: 'Nov 2024',
    image: 'https://picsum.photos/seed/a11y/200/200',
  },
  {
    title: 'The Art of Prototyping in 2025',
    readTime: '5 min read',
    date: 'Oct 2024',
    image: 'https://picsum.photos/seed/proto/200/200',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Recent <span className="italic">thoughts</span>
          </h2>
          <p className="text-muted max-w-md mb-6">
            Reflections on design, development, and everything in between.
          </p>
          <div className="hidden md:inline-flex items-center gap-2">
            <span className="text-sm text-muted">View all</span>
            <span className="text-text-primary">↗</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entries.map((entry, i) => (
            <motion.a
              key={entry.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-all duration-300"
            >
              <img
                src={entry.image}
                alt={entry.title}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm md:text-base truncate">{entry.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted">
                  <span>{entry.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{entry.date}</span>
                </div>
              </div>
              <span className="text-muted group-hover:text-text-primary transition-colors duration-300">↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}