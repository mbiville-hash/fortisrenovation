'use client'

import { useState, useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: {
        sitekey: string
        callback: (token: string) => void
        theme?: string
      }) => string
      remove: (widgetId: string) => void
    }
  }
}

type Status = 'idle' | 'sending' | 'success' | 'error'

const INITIAL_FORM = {
  nom: '',
  tel: '',
  email: '',
  profil: '',
  type_projet: '',
  urgence: '',
  message: '',
}

const TURNSTILE_SITE_KEY = '0x4AAAAAADLVOzCSZcAAFn5C'

export default function FormA() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState(INITIAL_FORM)
  const [captchaToken, setCaptchaToken] = useState('')
  const [turnstileKey, setTurnstileKey] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    const renderWidget = () => {
      if (!containerRef.current) return
      if (widgetIdRef.current) {
        try { window.turnstile.remove(widgetIdRef.current) } catch {}
        widgetIdRef.current = null
      }
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: setCaptchaToken,
        theme: 'light',
      })
    }

    if (window.turnstile) {
      renderWidget()
    } else {
      const existing = document.querySelector<HTMLScriptElement>('script[src*="turnstile"]')
      if (existing) {
        existing.addEventListener('load', renderWidget, { once: true })
      } else {
        const script = document.createElement('script')
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        script.async = true
        script.onload = renderWidget
        document.head.appendChild(script)
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current) } catch {}
        widgetIdRef.current = null
      }
    }
  }, [turnstileKey])

  const set = (k: keyof typeof INITIAL_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, cf_token: captchaToken }),
      })
      if (res.ok) {
        setStatus('success')
        setTimeout(() => {
          setStatus('idle')
          setForm(INITIAL_FORM)
          setCaptchaToken('')
          setTurnstileKey(k => k + 1)
        }, 6000)
      } else {
        setStatus('error')
        setCaptchaToken('')
        setTurnstileKey(k => k + 1)
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <style>{`
        .form-section { background: var(--paper); }
        .form-wrapper {
          max-width: 680px; margin: 0 auto;
          border: 1px solid rgba(26,26,24,0.12);
          padding: 64px;
          background: var(--white);
        }
        .form-eyebrow {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 16px;
          display: flex; align-items: center; gap: 10px;
        }
        .form-eyebrow::before {
          content: ''; display: block;
          width: 32px; height: 1px; background: var(--gold);
        }
        .form-title {
          font-family: 'Bodoni Moda', serif;
          font-size: 32px;
          margin-bottom: 8px;
        }
        .form-sub {
          font-size: 14px; color: var(--ink-faint);
          margin-bottom: 40px;
        }
        .form-row { display: flex; gap: 16px; }
        .form-group { flex: 1; margin-bottom: 20px; }
        .form-label {
          display: block; font-size: 12px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink-soft); margin-bottom: 8px;
        }
        .form-label .optional {
          font-weight: 400; text-transform: none;
          letter-spacing: 0; font-size: 11px;
          color: var(--ink-faint); margin-left: 6px;
        }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 13px 16px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          color: var(--ink);
          background: var(--paper);
          border: 1.5px solid rgba(26,26,24,0.25);
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--gold);
        }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit { width: 100%; padding: 16px; font-size: 13px; margin-top: 8px; }
        .form-honeypot { position: absolute; left: -9999px; opacity: 0; pointer-events: none; }
        .form-tel-big {
          margin-top: 32px; padding-top: 28px;
          border-top: 1px solid rgba(26,26,24,0.1);
          text-align: center;
        }
        .form-tel-label {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--ink-faint); margin-bottom: 8px;
        }
        .form-tel-number {
          font-family: 'Bodoni Moda', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: 0.02em;
        }
        .form-tel-number a { color: inherit; }
        .form-tel-number a:hover { color: var(--gold); }

        /* Rocket success animation */
        @keyframes rocketLaunch {
          0%   { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
          15%  { transform: translateY(4px) scale(1.05) rotate(-2deg); opacity: 1; }
          100% { transform: translateY(-90px) scale(0.7) rotate(5deg); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .form-success { text-align: center; padding: 48px 0; }
        .form-success-rocket {
          font-size: 56px;
          display: inline-block;
          animation: rocketLaunch 1.3s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards;
          margin-bottom: 16px;
        }
        .form-success h3 {
          font-family: 'Bodoni Moda', serif;
          font-size: 26px; margin-bottom: 12px;
          animation: fadeInUp 0.5s ease 0.6s both;
        }
        .form-success p {
          color: var(--ink-soft); font-size: 14px;
          animation: fadeInUp 0.5s ease 0.8s both;
        }

        @media (max-width: 640px) {
          .form-wrapper { padding: 40px 24px; }
          .form-row { flex-direction: column; }
        }
      `}</style>

      <section className="form-section" id="devis">
        <div className="container">
          <div className="form-wrapper">
            {status === 'success' ? (
              <div className="form-success">
                <div><span className="form-success-rocket">🚀</span></div>
                <h3>Message reçu !</h3>
                <p>On vous rappelle sous 48h. À très vite.</p>
              </div>
            ) : (
              <>
                <p className="form-eyebrow">Étude de projet</p>
                <h2 className="form-title">Parlons de votre projet.</h2>
                <p className="form-sub">Réponse garantie sous 48h.</p>

                <form onSubmit={submit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="nom">Prénom NOM</label>
                      <input id="nom" type="text" className="form-input" placeholder="Jean Dupont" value={form.nom} onChange={set('nom')} autoComplete="name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="tel">Téléphone</label>
                      <input id="tel" type="tel" className="form-input" placeholder="06 …" value={form.tel} onChange={set('tel')} autoComplete="tel" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-input" placeholder="jean@exemple.fr" value={form.email} onChange={set('email')} autoComplete="email" required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="profil">
                        Vous êtes <span className="optional">(facultatif)</span>
                      </label>
                      <select id="profil" className="form-select" value={form.profil} onChange={set('profil')}>
                        <option value="">— Choisissez —</option>
                        <option value="Syndic / Bailleur">Syndic / Bailleur</option>
                        <option value="Particulier">Particulier</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="type_projet">
                        Type de projet <span className="optional">(facultatif)</span>
                      </label>
                      <select id="type_projet" className="form-select" value={form.type_projet} onChange={set('type_projet')}>
                        <option value="">— Choisissez —</option>
                        <option value="Maintenance immobilière">Maintenance immobilière</option>
                        <option value="Rénovation salle de bain">Rénovation salle de bain</option>
                        <option value="Dégât des eaux">Dégât des eaux</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="urgence">
                      Urgence <span className="optional">(facultatif)</span>
                    </label>
                    <select id="urgence" className="form-select" value={form.urgence} onChange={set('urgence')}>
                      <option value="">— Non précisé —</option>
                      <option value="Oui">Oui — intervention urgente</option>
                      <option value="Non">Non — planifiable</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Votre message <span className="optional">(facultatif)</span>
                    </label>
                    <textarea id="message" className="form-textarea" placeholder="Décrivez votre projet en quelques mots…" value={form.message} onChange={set('message')} />
                  </div>

                  <div className="form-group">
                    <div ref={containerRef} />
                  </div>

                  {status === 'error' && (
                    <p role="alert" aria-live="polite" style={{ color: '#c0392b', fontSize: 13, marginBottom: 12 }}>
                      Une erreur est survenue. Appelez-nous directement.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-gold form-submit"
                    disabled={status === 'sending' || !captchaToken}
                  >
                    {status === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}
                  </button>
                </form>

                <div className="form-tel-big">
                  <p className="form-tel-label">Ou appelez directement</p>
                  <p className="form-tel-number"><a href="tel:+33767491324">07 67 49 13 24</a></p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
