import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { LangLink, MotionGate } from "./lang-link"
import { education, experience, featured, hasLocale, links, more, papers, projects, ui, type Role } from "./content"

const Out = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
    <ArrowUpRight aria-hidden />
  </a>
)

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const t = ui[lang]
  const span = ([from, to]: [number, (number | null)?]) =>
    to === undefined ? `${from}` : `${from}–${to === null ? t.now : String(to).slice(2)}`
  const roles = (list: Role[]) => (
    <ul>
      {list.map((r) => (
        <li key={r.role.en} className="row">
          <span className="key">{span(r.years)}</span>
          <span>
            <strong>{r.role[lang]}</strong>
            <span className="muted"> · {r.org[lang]}</span>
          </span>
        </li>
      ))}
    </ul>
  )
  const out = [
    { label: "Email", href: links.email },
    { label: "GitHub", href: links.github },
    { label: "LinkedIn", href: links.linkedin },
    { label: "Lattes", href: links.lattes },
  ]
  const s = (i: number) => ({ "--s": i }) as React.CSSProperties

  return (
    <div className="sheet">
      <MotionGate />
      <header className="topbar">
        <span className="topbar-name">Ivo Henrique Provensi Vieira</span>
        <nav aria-label="Links">
          {out.map((l) => (
            <Out key={l.href} href={l.href}>{l.label}</Out>
          ))}
          <LangLink href={lang === "en" ? "/pt" : "/en"} hrefLang={lang === "en" ? "pt" : "en"}>
            {t.switchTo}
          </LangLink>
        </nav>
      </header>

      <main>
        <section className="block intro" style={s(0)}>
          <h1 className="thesis">{t.thesis}</h1>
          <dl>
            {t.spec.map(([k, v], i) => (
              <div key={k} className="row" style={s(i + 1)}>
                <dt className="key">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="block" aria-labelledby="work" style={s(1)}>
          <h2 id="work" className="block-head">{t.workHeading}</h2>

          <article className="row figure">
            <span className="key">
              <span className="fig">{t.figure} 1</span>
              {span(featured.years)}
            </span>
            <div>
              <h3 className="figure-title">{featured.title}</h3>
              <p className="lede">{featured.body[lang]}</p>
              <figure className="pipeline">
                <ol>
                  {t.pipeline.map(([step, via], i) => (
                    <li key={step}>
                      <span className="key">{String(i + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                      <span className="key">{via}</span>
                    </li>
                  ))}
                </ol>
                <figcaption className="key">
                  {t.figure} 1. {t.pipelineCaption}
                </figcaption>
              </figure>
              <dl className="figure-spec">
                <div>
                  <dt>{t.specKeys.org}</dt>
                  <dd>{featured.org[lang]}</dd>
                </div>
                <div>
                  <dt>{t.specKeys.cites}</dt>
                  <dd>{t.cites}</dd>
                </div>
                <div>
                  <dt>{t.specKeys.papers}</dt>
                  <dd className="links">
                    {featured.papers.map((l) => (
                      <Out key={l.href} href={l.href}>{l.label}</Out>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>{t.specKeys.stack}</dt>
                  <dd className="stack">{featured.stack.join(" · ")}</dd>
                </div>
              </dl>
            </div>
          </article>

          {projects.map((p) => (
            <article key={p.id} className="row project">
              <span className="key">{span(p.years)}</span>
              <div>
                <h3 className="project-title">{p.title}</h3>
                <p className="muted">{p.org[lang]}</p>
                <p className="project-body">{p.body[lang]}</p>
              </div>
              <div className="project-meta">
                <p className="stack">{p.stack.join(" · ")}</p>
                {p.links && (
                  <p className="links">
                    {p.links.map((l) => (
                      <Out key={l.href} href={l.href}>{l.label}</Out>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}

          <div className="row more">
            <span className="key">{t.moreHeading}</span>
            <ul>
              {more.map((m) => (
                <li key={m.href}>
                  <Out href={m.href}>{m.label}</Out>
                  <span className="muted"> {m.note[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block" aria-labelledby="papers" style={s(2)}>
          <h2 id="papers" className="block-head">{t.paperHeading}</h2>
          <ol>
            {papers.map((p, i) => (
              <li key={p.doi} className="row">
                <span className="key">
                  [{papers.length - i}] {p.year}
                </span>
                <a className="paper" href={p.href} target="_blank" rel="noreferrer">
                  <span className="paper-title">{p.title}</span>
                  <span className="muted">
                    {p.authors.split("Vieira IHP").flatMap((part, j) => (j ? [<strong key={j}>Vieira IHP</strong>, part] : [part]))}
                  </span>
                  <span className="paper-venue">
                    <em>{p.venue}</em>
                    {p.first && <> · {t.firstAuthor}</>}
                    <span className="doi">doi:{p.doi}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="block" aria-labelledby="exp" style={s(3)}>
          <h2 id="exp" className="block-head">{t.experienceHeading}</h2>
          {roles(experience)}
        </section>

        <section className="block" aria-labelledby="edu" style={s(4)}>
          <h2 id="edu" className="block-head">{t.educationHeading}</h2>
          {roles(education)}
        </section>

        <section className="block" aria-labelledby="toolkit" style={s(5)}>
          <h2 id="toolkit" className="block-head">{t.toolkitHeading}</h2>
          <dl>
            {Object.entries(t.toolkit).map(([group, items]) => (
              <div key={group} className="row">
                <dt className="key">{group}</dt>
                <dd>{items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="block" aria-labelledby="about" style={s(6)}>
          <h2 id="about" className="block-head">{t.aboutHeading}</h2>
          <div className="row">
            <span className="key" />
            <div className="prose">
              {t.about.map((p) => (
                <p key={p.slice(0, 16)}>{p}</p>
              ))}
              <p className="muted">{t.personal}</p>
            </div>
          </div>
        </section>

        <section className="block" aria-labelledby="contact" style={s(7)}>
          <h2 id="contact" className="block-head">{t.contactHeading}</h2>
          <div className="row">
            <span className="key" />
            <div>
              <p className="contact-lede">{t.contact}</p>
              <p className="links contact-links">
                {out.map((l) => (
                  <Out key={l.href} href={l.href}>{l.label}</Out>
                ))}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>{t.footer}</span>
      </footer>
    </div>
  )
}
