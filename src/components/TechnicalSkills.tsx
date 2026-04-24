import { motion } from 'framer-motion'

const skillCategories = [
  {
    icon: '🖥️',
    title: 'Front-End Development',
    skills: ['Angular 18', 'React JS', 'JavaScript ES6+', 'Reactive Forms', 'RxJS', 'Lazy Loading', 'Angular Router', 'jQuery', 'Hooks', 'State Management', 'HTML5', 'CSS', 'Bootstrap', 'TypeScript'],
  },
  {
    icon: '⚙️',
    title: 'Back-End Development',
    skills: ['ASP.NET Core 8', 'C# (.NET)', 'RESTful API', 'Clean Architecture', 'Dependency Injection', 'Middleware', 'OOP Principles', 'SOLID Patterns'],
  },
  {
    icon: '🗄️',
    title: 'Database & Data',
    skills: ['MS SQL Server', 'MongoDB', 'MySQL', 'SSMS', 'Stored Procedures', 'Query Optimization', 'Document Modelling', 'Aggregation Pipelines', 'PhpMyAdmin'],
  },
  {
    icon: '🤖',
    title: 'AI / LLM-Assisted',
    skills: ['Claude Code', 'Claude Chat', 'Prompt Engineering', 'Context-aware Debugging', 'Code Walkthrough', 'LLM-driven Implementation', 'AI-accelerated Testing'],
  },
  {
    icon: '📊',
    title: 'Data Science & ML',
    skills: ['Python', 'Time Series Analysis', 'ARIMA', 'ACF/PACF', 'ADF/KPSS Tests', 'NLP', 'Bag-of-Words', 'statsmodels', 'SciPy', 'pandas', 'scikit-learn'],
  },
  {
    icon: '🛠️',
    title: 'Tools & DevOps',
    skills: ['Git', 'Agile/Scrum', 'Chrome DevTools', 'Version Control', 'Microsoft TFS', 'Performance Profiling', 'Architecture Design', 'Cross-Browser Testing'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
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

export default function TechnicalSkills() {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
            What I <span className="italic">know</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg md:text-xl font-medium text-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="h-px w-full accent-gradient mb-4 opacity-60" />

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-surface/40 border border-stroke text-text-primary hover:border-accent/30 hover:bg-surface/60 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}