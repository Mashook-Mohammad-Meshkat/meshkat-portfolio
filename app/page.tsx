"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, Menu, X, Database,
  Code2, ChartNoAxesCombined, BrainCircuit, Workflow, GraduationCap,
  ExternalLink, MapPin, FileText, Microscope, ChevronRight
} from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis,
  Tooltip, BarChart, Bar
} from "recharts";

const profile = {
  name: "Mashook Mohammad Meshkat",
  short: "Meshkat",
  photo: "/profile.jpg",
  location: "Dhaka, Bangladesh",
  email: "meshkatmashook00@gmail.com",
  linkedin: "https://www.linkedin.com/in/mashook-mohammad-meshkat",
  github: "https://github.com/Mashook-Mohammad-Meshkat",
  scholar: "https://scholar.google.com/citations?user=e9APqg0AAAAJ",
  orcid: "https://orcid.org/0009-0009-4668-1589"
};

const projects = [
  {
    number: "01", category: "BUSINESS INTELLIGENCE", title: "Operational Analytics & MIS",
    description: "Operational reporting systems covering onboarding, collections, field performance, liability tracking, aging schedules and data quality monitoring.",
    stack: ["SQL", "Python", "Looker Studio", "Dash"], impact: "Cross-functional operational visibility",
    detail: "Built reporting and MIS solutions to help Operations, Finance and management teams monitor business performance and recurring operational metrics."
  },
  {
    number: "02", category: "DATA ENGINEERING", title: "Automated Reporting Workflows",
    description: "Automated recurring operational and financial reports and developed scheduled reporting workflows using Python and SQL.",
    stack: ["Python", "Pandas", "SQL", "SQLAlchemy", "BigQuery"], impact: "15+ reports · 40+ hours saved/month",
    detail: "Turned repetitive reporting tasks into repeatable workflows, reducing manual reporting workload by more than 40 hours per month."
  },
  {
    number: "03", category: "FINANCIAL ANALYTICS", title: "Finance & Business Automation",
    description: "Revenue Calculator, COS Calculator, CRM dashboards, Liability Ladder and Report Time Travel applications.",
    stack: ["Python", "SQL", "Dash", "FastAPI"], impact: "Tools for finance and operational teams",
    detail: "Developed analytical applications and reporting utilities to support finance and operational workflows."
  },
  {
    number: "04", category: "PREDICTIVE ANALYTICS", title: "Credit Scoring & Risk Modelling",
    description: "Predictive modelling and credit scoring solutions for operational risk assessment and field officer performance evaluation.",
    stack: ["Python", "Pandas", "SQL", "Machine Learning"], impact: "Predictive decision support",
    detail: "Applied machine learning and structured data processing to support risk assessment and performance evaluation."
  },
  {
    number: "05", category: "RESEARCH · PLOS ONE", title: "AI-Driven Precision Agriculture",
    description: "Research integrating satellite imagery, IoT sensor data, machine learning and fuzzy logic for crop prediction and irrigation optimization.",
    stack: ["Machine Learning", "IoT", "Satellite Data", "Fuzzy Logic"], impact: "Published Q1 journal research",
    detail: "Co-authored research on smart IoT-driven precision agriculture, including land mapping, crop prediction and irrigation systems.",
    link: "https://doi.org/10.1371/journal.pone.0319268"
  },
  {
    number: "06", category: "IEEE · AUTONOMOUS SYSTEMS", title: "Autonomous Vehicle Lane Changing",
    description: "First-authored IEEE conference research on AI-driven autonomous vehicle lane-changing systems using CARLA simulation.",
    stack: ["Python", "CARLA", "Autonomous Systems"], impact: "First author · Led a four-person team",
    detail: "Led a four-person team and contributed to the development and evaluation of an autonomous driving lane-changing prototype.",
    link: "https://doi.org/10.1109/iCACCESS61735.2024.10499558"
  }
];

const skills = [
  { icon: Database, title: "Data & Databases", items: ["SQL", "PostgreSQL", "MySQL", "BigQuery", "SQLAlchemy", "Data warehouse workflows"] },
  { icon: Code2, title: "Programming", items: ["Python", "Pandas", "FastAPI", "Git", "GitHub", "Linux", "Docker"] },
  { icon: ChartNoAxesCombined, title: "Analytics & BI", items: ["Looker Studio", "Dash", "KPI development", "MIS reporting", "Reporting automation"] },
  { icon: BrainCircuit, title: "AI & Machine Learning", items: ["Predictive modelling", "Credit scoring", "Machine learning", "LangChain", "RAG applications"] }
];

const monthly = [
  { month: "Jan", reports: 4, hours: 8 }, { month: "Feb", reports: 6, hours: 12 },
  { month: "Mar", reports: 8, hours: 17 }, { month: "Apr", reports: 10, hours: 23 },
  { month: "May", reports: 13, hours: 31 }, { month: "Jun", reports: 15, hours: 40 }
];

const fade = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .55 } } };

function SectionHeading({ label, title, text }: { label: string; title: string; text?: string }) {
  return <div className="mb-10"><div className="eyebrow">{label}</div><h2 className="section-title">{title}</h2>{text && <p className="muted max-w-2xl leading-7">{text}</p>}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [metric, setMetric] = useState<"reports" | "hours">("reports");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const nav = [["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Research", "#research"], ["Skills", "#skills"], ["Contact", "#contact"]];

  return (
    <main>
      <nav className="sticky top-0 z-50 border-b border-[#223027] bg-[#0b100e]/90 backdrop-blur-xl">
        <div className="container flex h-[72px] items-center justify-between">
          <a href="#home" className="font-bold tracking-tight"><span className="text-lime">M.</span> MESHKAT<span className="text-lime">_</span></a>
          <div className="hidden items-center gap-7 md:flex">{nav.map(([label, href]) => <a className="nav-link" key={label} href={href}>{label}</a>)}</div>
          <a href="#contact" className="hidden rounded-full bg-lime px-4 py-2 text-xs font-bold text-ink transition hover:bg-white md:inline-flex">Let's connect <ArrowUpRight size={14}/></a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <div className="container flex flex-col gap-4 pb-5 md:hidden">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="nav-link">{label}</a>)}</div>}
      </nav>

      <section id="home" className="grid-bg relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-lime/10 blur-[120px]"/>
        <div className="container grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div initial="hidden" animate="show" variants={fade}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#3c563f] bg-[#17241a] px-3 py-2 text-[11px] font-bold tracking-wider text-lime"><span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_#b7f36b]"/> DATA · ANALYTICS · ENGINEERING</div>
            <div className="mb-6 flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-[3px] border-lime shadow-[0_0_32px_rgba(183,243,107,.3)] sm:h-32 sm:w-32">
                <Image src={profile.photo} alt={profile.name} fill priority sizes="128px" className="object-cover object-[55%_28%]"/>
              </div>
              <p className="eyebrow">Hello, I'm {profile.short}</p>
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-7xl">Engineering data.<br/><span className="text-lime">Discovering insights.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#aab7ae]">I build data-driven systems, automate analytical workflows, and transform complex datasets into meaningful business insights using Python, SQL, machine learning and business intelligence.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink hover:bg-white">Explore my work <ArrowUpRight size={16}/></a>
              <a href="/Mashook-Mohammad-Meshkat-CV.pdf" download className="inline-flex items-center gap-2 rounded-full border border-[#405047] px-6 py-3 text-sm font-semibold hover:border-lime"><Download size={16}/> Download CV</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-[#9aa89f]">
              <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
              <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/></a>
              <a aria-label="Google Scholar" href={profile.scholar} target="_blank" rel="noreferrer"><GraduationCap size={19}/></a>
              <a aria-label="Email" href={`mailto:${profile.email}`}><Mail size={18}/></a>
              <span className="ml-2 inline-flex items-center gap-1 text-xs"><MapPin size={14}/> {profile.location}</span>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.7, delay:.15}} className="relative">
            <div className="panel grid-bg relative overflow-hidden p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-line pb-4"><div><div className="eyebrow">ANALYTICS SNAPSHOT</div><div className="mt-1 text-sm font-semibold">Impact through data</div></div><span className="pill">PORTFOLIO / 2026</span></div>
              <div className="grid grid-cols-2 gap-3 py-5">
                <div className="rounded-xl border border-line bg-[#101813] p-4"><div className="text-xs text-muted">Reports automated</div><div className="mt-2 text-4xl font-bold text-lime">15<span className="text-xl">+</span></div></div>
                <div className="rounded-xl border border-line bg-[#101813] p-4"><div className="text-xs text-muted">Hours saved / month</div><div className="mt-2 text-4xl font-bold text-lime">40<span className="text-xl">+</span></div></div>
                <div className="rounded-xl border border-line bg-[#101813] p-4"><div className="text-xs text-muted">Undergrad CGPA</div><div className="mt-2 text-4xl font-bold">3.97</div></div>
                <div className="rounded-xl border border-line bg-[#101813] p-4"><div className="text-xs text-muted">Research papers</div><div className="mt-2 text-4xl font-bold">3</div></div>
              </div>
              <div className="rounded-xl border border-line bg-[#101813] p-4">
                <div className="mb-3 flex items-center justify-between"><span className="text-xs font-semibold">Automation impact</span><span className="text-[10px] text-lime">ILLUSTRATIVE TREND</span></div>
                <div className="h-36"><ResponsiveContainer width="100%" height="100%"><AreaChart data={monthly}><defs><linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#b7f36b" stopOpacity={.35}/><stop offset="100%" stopColor="#b7f36b" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#26352c" strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month" tick={{fill:"#829087",fontSize:10}} axisLine={false} tickLine={false}/><YAxis hide/><Tooltip contentStyle={{background:"#111a16",border:"1px solid #34443a",borderRadius:10,color:"#fff"}}/><Area type="monotone" dataKey="hours" stroke="#b7f36b" strokeWidth={2} fill="url(#greenFill)"/></AreaChart></ResponsiveContainer></div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">{["Python","SQL","BigQuery","Pandas","Looker Studio"].map(x=><span className="pill" key={x}>{x}</span>)}</div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-[#405047] bg-[#17221b] p-4 shadow-xl sm:block"><div className="text-[10px] text-muted">CURRENT FOCUS</div><div className="mt-1 text-sm font-semibold text-lime">Data Analytics & Engineering</div></div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading label="01 / About" title="Curious by nature. Analytical by design."/>
            <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{once:true}} className="panel relative mx-auto max-w-sm overflow-hidden p-2 lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill sizes="(min-width: 1024px) 384px, 90vw" className="object-cover object-[55%_25%]"/>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b100e] via-[#0b100e]/70 to-transparent p-5 pt-16">
                  <div className="text-lg font-bold">{profile.name}</div>
                  <div className="mt-1 text-xs font-semibold text-lime">Associate Data Scientist · WeGro Technologies</div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="space-y-5 text-[15px] leading-8 text-[#aab7ae]">
            <p>I'm a data and analytics professional with experience developing reporting systems, automating business workflows, building dashboards, and supporting data-driven decisions across operational and financial functions.</p>
            <p>At WeGro Technologies, I work across Python, SQL, relational databases, BigQuery and BI tools to turn operational data into structured reporting and analytical solutions. My work includes recurring report automation, KPI frameworks, MIS systems and predictive modelling.</p>
            <p>Alongside industry work, I have contributed to peer-reviewed research in precision agriculture, autonomous driving and sustainable energy systems. I hold a BSc in Electrical & Electronic Engineering with a minor in Computer Science from BRAC University.</p>
            <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-3">
              {[["15+","Recurring reports automated"],["40+ hrs","Monthly manual work saved"],["3.97/4.00","Undergraduate CGPA"]].map(([v,l])=><div className="panel p-4" key={v}><div className="text-2xl font-bold text-lime">{v}</div><div className="mt-1 text-xs text-muted">{l}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section bg-[#0e1511]">
        <div className="container">
          <SectionHeading label="02 / Experience" title="Where I've made an impact." text="Professional experience across data analytics, business intelligence, engineering, and higher education."/>
          <div className="space-y-4">
            <div className="panel p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-3 sm:flex-row"><div><div className="text-xl font-bold">Associate Data Scientist</div><div className="mt-1 text-lime">WeGro Technologies Limited</div></div><span className="pill h-fit">Nov 2024 — Present</span></div>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-[#aab7ae] md:grid-cols-2">
                <li>• Automated 15+ recurring operational and financial reports using Python and SQL, saving 40+ hours monthly.</li>
                <li>• Built BI dashboards and MIS reporting systems for Operations, Finance and management teams.</li>
                <li>• Developed reporting tables and warehouse workflows using PostgreSQL, MySQL, BigQuery and SQLAlchemy.</li>
                <li>• Designed KPI frameworks for field performance, collections, onboarding, liability and data quality.</li>
                <li>• Implemented predictive models and credit scoring solutions for operational risk and performance assessment.</li>
                <li>• Developed FastAPI services and collaborated with engineering teams on reporting integrations.</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">{["Python","SQL","PostgreSQL","MySQL","BigQuery","Dash","Looker Studio","FastAPI"].map(s=><span className="pill" key={s}>{s}</span>)}</div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="panel p-6"><div className="text-lg font-bold">Lecturer (EEE)</div><div className="mt-1 text-lime">Primeasia University</div><div className="mt-2 text-xs text-muted">Feb 2025 — Present</div><p className="mt-4 text-sm leading-7 text-[#aab7ae]">Conduct theory and laboratory classes in Electrical & Electronic Circuits, Control Systems and Power Electronics for 120+ students.</p></div>
              <div className="panel p-6"><div className="text-lg font-bold">Adjunct Lecturer (CSE)</div><div className="mt-1 text-lime">BRAC University</div><div className="mt-2 text-xs text-muted">Oct 2024 — Jan 2025</div><p className="mt-4 text-sm leading-7 text-[#aab7ae]">Conducted theory and laboratory classes for Numerical Techniques, supporting 140+ students.</p></div>
              <div className="panel p-6 md:col-span-2"><div className="text-lg font-bold">Student Tutor</div><div className="mt-1 text-lime">BRAC University</div><div className="mt-2 text-xs text-muted">Jun 2022 — Apr 2024</div><p className="mt-4 text-sm leading-7 text-[#aab7ae]">Supported 250+ undergraduate students across six consecutive semesters, conducting 90+ classes and 120+ consultation sessions.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <SectionHeading label="03 / Selected work" title="Projects built around real problems." text="A selection of industry analytics systems and research projects. Open a project to explore its context and technical approach."/>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p, i)=><motion.article variants={fade} initial="hidden" whileInView="show" viewport={{once:true}} className="panel project-card p-6 sm:p-7" key={p.number}>
              <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-lime">{p.number} / {p.category}</span><ArrowUpRight size={18} className="text-muted"/></div>
              <h3 className="mt-7 text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#aab7ae]">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{p.stack.map(s=><span className="pill" key={s}>{s}</span>)}</div>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4"><span className="text-xs font-semibold text-lime">{p.impact}</span><button onClick={()=>setActiveProject(activeProject===i?null:i)} className="inline-flex items-center gap-1 text-xs text-white hover:text-lime">{activeProject===i?"Close":"Case study"} <ChevronRight size={14}/></button></div>
              {activeProject===i && <div className="mt-4 rounded-xl bg-[#0b100e] p-4 text-sm leading-7 text-[#aab7ae]">{p.detail}{p.link && <div className="mt-3"><a className="inline-flex items-center gap-2 text-lime" href={p.link} target="_blank" rel="noreferrer">View publication <ExternalLink size={13}/></a></div>}</div>}
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="playground" className="section bg-[#0e1511]">
        <div className="container">
          <SectionHeading label="04 / Analytics playground" title="Explore the numbers." text="A small interactive demonstration using synthetic sample data to show how I approach reporting and business metrics."/>
          <div className="panel p-5 sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><div className="text-lg font-bold">Reporting automation snapshot</div><div className="mt-1 text-xs text-muted">Illustrative sample data · Not company data</div></div><div className="flex gap-2"><button onClick={()=>setMetric("reports")} className={`rounded-full px-4 py-2 text-xs ${metric==="reports"?"bg-lime font-bold text-ink":"border border-line text-muted"}`}>Reports</button><button onClick={()=>setMetric("hours")} className={`rounded-full px-4 py-2 text-xs ${metric==="hours"?"bg-lime font-bold text-ink":"border border-line text-muted"}`}>Hours saved</button></div></div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_2fr]">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                <div className="rounded-xl bg-[#0b100e] p-5"><div className="text-xs text-muted">Total reports automated</div><div className="mt-2 text-4xl font-bold text-lime">15+</div></div>
                <div className="rounded-xl bg-[#0b100e] p-5"><div className="text-xs text-muted">Monthly hours saved</div><div className="mt-2 text-4xl font-bold text-lime">40+</div></div>
              </div>
              <div className="h-[270px] w-full"><ResponsiveContainer width="100%" height="100%"><BarChart data={monthly}><CartesianGrid stroke="#26352c" strokeDasharray="3 3" vertical={false}/><XAxis dataKey="month" tick={{fill:"#9aa89f",fontSize:11}} axisLine={false} tickLine={false}/><YAxis tick={{fill:"#9aa89f",fontSize:11}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{background:"#111a16",border:"1px solid #34443a",borderRadius:10}}/><Bar dataKey={metric} fill="#b7f36b" radius={[6,6,0,0]} /></BarChart></ResponsiveContainer></div>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="section">
        <div className="container">
          <SectionHeading label="05 / Research" title="Research with real-world applications." text="Peer-reviewed publications spanning precision agriculture, autonomous systems, and sustainable energy."/>
          <div className="space-y-3">
            <a href="https://doi.org/10.1371/journal.pone.0319268" target="_blank" rel="noreferrer" className="panel flex flex-col justify-between gap-4 p-6 transition hover:border-lime sm:flex-row sm:items-center"><div className="max-w-3xl"><span className="eyebrow">PLOS ONE · 2025 · Q1 JOURNAL</span><h3 className="mt-3 text-lg font-bold">Smart IoT-driven precision agriculture: Land mapping, crop prediction, and irrigation system</h3><p className="mt-2 text-sm text-muted">Satellite imagery · IoT · Machine Learning · Fuzzy Logic</p></div><ExternalLink className="shrink-0 text-lime"/></a>
            <a href="https://doi.org/10.1109/iCACCESS61735.2024.10499558" target="_blank" rel="noreferrer" className="panel flex flex-col justify-between gap-4 p-6 transition hover:border-lime sm:flex-row sm:items-center"><div className="max-w-3xl"><span className="eyebrow">IEEE iCACCESS · 2024 · FIRST AUTHOR</span><h3 className="mt-3 text-lg font-bold">AI-driven autonomous vehicle lane-changing system</h3><p className="mt-2 text-sm text-muted">Autonomous driving · CARLA simulation · Team leadership</p></div><ExternalLink className="shrink-0 text-lime"/></a>
            <a href="https://doi.org/10.1109/ICPS60393.2023.10428884" target="_blank" rel="noreferrer" className="panel flex flex-col justify-between gap-4 p-6 transition hover:border-lime sm:flex-row sm:items-center"><div className="max-w-3xl"><span className="eyebrow">IEEE ICPS · 2023 · FIRST AUTHOR</span><h3 className="mt-3 text-lg font-bold">Sustainable energy systems and solar EV charging station</h3><p className="mt-2 text-sm text-muted">Renewable energy · HOMER · EV charging infrastructure</p></div><ExternalLink className="shrink-0 text-lime"/></a>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm"><a className="inline-flex items-center gap-2 text-lime" href={profile.scholar} target="_blank" rel="noreferrer">Google Scholar <ExternalLink size={14}/></a><a className="inline-flex items-center gap-2 text-lime" href={profile.orcid} target="_blank" rel="noreferrer">ORCID <ExternalLink size={14}/></a></div>
        </div>
      </section>

      <section id="skills" className="section bg-[#0e1511]">
        <div className="container">
          <SectionHeading label="06 / Technical toolkit" title="Tools I use to turn data into value."/>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map(({icon:Icon,title,items})=><div className="panel p-6" key={title}><Icon className="text-lime" size={24}/><h3 className="mt-4 text-lg font-bold">{title}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map(item=><span className="pill" key={item}>{item}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div><SectionHeading label="07 / Education" title="A strong analytical foundation."/></div>
          <div className="panel p-7">
            <div className="eyebrow">2020 — 2024</div><h3 className="mt-3 text-2xl font-bold">BRAC University</h3><p className="mt-2 text-sm leading-6 text-[#aab7ae]">Bachelor of Science in Electrical & Electronic Engineering<br/>Minor in Computer Science</p>
            <div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#0b100e] p-4"><div className="text-2xl font-bold text-lime">3.97</div><div className="mt-1 text-xs text-muted">CGPA / 4.00</div></div><div className="rounded-xl bg-[#0b100e] p-4"><div className="text-lg font-bold text-lime">VC's Medal</div><div className="mt-1 text-xs text-muted">Academic distinction</div></div></div>
            <ul className="mt-5 space-y-2 text-sm text-[#aab7ae]"><li>• Merit scholarship (75% / 100%)</li><li>• Placed on VC's List 11 times</li><li>• CS Minor CGPA: 3.97</li></ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="panel grid-bg overflow-hidden p-8 sm:p-12">
            <div className="eyebrow">08 / Contact</div>
            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Let's turn complex data into <span className="text-lime">meaningful impact.</span></h2>
            <p className="mt-5 max-w-xl leading-7 text-[#aab7ae]">I'm always interested in conversations around data analytics, data engineering, applied machine learning, and research-driven problem solving.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink">Get in touch <Mail size={16}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#405047] px-6 py-3 text-sm font-semibold">LinkedIn <ArrowUpRight size={16}/></a></div>
            <div className="mt-8 text-sm text-muted">{profile.email} · {profile.location}</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-7">
        <div className="container flex flex-col justify-between gap-3 text-xs text-muted sm:flex-row"><span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span><span>Designed with purpose · Built with Next.js</span><a href="#home" className="text-lime">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
