import { useEffect, useRef, useState } from "react"

const projects = [
  { number: "01", type: "Сайт клиники", name: "«Омонра»", url: "https://omonra46.github.io/app/", repo: "https://github.com/omonra46/app", tags: ["React", "TypeScript", "Vite"], accent: "#ff8c32", description: "Многостраничный продукт с услугами, врачами, маршрутизацией, темами и формой записи." },
  { number: "02", type: "Спортивный продукт", name: "БК «Меридиан»", url: "https://omonra46.github.io/app2/", repo: "https://github.com/omonra46/app2", tags: ["React", "Design system", "Vite"], accent: "#ffb347", description: "Интерфейс баскетбольного клуба: ростер команды, расписание и выразительная визуальная система." },
  { number: "03", type: "Контентный продукт", name: "Словарь вайбкодинга", url: "https://omonra46.github.io/app3/", repo: "https://github.com/omonra46/app3", tags: ["React", "Search", "Markdown"], accent: "#ff7a18", description: "26 терминов с разборами, примерами и поиском — быстрый и понятный формат для обучения." },
]
const skillGroups = [{ title: "Frontend", items: "React · TypeScript · Vite" }, { title: "Интерфейсы", items: "CSS · адаптив · дизайн-системы" }, { title: "Доставка", items: "Git · GitHub · Pages · Actions" }]

function RevealSection({ children, className, id }: { children: React.ReactNode; className: string; id: string }) {
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
  return <section ref={ref} id={id} className={`${className} section-reveal${visible ? " is-visible" : ""}`}>{children}</section>
}

function Hero() { return <RevealSection className="hero" id="top"><div className="hero-copy"><p className="eyebrow">FRONTEND / 2026</p><h1 className="hero-name">omonra46</h1><p className="hero-role">Создаю интерфейсы, которые хочется использовать.</p><p className="hero-text">React-разработчик, который превращает идеи в живые продукты: от первого экрана до стабильного деплоя.</p><div className="hero-actions"><a className="btn btn-primary" href="#projects">Смотреть проекты <span>↘</span></a><a className="btn btn-ghost" href="https://github.com/omonra46" target="_blank" rel="noreferrer noopener">GitHub ↗</a></div></div><aside className="hero-card" aria-label="Кратко обо мне"><span className="hero-card-mark">✦</span><p>Сейчас фокус</p><strong>Сильный frontend<br />и чистая подача</strong><span className="hero-card-line" /><small>React · TypeScript · UI</small></aside><div className="stats" aria-label="Статистика"><div><strong>03</strong><span>живых проекта</span></div><div><strong>100%</strong><span>от идеи до Pages</span></div><div><strong>01</strong><span>постоянный фокус</span></div></div></RevealSection> }
function Skills() { return <RevealSection className="section" id="about"><div className="section-heading"><p className="eyebrow">01 / CAPABILITIES</p><h2>Что я умею</h2></div><div className="skill-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><p>{group.items}</p></article>)}</div><p className="about-note">Учусь на реальных задачах: собираю с нуля, дебажу продакшн и довожу каждый проект до публичного релиза.</p></RevealSection> }
function Projects() { return <RevealSection className="section" id="projects"><div className="section-heading section-heading-row"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Избранные проекты</h2></div><span className="section-count">03 projects</span></div><div className="projects">{projects.map((project) => <article className="card" key={project.number} style={{ "--card-accent": project.accent } as React.CSSProperties}><div className="card-top"><span className="card-number">{project.number}</span><span className="card-type">{project.type}</span></div><h3>{project.name}</h3><p>{project.description}</p><ul className="card-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><div className="card-links"><a className="card-link-live" href={project.url} target="_blank" rel="noreferrer noopener">Открыть сайт ↗</a><a className="card-link-repo" href={project.repo} target="_blank" rel="noreferrer noopener">Исходный код</a></div></article>)}</div></RevealSection> }
function Contact() { return <RevealSection className="contact section" id="contacts"><div><p className="eyebrow">03 / CONTACT</p><h2>Есть идея?<br /><em>Давайте соберём.</em></h2></div><div className="contact-side"><p>Открыт к интересным задачам, экспериментам и новым интерфейсам.</p><a className="btn btn-primary" href="https://github.com/omonra46" target="_blank" rel="noreferrer noopener">Найти меня на GitHub ↗</a></div></RevealSection> }
export default function App() { return <div className="page"><header className="topbar"><a className="topbar-logo" href="#top" aria-label="omonra46 — наверх"><span>+</span> omonra46</a><nav className="topbar-nav" aria-label="Основная навигация"><a href="#about">Навыки</a><a href="#projects">Проекты</a><a href="#contacts">Контакты</a></nav></header><main><Hero /><Skills /><Projects /><Contact /></main><footer className="footer"><span>© 2026 omonra46</span><span>Собрано на React + Vite</span></footer></div> }