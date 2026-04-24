import { motion } from 'framer-motion'

const education = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'MCKV Institute of Engineering (MAKAUT)',
    period: '2016 – 2020',
    score: 'CGPA: 7.42',
    type: 'education',
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institution: 'Tantia High School, WBCHSE',
    period: '2013 – 2015',
    score: '68.4%',
    type: 'education',
  },
  {
    degree: 'Matriculation (Class X)',
    institution: 'Gyan Bharati Vidyapith, WBBSE',
    period: '2011 – 2013',
    score: '78.4%',
    type: 'education',
  },
]

const certifications = [
  { name: 'Internship Completion Certificate', org: 'TATA Technologies Pvt. Ltd., Jamshedpur', period: 'Jun–Jul 2019' },
  { name: 'QEEE Course – C Programming & Data Structures', org: 'IIT Mumbai', period: 'Jun–Sep 2017' },
  { name: 'QEEE Course – Chemistry', org: 'IIT Kharagpur', period: 'Jan–Apr 2017' },
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
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

export default function Education() {
  return (
    <section id="education" className="bg-bg py-16 md:py-24">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
            Academic <span className="italic">background</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h3 className="text-sm text-muted uppercase tracking-wider mb-6">Education</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-6 border-l border-stroke space-y-8"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-surface border-2 border-stroke -translate-x-1/2" />
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="glass-card rounded-xl p-4"
                >
                  <p className="text-xs text-muted mb-1">{edu.period}</p>
                  <h4 className="text-lg font-medium mb-1">{edu.degree}</h4>
                  <p className="text-sm text-muted mb-2">{edu.institution}</p>
                  <span className="text-xs px-3 py-1 rounded-full bg-stroke/50 border border-stroke">
                    {edu.score}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm text-muted uppercase tracking-wider mb-6">Certifications</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-xl"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium mb-1">{cert.name}</h4>
                    <p className="text-xs text-muted">{cert.org}</p>
                    <p className="text-xs text-muted mt-1">{cert.period}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}