import { motion } from 'framer-motion'

const projects = [
  {
    title: 'OctoGen – Cargo Management',
    description: 'Full-featured cargo operations platform with booking, tracking, and reporting workflows.',
    tech: 'Angular 18 + ASP.NET + MS SQL',
    image: 'https://picsum.photos/seed/cargo/800/600',
    span: 'md:col-span-7',
  },
  {
    title: 'Real Estate ERP',
    description: 'Property management with dual-database architecture for enterprise operations.',
    tech: 'Angular 18 + ASP.NET Core 8 + MongoDB',
    image: 'https://picsum.photos/seed/realestate/800/600',
    span: 'md:col-span-5',
  },
  {
    title: 'nGen D2D – Door-to-Door',
    description: 'Last-mile delivery management with real-time shipment tracking.',
    tech: 'jQuery + ASP.NET Core + SQL Server',
    image: 'https://picsum.photos/seed/delivery/800/600',
    span: 'md:col-span-5',
  },
  {
    title: 'nGen RMS – Revenue',
    description: 'Yield pricing and revenue dashboards for airline cargo operations.',
    tech: 'React JS + C# MVC + MS SQL',
    image: 'https://picsum.photos/seed/revenue/800/600',
    span: 'md:col-span-7',
  },
]

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Featured <span className="italic">projects</span>
          </h2>
          <p className="text-muted max-w-md mb-6">
            A selection of projects I&apos;ve worked on, from concept to launch.
          </p>
          <div className="hidden md:inline-flex items-center gap-2">
            <span className="text-sm text-muted">View all work</span>
            <span className="text-text-primary">↗</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`${project.span} group relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface border border-stroke`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-bg/70 backdrop-blur-lg flex flex-col justify-end p-6"
              >
                <span className="text-xs text-muted mb-2">{project.tech}</span>
                <h3 className="text-xl md:text-2xl font-display italic mb-2">{project.title}</h3>
                <p className="text-sm text-muted mb-4">{project.description}</p>
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-bg text-sm font-medium w-fit">
                  <span className="absolute inset-0 accent-gradient-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="relative">View</span>
                </div>
              </div>
              <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{
                backgroundImage: 'radial-gradient(circle, hsl(var(--text)) 1px, transparent 1px)',
                backgroundSize: '4px 4px',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}