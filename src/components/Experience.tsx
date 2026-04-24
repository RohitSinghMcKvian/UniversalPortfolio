import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Gamut Infosystem',
    location: 'Kolkata',
    role: 'Full-Stack Software Developer',
    period: 'Mar 2025 – Present',
    projects: [
      {
        name: 'Real Estate ERP – Property Management System',
        tech: 'Angular 18 + ASP.NET Core 8 + SSMS + MongoDB',
        description: 'End-to-end features for large-scale Real Estate ERP managing property acquisitions, leasing workflows, tenant lifecycle, maintenance, and financial reporting.',
      },
    ],
  },
  {
    company: 'CargoFlash',
    location: 'Gurgaon',
    role: 'Software Developer – R&D Engineer',
    period: 'Jul 2020 – Feb 2025',
    projects: [
      {
        name: 'OctoGen – Cargo Management Platform',
        tech: 'Angular 18 + ASP.NET + MS SQL Server',
        description: 'Full-featured cargo operations platform for booking, tracking, and reporting workflows with modular architecture.',
      },
      {
        name: 'nGen D2D – Door-to-Door Delivery System',
        tech: 'jQuery + ASP.NET Core + SQL Server',
        description: 'Last-mile delivery management with real-time shipment tracking and route assignment.',
      },
      {
        name: 'nGen RMS – Revenue Management System',
        tech: 'React JS + C# MVC + MS SQL Server',
        description: 'Yield pricing and revenue dashboards for airline cargo operations.',
      },
    ],
  },
  {
    company: 'Cignex Datamatics',
    location: 'Ahmedabad',
    role: 'Trainee – ML Developer',
    period: 'Jan 2020 – Jun 2020',
    projects: [
      {
        name: 'Time Series & NLP Projects',
        tech: 'Python, statsmodels, SciPy, pandas',
        description: 'Exploratory data analysis, ARIMA modeling, and NLP pipeline using Bag-of-Words model.',
      },
    ],
  },
  {
    company: 'TATA Technologies',
    location: 'Jamshedpur',
    role: 'Intern – Web Developer',
    period: 'Jun 2019 – Jul 2019',
    projects: [
      {
        name: 'Internal Web Tool',
        tech: 'PHP, MySQL, JavaScript',
        description: 'Automation of manual data entry workflows using XAMPP environment.',
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
            Work <span className="italic">history</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stroke md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={cardVariants}
                className={`relative pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'}`}
              >
                <div className={`absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-surface border-2 border-stroke -translate-x-1/2 ${i % 2 !== 0 ? 'md:translate-x-[-100%]' : ''}`} />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass-card rounded-2xl p-6 ${i % 2 !== 0 ? 'md:text-left' : ''}`}
                >
                  <div className={`flex flex-wrap items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="text-xs text-muted">{exp.period}</span>
                    <span className="w-1 h-1 rounded-full bg-stroke" />
                    <span className="text-xs text-muted">{exp.location}</span>
                  </div>

                  <h3 className="text-lg font-medium mb-1">{exp.role}</h3>
                  <p className="text-muted text-sm mb-4">{exp.company}</p>

                  {exp.projects.map((project) => (
                    <div key={project.name} className={`border-t border-stroke pt-4 mt-4 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h4 className="font-display italic mb-2">{project.name}</h4>
                      <p className="text-xs text-muted mb-2">{project.tech}</p>
                      <p className="text-sm text-muted">{project.description}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}