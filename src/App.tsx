const projects = [
  {
    name: "«Омонра» — стоматологическая клиника",
    url: "https://omonra46.github.io/app/",
    repo: "https://github.com/omonra46/app",
    tags: ["React", "TypeScript", "Vite", "react-router"],
    accent: "#5eb1ff",
    description:
      "Многостраничный сайт клиники: услуги, врачи, маршрутизация, тёмная и светлая темы, форма записи.",
  },
  {
    name: "БК «Меридиан» — баскетбольный клуб",
    url: "https://omonra46.github.io/app2/",
    repo: "https://github.com/omonra46/app2",
    tags: ["React", "TypeScript", "Vite", "lucide"],
    accent: "#f6a23c",
    description:
      "Сайт спортивного клуба: ростер команды, расписание, рёбра дизайн-системы и переключатель тем.",
  },
  {
    name: "Вайбкодинг и промтостроение — словарь",
    url: "https://omonra46.github.io/app3/",
    repo: "https://github.com/omonra46/app3",
    tags: ["React", "TypeScript", "Vite", "Markdown"],
    accent: "#9f7cff",
    description:
      "Словарь из 26 терминов вайбкодинга и промтостроения с разборами, примерами и поиском.",
  },
]

const skills = [
  { name: "React", level: 70 },
  { name: "TypeScript", level: 65 },
  { name: "Vite", level: 75 },
  { name: "CSS / адаптив", level: 80 },
  { name: "Git / GitHub", level: 75 },
]

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <p className="hero-hello">Привет, я</p>
      <h1 className="hero-name">omonra46</h1>
      <p className="hero-role">фронтенд-разработчик</p>
      <p className="hero-text">
        Собираю интерфейсы на React и TypeScript: от лендинга до многостраничного
        сайта с роутингом и тёмной темой. Каждый проект — от идеи до живого
        деплоя на GitHub Pages, с автосборкой через GitHub Actions.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          Смотреть проекты
        </a>
        <a className="btn btn-ghost" href="https://github.com/omonra46">
          GitHub-профиль
        </a>
      </div>
      <div className="hero-stack" aria-label="Стек">
        <span>React</span>
        <span>TypeScript</span>
        <span>Vite</span>
        <span>CSS</span>
        <span>Git</span>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">Навыки</h2>
      <div className="skills">
        {skills.map((s) => (
          <div className="skill" key={s.name}>
            <div className="skill-head">
              <span>{s.name}</span>
              <span className="skill-level">{s.level}%</span>
            </div>
            <div className="skill-bar" aria-hidden="true">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="about-note">
        Учусь на реальных проектах: собираю с нуля, деплою, дебажу продакшн —
        белый экран на Pages тоже починил сам.
      </p>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Проекты</h2>
      <div className="projects">
        {projects.map((p) => (
          <article
            className="card"
            key={p.name}
            style={{ "--card-accent": p.accent } as React.CSSProperties}
          >
            <div className="card-dot" aria-hidden="true" />
            <h3 className="card-name">
              <a href={p.url} target="_blank" rel="noreferrer noopener">
                {p.name}
              </a>
            </h3>
            <p className="card-desc">{p.description}</p>
            <ul className="card-tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="card-links">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                className="card-link-live"
              >
                Открыть сайт →
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="card-link-repo"
              >
                Код на GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contacts">
      <h2 className="section-title">Контакты</h2>
      <div className="contacts-placeholder">
        <p className="contacts-text">
          Секция готова — контакты появятся чуть позже. А пока самый быстрый
          способ найти меня: GitHub-профиль по кнопке ниже.
        </p>
        <a
          className="btn btn-primary"
          href="https://github.com/omonra46"
          target="_blank"
          rel="noreferrer noopener"
        >
          github.com/omonra46
        </a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="topbar-logo" href="#top" aria-label="omonra46 — наверх">
          <svg viewBox="0 0 64 64" width="26" height="26" aria-hidden="true">
            <use href="./favicon.svg#g" />
          </svg>
          omonra46
        </a>
        <nav className="topbar-nav">
          <a href="#about">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 omonra46 · собрано на React + Vite</p>
      </footer>
    </div>
  )
}
