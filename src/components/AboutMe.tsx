import { motion } from 'framer-motion'

const bioText = `Results-driven Full-Stack Software Developer with 5+ years of hands-on experience architecting, developing, and deploying scalable web applications across real estate ERP, cargo logistics and revenue management domains.`

const bioText2 = `Proficient in Angular 18, ASP.NET Core 8, C#, Microsoft SQL Server, and MongoDB, with a strong command of RESTful API design, component-driven front-end architecture, and relational and SQL database optimization.`

const bioText3 = `Experienced in AI-assisted development workflows using Claude Code and Claude Chat to accelerate user story implementation, automate code scaffolding, and resolve production defects with greater velocity.`

const bioText4 = `Adept at translating complex business requirements into maintainable, high-performance solutions. Proven ability to thrive in fast-paced R&D and product engineering environments while collaborating effectively across cross-functional teams.`

export default function AboutMe() {
  return (
    <section id="about" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
            Who I <span className="italic">am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-[280px] md:w-[320px] aspect-[4/5] group">
              <div className="absolute inset-0 rounded-lg accent-gradient opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg bg-surface z-10" />
              <div className="relative w-full h-full rounded-lg overflow-hidden z-20 bg-surface">
                <img
                  src="/profile.jpg"
                  alt="Rohit Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-text-primary leading-relaxed">
              {bioText}
            </p>
            <p className="text-base md:text-lg text-text-primary leading-relaxed">
              {bioText2}
            </p>
            <p className="text-base md:text-lg text-text-primary leading-relaxed">
              {bioText3}
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              {bioText4}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}