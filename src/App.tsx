import { useEffect, useRef, useState } from "react"

const projects = [
  { number: "01", type: "DIGITAL / HEALTH", name: "«Омонра»", title: "Клиника, у которой есть свой голос.", url: "https://omonra46.github.io/app/", repo: "https://github.com/omonra46/app", tags: ["React", "TypeScript", "Vite"], color: "blue", shape: "orbit", description: "Многостраничный продукт с врачами, маршрутами, темами и записью — сложный сервис с человеческим лицом." },
  { number: "02", type: "SPORT / CULTURE", name: "БК «Меридиан»", title: "Ритм большого матча.", url: "https://omonra46.github.io/app2/", repo: "https://github.com/omonra46/app2", tags: ["React", "Design system", "Vite"], color: "lime", shape: "court", description: "Цифровой дом баскетбольной команды: ростер, расписание и визуальный язык, который чувствуется с первого экрана." },
  { number: "03", type: "KNOWLEDGE / PLAY", name: "Словарь вайбкодинга", title: "Сложные слова. Нормальный язык.", url: "https://omonra46.github.io/app3/", repo: "https://github.com/omonra46/app3", tags: ["React", "Search", "Markdown"], color: "orange", shape: "type", description: "26 терминов с примерами и поиском. Маленький образовательный продукт без ощущения учебника." },
]

const skills = ["React", "TypeScript", "Vite", "CSS architecture", "Responsive UI", "GitHub Actions"]

function Reveal({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.04, rootMargin: "0px 0px -4% 0px" })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <section ref={ref} id={id} className={`reveal ${visible ? "revealed" : ""} ${className}`}>{children}</section>
}

function Mark({ className = "" }: { className?: string }) {
  return <span className={`asterisk ${className}`} aria-hidden="true">✳</span>
}

function ProjectEmblem({ shape }: { shape: string }) {
  if (shape === "orbit") return <svg className="project-emblem" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="78" fill="none" stroke="currentColor"/><circle cx="100" cy="100" r="58" fill="none" stroke="currentColor"/><circle cx="100" cy="100" r="37" fill="none" stroke="currentColor"/><ellipse cx="100" cy="100" rx="30" ry="78" fill="none" stroke="currentColor" transform="rotate(42 100 100)"/><ellipse cx="100" cy="100" rx="30" ry="78" fill="none" stroke="currentColor" transform="rotate(-42 100 100)"/><circle cx="100" cy="100" r="9" fill="var(--lime)" stroke="none"/><path d="M100 78v44M78 100h44" stroke="currentColor" strokeWidth="2"/></svg>
  if (shape === "court") return <svg className="project-emblem emblem-court" viewBox="0 0 240 170" aria-hidden="true"><path d="M15 15h210v140H15zM120 15v140M120 85m-34 0a34 34 0 1 0 68 0a34 34 0 1 0-68 0M15 42h45a43 43 0 0 1 0 86H15M225 42h-45a43 43 0 0 0 0 86h45" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="183" cy="48" r="13" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M171 48h24M183 35c-7 8-7 18 0 26" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
  return <svg className="project-emblem emblem-type" viewBox="0 0 200 200" aria-hidden="true"><path d="M100 5 195 100 100 195 5 100z" fill="none" stroke="currentColor"/><path d="M100 17 183 100 100 183 17 100z" fill="none" stroke="currentColor"/><text x="87" y="127" textAnchor="middle">В</text><text className="emblem-number" x="152" y="164" textAnchor="middle">26</text></svg>
}

function Header() {
  return <header className="header"><a className="wordmark" href="#top" aria-label="omonra46 — наверх"><span className="wordmark-dot" />omonra<span className="wordmark-index">46</span></a><nav className="nav" aria-label="Основная навигация"><a href="#work">Работы <span>03</span></a><a href="#about">Обо мне</a><a className="nav-contact" href="#contact">Связаться <span>↗</span></a></nav></header>
}

function Hero() {
  return <Reveal className="hero" id="top"><div className="hero-topline"><span>INDEPENDENT FRONTEND DEVELOPER</span><span>МОСКВА · РАБОТАЮ ОНЛАЙН</span></div><div className="hero-title-wrap"><p className="hero-side-label">ПОРТФОЛИО<br />/ 2026</p><h1 className="hero-title">Делаю<br /><span>интернет</span><br />интереснее<Mark className="hero-mark" /></h1><div className="hero-stamp"><span>DESIGN<br />MEETS<br />CODE</span><i>↗</i></div></div><div className="hero-bottom"><p className="hero-intro">Я <strong>omonra46</strong> — фронтенд-разработчик.<br />Собираю цифровые продукты с характером,<br />вниманием к деталям и чистым кодом.</p><a href="#work" className="scroll-link"><span className="scroll-line" />ЛИСТАЙТЕ, ТАМ ИНТЕРЕСНО</a><span className="hero-coordinate">55°45′N<br />37°37′E</span></div><div className="hero-decoration" aria-hidden="true"><span>OM</span><span>46</span></div></Reveal>
}

function Work() {
  return <Reveal className="work section" id="work"><div className="section-top"><p className="section-kicker"><span>01</span> SELECTED PROJECTS</p><span className="section-aside">НЕ МОК-АПЫ. ОНИ УЖЕ РАБОТАЮТ.</span></div><div className="work-heading"><h2>Немного<br /><em>сделанного.</em></h2><Mark className="work-mark" /></div><div className="project-list">{projects.map((project) => <article className={`project project-${project.color}`} key={project.number}><div className="project-index">{project.number}<span>—</span></div><a href={project.url} target="_blank" rel="noreferrer noopener" className={`project-art art-${project.shape}`} aria-label={`Открыть проект ${project.name}`}><span className="art-meta">{project.type}</span><ProjectEmblem shape={project.shape} /><span className="art-open">↗</span><span className="art-caption">LIVE<br />PROJECT</span></a><div className="project-copy"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-title">{project.title}</p><p className="project-description">{project.description}</p><ul className="project-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="project-links"><a href={project.url} target="_blank" rel="noreferrer noopener">Открыть проект <span>↗</span></a><a href={project.repo} target="_blank" rel="noreferrer noopener">GitHub <span>↗</span></a></div></div></article>)}</div></Reveal>
}

function About() {
  return <Reveal className="about section" id="about"><div className="section-top"><p className="section-kicker"><span>02</span> THE PERSON BEHIND THE PIXELS</p><span className="section-aside">НЕ ТОЛЬКО ПИКСЕЛИ.</span></div><div className="about-layout"><div className="about-heading"><p className="about-label">ПРИЯТНО<br />ПОЗНАКОМИТЬСЯ</p><h2>Код — это<br />материал.<br /><em>Идея — форма.</em></h2><Mark className="about-mark" /></div><div className="about-copy"><p className="about-lead">Мне нравится момент, когда набор требований вдруг становится чем-то живым.</p><p>Я учусь на реальных задачах: разбираюсь в продукте, собираю интерфейс, проверяю детали на маленьком экране и довожу работу до публичного релиза.</p><p>Без магии и громких обещаний. Просто любопытство, хороший вкус и привычка доводить до конца.</p><div className="skill-cloud">{skills.map((skill, index) => <span key={skill}><i>0{index + 1}</i>{skill}</span>)}</div></div></div><div className="about-note"><span>ТЕКУЩИЙ РЕЖИМ</span><strong><i /> Открыт к интересным задачам</strong><span>2026 — И ДАЛЬШЕ</span></div></Reveal>
}

function Contact() {
  return <Reveal className="contact section" id="contact"><div className="section-top"><p className="section-kicker"><span>03</span> YOUR MOVE</p><span className="section-aside">ОТВЕЧАЮ НА ХОРОШИЕ ИДЕИ.</span></div><div className="contact-layout"><div><p className="contact-label">ЕСТЬ ЧТО СОБРАТЬ?</p><h2>Давайте<br /><em>начнём.</em><Mark className="contact-mark" /></h2></div><div className="contact-right"><p>Расскажите, что задумали. Обсудим задачу, накинем идеи и посмотрим, что можно сделать.</p><a className="contact-button" href="https://github.com/omonra46" target="_blank" rel="noreferrer noopener"><span>Написать в GitHub</span><b>↗</b></a><div className="contact-mini"><span>GITHUB</span><span>MON–FRI / ANYTIME</span></div></div></div></Reveal>
}

export default function App() {
  return <div className="page"><Header /><main><Hero /><Work /><About /><Contact /></main><footer className="footer"><a className="wordmark" href="#top"><span className="wordmark-dot" />omonra<span className="wordmark-index">46</span></a><span className="footer-note">СДЕЛАНО С ЛЮБОПЫТСТВОМ И REACT</span><a className="back-top" href="#top">НАВЕРХ ↑</a><span className="footer-year">© 2026</span></footer></div>
}