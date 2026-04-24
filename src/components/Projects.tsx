import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const featuredProjects = [
  {
    title: 'Real Estate ERP',
    subtitle: 'Property Management System',
    description: [
      'Engineered end-to-end features for a large-scale Real Estate ERP platform managing property acquisitions, leasing workflows, tenant lifecycle, maintenance ticketing, and financial reporting across multi-branch environments.',
      'Architected reusable Angular 18 standalone components with reactive forms, RxJS observables, and lazy-loaded feature modules, improving application load performance and component maintainability.',
      'Developed and integrated RESTful APIs in ASP.NET Core 8 (C#) following clean architecture and SOLID principles; implemented dual-database strategy using Microsoft SQL Server (SSMS) for transactional data and MongoDB for flexible document storage.',
      'Utilized Claude Code (AI-assisted agentic CLI) to autonomously generate boilerplate, scaffold Angular modules, and implement user stories from ticket descriptions, accelerating sprint delivery velocity.',
      'Identified, debugged, and resolved critical live production defects in the Property Management System using Chrome DevTools and server-side logging, restoring system stability and minimizing downtime.',
      'Participated in agile sprint planning, collaborated with product owners and QA engineers to refine acceptance criteria, and delivered features aligned with business objectives and compliance requirements.',
    ],
    tech: 'Angular 18, ASP.NET Core 8, SSMS, MongoDB, Claude Code',
    period: 'Mar 2025 – Present',
    image: '/Property_Management_System_202604232319.jpeg',
  },
  {
    title: 'OctoGen',
    subtitle: 'Cargo Management Platform',
    description: [
      'Architected and built OctoGen from the ground up using Angular 18, ASP.NET, and Microsoft SQL Server, delivering a full-featured cargo operations platform that streamlined booking, tracking, and reporting workflows.',
      'Designed modular Angular 18 feature modules with reactive forms, route guards, interceptors, and service-based architecture, resulting in a highly maintainable and extensible codebase.',
      'Authored optimized T-SQL stored procedures, indexed views, and query plans in MS SQL Server to support high-concurrency transaction processing with minimal latency.',
      'Collaborated closely with domain experts to incorporate cargo industry business logic into scalable application architecture, ensuring compliance with operational requirements.',
    ],
    tech: 'Angular 18, ASP.NET, MS SQL Server',
    period: '2 Years 3 Months',
    image: '/OctoGen_Cargo_Management_202604232320.jpeg',
  },
  {
    title: 'nGen D2D',
    subtitle: 'Door-to-Door Delivery System',
    description: [
      'Developed the nGen D2D last-mile delivery management system, enabling real-time shipment tracking, route assignment, and delivery confirmation workflows for ground operations teams.',
      'Integrated ASP.NET Core Web APIs with a jQuery/AJAX-driven front end, reducing full-page reloads and improving operational throughput for field dispatchers.',
      'Designed relational database schemas and wrote parameterized SQL queries to ensure data integrity and prevent injection vulnerabilities.',
    ],
    tech: 'jQuery, ASP.NET Core, SQL Server',
    period: '1 Year 2 Months',
    image: '/nGen_D2D_Door-to-Door_202604232321.jpeg',
  },
  {
    title: 'nGen RMS',
    subtitle: 'Revenue Management System',
    description: [
      'Built a dynamic Revenue Management System using React JS and C# MVC to automate yield pricing, capacity allocation, and revenue performance reporting for airline cargo.',
      'Implemented reusable React functional components with hooks and RESTful API integrations, enabling real-time revenue dashboards consumed by business analysts.',
      'Optimized complex SQL queries and introduced stored procedures for revenue aggregation, reducing report generation time significantly.',
    ],
    tech: 'React JS, C# MVC, MS SQL Server',
    period: '1 Year',
    image: '/nGen_RMS_Revenue_202604232323.jpeg',
  },
]

const personalProjects = [
  {
    title: 'Future Furniture Digital Store',
    subtitle: 'E-Commerce Platform',
    status: 'In Progress',
    description: [
      'Building a modern furniture e-commerce platform with complete shopping experience.',
    ],
    tech: 'Angular 18, ASP.NET Core 8, SSMS, Claude Code',
    period: 'In Progress',
    image: '/Future_Furniture_Digital_202604232326.jpeg',
  },
  {
    title: 'Bitcoin Price Forecasting',
    subtitle: 'Time Series Analysis',
    description: [
      'Designed and implemented a multi-model forecasting pipeline using AR, MA, and ARIMA models to predict short-term Bitcoin price movements based on historical OHLCV data.',
      'Performed data preprocessing, rolling-window stationarity tests (ADF, KPSS), and hyperparameter tuning via ACF/PACF plots; validated model accuracy using RMSE and MAE evaluation metrics.',
      'Demonstrated applied expertise in financial time series forecasting and statistical modelling using Python, statsmodels, and pandas.',
    ],
    tech: 'Python, statsmodels, ARIMA',
    period: 'Apr 2020 – Jun 2020',
    image: '/Bitcoin_Price_Forecasting_202604232326.jpeg',
  },
  {
    title: 'Anti-Diabetic Drug Sales Prediction',
    subtitle: 'Time Series Analysis',
    description: [
      'Built a sales demand forecasting model for anti-diabetic pharmaceutical products using the Moving Average (MA) model to capture short-term trend patterns in monthly sales data.',
      'Conducted end-to-end data pipeline including ingestion, cleaning, ACF/PACF-based parameter selection, stationarity validation, and model evaluation using statsmodels and SciPy.',
      'Delivered actionable demand forecast outputs applicable to supply chain planning and inventory optimization use cases in the healthcare domain.',
    ],
    tech: 'Python, MA Model, statsmodels',
    period: 'Feb 2020 – Apr 2020',
    image: '/Anti-Diabetic_Drug_Sales_202604232327.jpeg',
  },
  {
    title: 'Asset Management System',
    subtitle: 'Full-Stack Web Application',
    description: [
      'Designed and developed a full-stack web-based Asset Management System enabling CRUD operations for organizational hardware and software asset tracking.',
      'Implemented a MySQL relational database with normalized schemas; used PhpMyAdmin for database administration and PHP server-side scripting for dynamic page rendering.',
      'Built an interactive front-end using HTML5, CSS3, and JavaScript with client-side validation for form inputs, improving data quality and user experience.',
    ],
    tech: 'PHP, MySQL, JavaScript, XAMPP',
    period: 'Jun 2019 – Jul 2019',
    image: '/Asset_Management_System_202604232329.jpeg',
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

interface Project {
  title: string
  subtitle: string
  description: string[]
  tech: string
  period: string
  image: string
  status?: string
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [30 * (index % 2 === 0 ? 1 : -1), 0])

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      whileHover={{ scale: 1.02 }}
      className="glass-card group rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.split(', ').slice(0, 3).map((t: string) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-sm border border-white/20 text-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-muted">{project.period}</span>
        </div>
        <h4 className="text-xl font-display italic mb-1">{project.title}</h4>
        <p className="text-sm text-muted mb-3">{project.subtitle}</p>
        <ul className="space-y-1.5">
          {project.description.slice(0, 3).map((desc: string, idx: number) => (
            <li key={idx} className="text-xs text-muted leading-relaxed">
              <span className="text-accent mr-2">•</span>
              {desc}
            </li>
          ))}
          {project.description.length > 3 && (
            <li className="text-xs text-muted">+ {project.description.length - 3} more</li>
          )}
        </ul>
      </div>
    </motion.div>
  )
}

function PersonalCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card group rounded-2xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-start gap-5 p-5">
        <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h4 className="text-lg md:text-xl font-medium">{project.title}</h4>
            {project.status && (
              <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 flex-shrink-0">
                {project.status}
              </span>
            )}
          </div>
          <p className="text-sm text-muted mb-2">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.split(', ').map((t: string) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-stroke/30 border border-stroke text-muted">
                {t}
              </span>
            ))}
          </div>
          <ul className="space-y-2">
            {project.description.map((desc: string, idx: number) => (
              <li key={idx} className="text-sm text-muted leading-relaxed">
                <span className="text-accent mr-2">•</span>
                {desc}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted mt-3">{project.period}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="bg-bg py-16 md:py-24">
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
            <span className="text-xs text-muted uppercase tracking-[0.3em]">All Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4">
            Featured <span className="italic">work</span>
          </h2>
          <p className="text-muted max-w-md">
            A collection of professional and personal projects I&apos;ve worked on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-20"
        >
          <h3 className="text-lg md:text-xl font-medium mb-6 flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full glass-card text-muted">
              Featured
            </span>
            <span className="text-muted">Professional Projects</span>
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredProjects.map((project, i) => (
              <FeaturedCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-lg md:text-xl font-medium mb-6 flex items-center gap-3">
            <span className="text-xs px-3 py-1 rounded-full accent-gradient text-bg">
              Personal
            </span>
            <span className="text-muted">Side Projects</span>
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {personalProjects.map((project) => (
              <PersonalCard key={project.title} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}