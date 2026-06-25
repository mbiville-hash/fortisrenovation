import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

type Source = { label: string; url: string }

export function GuideArticle({
  category,
  title,
  lead,
  datePublished,
  readingTime,
  sources,
  lastVerified,
  ctaTitle,
  ctaText,
  children,
}: {
  category: string
  title: string
  lead: string
  datePublished: string
  readingTime: string
  sources: Source[]
  lastVerified: string
  ctaTitle: string
  ctaText: string
  children: React.ReactNode
}) {
  const dateLabel = new Date(datePublished).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <>
      <style>{`
        .guide-hero { background: var(--dark); color: var(--white); padding: 96px 0 64px; }
        .guide-hero-inner { max-width: 760px; }
        .guide-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; }
        .guide-eyebrow a { color: var(--gold); }
        .guide-eyebrow a:hover { opacity: .8; }
        .guide-title { font-family: 'Bodoni Moda', serif; font-size: clamp(30px, 4.4vw, 50px); line-height: 1.12; color: var(--white); margin-bottom: 18px; }
        .guide-meta { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 26px; }
        .guide-lead { font-size: 19px; line-height: 1.65; color: rgba(255,255,255,0.82); }
        .guide-body { background: var(--paper); padding: 72px 0; }
        .guide-prose { max-width: 760px; }
        .guide-prose h2 { font-family: 'Bodoni Moda', serif; font-size: clamp(23px, 2.6vw, 30px); color: var(--ink); margin: 48px 0 16px; line-height: 1.2; }
        .guide-prose h2:first-child { margin-top: 0; }
        .guide-prose p { font-size: 16px; line-height: 1.8; color: #3a352e; margin-bottom: 18px; }
        .guide-prose ul, .guide-prose ol { margin: 0 0 20px; padding-left: 0; list-style: none; }
        .guide-prose li { font-size: 16px; line-height: 1.7; color: #3a352e; padding: 8px 0 8px 28px; position: relative; border-top: 1px solid rgba(154,124,69,0.18); }
        .guide-prose ol { counter-reset: gstep; }
        .guide-prose ol li { counter-increment: gstep; }
        .guide-prose ol li::before { content: counter(gstep); position: absolute; left: 0; top: 8px; font-family: 'Bodoni Moda', serif; color: var(--gold); font-size: 15px; font-weight: 600; }
        .guide-prose ul li::before { content: ''; position: absolute; left: 3px; top: 17px; width: 8px; height: 8px; border: 1.5px solid var(--gold); transform: rotate(45deg); }
        .guide-prose a { color: #9a7c45; text-decoration: underline; text-underline-offset: 2px; }
        .guide-prose strong { color: var(--ink); font-weight: 600; }
        .guide-prose .guide-note { background: rgba(184,151,90,0.10); border: 1px solid rgba(184,151,90,0.3); padding: 20px 22px; margin: 26px 0; border-radius: 2px; }
        .guide-prose .guide-note p { margin: 0; font-size: 15px; }
        .guide-sources { margin-top: 56px; padding-top: 28px; border-top: 2px solid rgba(154,124,69,0.3); }
        .guide-sources-title { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #9a7c45; margin-bottom: 14px; }
        .guide-sources ul { list-style: none; padding: 0; margin: 0 0 16px; }
        .guide-sources li { padding: 6px 0; border: none; }
        .guide-sources a { color: #5b564d; text-decoration: underline; font-size: 14px; }
        .guide-verified { font-size: 12.5px; color: #8a857a; font-style: italic; }
        .guide-cta { background: var(--dark); color: var(--white); padding: 72px 0; text-align: center; }
        .guide-cta h2 { font-family: 'Bodoni Moda', serif; font-size: clamp(26px, 3vw, 38px); color: var(--white); margin-bottom: 14px; }
        .guide-cta p { font-size: 15px; color: rgba(255,255,255,0.65); max-width: 520px; margin: 0 auto 28px; }
        .guide-cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 768px) { .guide-hero { padding: 72px 0 48px; } .guide-body { padding: 48px 0; } }
      `}</style>

      <article>
        <header className="guide-hero">
          <div className="container guide-hero-inner">
            <Breadcrumb items={[{ name: 'Accueil', href: '/' }, { name: 'Guides', href: '/guides' }, { name: category }]} />
            <h1 className="guide-title">{title}</h1>
            <p className="guide-meta">Publié le {dateLabel} · {readingTime} de lecture</p>
            <p className="guide-lead">{lead}</p>
          </div>
        </header>

        <div className="guide-body">
          <div className="container guide-prose">
            {children}
            <div className="guide-sources">
              <p className="guide-sources-title">Sources officielles</p>
              <ul>
                {sources.map((s) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener nofollow">{s.label}</a></li>
                ))}
              </ul>
              <p className="guide-verified">{lastVerified}</p>
            </div>
          </div>
        </div>

        <section className="guide-cta">
          <div className="container">
            <h2>{ctaTitle}</h2>
            <p>{ctaText}</p>
            <div className="guide-cta-actions">
              <Link href="/devis" className="btn btn-gold">Demander un devis</Link>
              <a href="tel:+33767491324" className="btn btn-outline-white">07 67 49 13 24</a>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
