'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { ArrowUpRight, ChevronRight, GitBranch, Mail, Menu, Send, X } from 'lucide-react'

const email = 'llavanesjohnraymark@gmail.com'

const skills = [
  { label: 'Backend & ERP', items: ['Python', 'Odoo ERP', 'Django', 'Flask', 'REST APIs', 'Socket.IO'] },
  { label: 'Languages', items: ['Python', 'JavaScript', 'Java', 'HTML5', 'CSS3', 'SQL'] },
  { label: 'Data & DevOps', items: ['PostgreSQL', 'MySQL', 'Docker', 'Git', 'Linux', 'OpenAI API'] },
  { label: 'Frontend & Desktop', items: ['React', 'Next.js', 'Bootstrap', 'Tkinter', 'Android', 'API Integration'] },
]

const flagshipProjects = [
  {
    no: '01', title: 'HRIS Project', subtitle: 'Human resources operations platform',
    description: 'A production-ready HR operations workspace for employee records, attendance, leave management, approvals, reporting, and role-based administration.',
    screenshots: [
      { src: '/projects/hris/live-dashboard.png', label: 'Dashboard' },
      { src: '/projects/hris/live-employees.png', label: 'Employees' },
      { src: '/projects/hris/live-attendance.png', label: 'Attendance' },
      { src: '/projects/hris/live-leave.png', label: 'Leave' },
      { src: '/projects/hris/live-reports.png', label: 'Reports' },
      { src: '/projects/hris/live-new-employee.png', label: 'Employee form' },
    ],
    tags: ['Flask', 'PostgreSQL', 'Docker', 'HR Operations'],
  },
  {
    no: '02', title: 'Enterprise Resource Planning', subtitle: 'Modular operations platform',
    description: 'A modular ERP application that connects procurement, purchase orders, inventory, receiving, supplier bills, user access, and operational reporting in one workflow.',
    screenshots: [
      { src: '/projects/erp/live-dashboard.png', label: 'Procurement home' },
      { src: '/projects/erp/live-purchase-requests.png', label: 'Purchase requests' },
      { src: '/projects/erp/live-purchase-orders.png', label: 'Purchase orders' },
      { src: '/projects/erp/live-products.png', label: 'Products' },
      { src: '/projects/erp/live-receiving.png', label: 'Receiving' },
      { src: '/projects/erp/live-supplier-bills.png', label: 'Supplier bills' },
    ],
    tags: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
  },
]

const projects = [
  { no: '03', title: 'Odoo Custom Modules', subtitle: 'TPC / DEX enterprise workflows', challenge: 'Standard ERP screens did not match the company’s approval paths, warehouse handoffs, and operational terminology.', features: 'Python models, XML views, PostgreSQL-backed rules, role-aware actions, and workflow automation.', impact: 'Delivered focused ERP tools that fit daily operations and are easier for teams to adopt and maintain.', tags: ['Odoo', 'Python', 'PostgreSQL'], repo: 'https://github.com/Marksuuuu/Odoo-Custom-Modules' },
  { no: '04', title: 'Odoo Query Playground', subtitle: 'Database inspection utility', challenge: 'Developers needed a faster way to answer data questions while troubleshooting ERP records and relationships.', features: 'Safe query workflows, PostgreSQL inspection, reusable filters, and concise developer-facing output.', impact: 'Shortened investigation time and made recurring data checks more consistent during development.', tags: ['Python', 'PostgreSQL', 'Odoo'], repo: 'https://github.com/Marksuuuu/Query-Playground-Odoo' },
  { no: '05', title: 'AI Desktop Chatbot', subtitle: 'OpenAI API + Tkinter', challenge: 'Users needed a lightweight desktop tool for asking questions and receiving AI-assisted responses.', features: 'Tkinter interface, OpenAI API integration, input handling, conversation state, and clear response rendering.', impact: 'Proved a focused desktop experience for bringing AI assistance into everyday work.', tags: ['Python', 'OpenAI API', 'Tkinter'], repo: 'https://github.com/Marksuuuu/Chatbot-OpenAI-API-Tkinter' },
  { no: '06', title: 'Real-time Chat App', subtitle: 'Live communication for the web', challenge: 'Browser users needed messages to appear immediately without refreshing or managing complex screens.', features: 'Flask routes, Socket.IO events, live message delivery, connection handling, and responsive HTML/CSS/JavaScript.', impact: 'Created a practical real-time communication flow backed by a simple, extensible Python service.', tags: ['Flask', 'Socket.IO', 'JavaScript'], repo: 'https://github.com/Marksuuuu/Chat-App-Python-Socketio-Flask' },
]

export default function Page() {
  const [open, setOpen] = useState(false)
  const [selectedShots, setSelectedShots] = useState<Record<string, string>>({})
  const close = () => setOpen(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(String(data.get('subject') || 'Portfolio inquiry'))
    const body = encodeURIComponent(`Hi John Raymark,\n\n${String(data.get('message') || '')}\n\nFrom: ${String(data.get('name') || '')}\nReply to: ${String(data.get('replyTo') || '')}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={close}>JRL<span>.</span></a>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#about" onClick={close}>About</a><a href="#skills" onClick={close}>Skills</a><a href="#projects" onClick={close}>Projects</a><a href="#contact" onClick={close}>Contact</a>
        </nav>
        <a className="header-cta" href={`mailto:${email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow reveal">SOFTWARE ENGINEER <span>·</span> ERP &amp; AUTOMATION</p>
          <h1 className="hero-title reveal delay-1">Engineering systems<br /><em>that move business</em><br />forward.</h1>
          <p className="hero-intro reveal delay-2">I&apos;m John Raymark LLavanes, a 26-year-old software developer with four years of professional experience building Python, Odoo ERP, backend automation, and full-stack platforms that turn complex operations into reliable digital workflows.</p>
          <div className="hero-actions reveal delay-3"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Start a conversation <ChevronRight size={15} /></a></div>
        </div>
        <div className="profile-card reveal delay-2">
          <div className="profile-image-wrap"><Image src="/john-raymark-llavanes.jpg" alt="John Raymark LLavanes" fill priority sizes="(max-width: 760px) 100vw, 390px" className="profile-image" /></div>
          <div className="profile-caption"><span>John Raymark LLavanes</span><small>Python · Odoo · Full-stack</small></div>
        </div>
        <div className="hero-note">AVAILABLE FOR COLLABORATION <span>From business logic to production-ready software.</span></div>
      </section>

      <section id="about" className="about section-shell split-section"><div className="section-label"><span>01</span><p>Profile</p></div><div className="about-content"><h2>Business insight.<br /><em>Engineering discipline.</em></h2><p className="lead">I&apos;m a 26-year-old software developer with four years of professional experience building software where operational understanding matters as much as technical execution.</p><p>My work centers on Python and Odoo ERP, with hands-on experience across custom business modules, workflow automation, PostgreSQL databases, REST APIs, and full-stack product development. I enjoy stepping into complicated processes, understanding how teams actually work, and translating those requirements into software that is clear, dependable, and easy to maintain.</p><p>Over the past four years, I&apos;ve worked across backend services, enterprise systems, database tooling, integrations, and user-facing applications. That range has taught me to think beyond individual features: I consider data quality, security, deployment, usability, and the long-term life of every system I build.</p><p>I value thoughtful architecture, straightforward communication, measurable outcomes, and software that remains useful well beyond launch. I&apos;m continuously improving my craft and enjoy collaborating with people who care about solving meaningful operational problems.</p><div className="profile-facts"><div><strong>4</strong><span>Years of professional development</span></div><div><strong>26</strong><span>Years old</span></div><div><strong>ERP</strong><span>Business systems specialization</span></div></div><a className="text-link" href="https://github.com/Marksuuuu" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={15} /></a></div></section>

      <section id="skills" className="skills-section section-shell"><div className="section-label"><span>02</span><p>Expertise</p></div><div className="skills-grid">{skills.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

      <section id="projects" className="projects-section section-shell">
        <div className="projects-heading"><div className="section-label"><span>03</span><p>Selected work</p></div><p className="projects-summary">Production-minded systems built around people, processes, and dependable day-to-day operations.</p></div>
        <div className="featured-grid">{flagshipProjects.map((project) => {
          const activeShot = selectedShots[project.no] || project.screenshots[0].src
          const activeFullShot = project.screenshots.find((shot) => shot.src === activeShot)?.fullSrc || activeShot
          const activeLabel = project.screenshots.find((shot) => shot.src === activeShot)?.label || project.screenshots[0].label
          return <article className="featured-project" key={project.no}><a className="featured-visual" href={activeFullShot} target="_blank" rel="noreferrer" aria-label={`View full-size ${activeLabel} screenshot`}><Image src={activeShot} alt={`${project.title} — ${activeLabel}`} fill sizes="(max-width: 900px) 100vw, 50vw" /><span className="full-size-label">View full screenshot ↗</span></a><div className="screenshot-picker" aria-label={`${project.title} screenshots`}>{project.screenshots.map((shot) => <button type="button" className={shot.src === activeShot ? 'screenshot-thumb is-active' : 'screenshot-thumb'} key={shot.src} onClick={() => setSelectedShots((current) => ({ ...current, [project.no]: shot.src }))} aria-label={`Show ${shot.label} screenshot`} aria-pressed={shot.src === activeShot}><Image src={shot.src} alt="" fill sizes="90px" /><span>{shot.label}</span></button>)}</div><div className="featured-body"><p className="project-kicker">{project.no} · {project.subtitle}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>
        })}</div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.no}><div className="project-index">{project.no}</div><div className="project-main"><p className="project-kicker">{project.subtitle}</p><h3>{project.title}</h3><div className="project-details"><div><span>Challenge</span><p>{project.challenge}</p></div><div><span>Built with</span><p>{project.features}</p></div><div><span>Value</span><p>{project.impact}</p></div></div><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-repo" href={project.repo} target="_blank" rel="noreferrer"><GitBranch size={15} /> View GitHub repository <ArrowUpRight size={14} /></a></div></article>)}</div>
      </section>

      <section className="services-section section-shell"><div className="section-label"><span>04</span><p>Capabilities</p></div><div className="service-list"><div><span>01</span><h3>Odoo ERP customization<br />&amp; module development</h3></div><div><span>02</span><h3>Python backend<br />&amp; API engineering</h3></div><div><span>03</span><h3>Database design<br />&amp; developer tooling</h3></div><div><span>04</span><h3>Docker deployment<br />&amp; system integration</h3></div></div></section>

      <section id="contact" className="contact-section section-shell">
        <div className="contact-copy"><p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</p><h2>Bring your next system<br /><em>into focus.</em></h2><p>Tell me what you&apos;re working on. The form opens a prepared message in your email app, addressed directly to me.</p><a className="contact-email" href={`mailto:${email}`}>{email} <ArrowUpRight size={22} /></a></div>
        <form className="contact-form" onSubmit={sendEmail}><label>Name<input name="name" type="text" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="replyTo" type="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Subject<input name="subject" type="text" required placeholder="Project inquiry" /></label><label>Message<textarea name="message" rows={5} required placeholder="A short overview of your project..." /></label><button className="button button-primary" type="submit">Prepare email <Send size={16} /></button></form>
        <div className="contact-links"><a href="https://github.com/Marksuuuu" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a href={`mailto:${email}`}><Mail size={17} /> Email</a></div>
      </section>
      <footer className="site-footer section-shell"><span>© 2026 John Raymark LLavanes</span><span>Python · Odoo · Docker · Full-stack</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
