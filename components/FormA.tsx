'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function FormA() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ type: '', nom: '', tel: '', besoin: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
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
          display: block; font-size: 11px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink-soft); margin-bottom: 8px;
        }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 13px 16px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          color: var(--ink);
          background: var(--paper);
          border: 1.5px solid rgba(26,26,24,0.15);
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--gold);
        }
        .form-textarea { resize: vertical; min-height: 100px; }
        .form-submit { width: 100%; padding: 16px; font-size: 13px; margin-top: 8px; }
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
          color: var(--ink);
          letter-spacing: 0.02em;
        }
        .form-tel-number a { color: inherit; }
        .form-tel-number a:hover { color: var(--gold); }
        .form-success {
          text-align: center; padding: 48px 0;
        }
        .form-success-icon {
          font-size: 48px; color: var(--gold); margin-bottom: 16px;
        }
        .form-success h3 {
          font-family: 'Bodoni Moda', serif;
          font-size: 26px; margin-bottom: 12px;
        }
        .form-success p { color: var(--ink-soft); font-size: 14px; }
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
                <div className="form-success-icon">✓</div>
                <h3>Message reçu !</h3>
                <p>On vous rappelle sous 48h. À très vite.</p>
              </div>
            ) : (
              <>
                <p className="form-eyebrow">Devis gratuit</p>
                <h2 className="form-title">Parlons de votre projet.</h2>
                <p className="form-sub">Réponse garantie sous 48h.</p>

                <form onSubmit={submit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="type">Vous êtes</label>
                    <select id="type" className="form-select" value={form.type} onChange={set('type')} required>
                      <option value="">— Choisissez —</option>
                      <option value="syndic">Syndic / Bailleur</option>
                      <option value="particulier">Particulier</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="nom">Nom</label>
                      <input id="nom" type="text" className="form-input" placeholder="Votre nom" value={form.nom} onChange={set('nom')} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="tel">Téléphone</label>
                      <input id="tel" type="tel" className="form-input" placeholder="06 …" value={form.tel} onChange={set('tel')} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="besoin">Votre besoin</label>
                    <textarea id="besoin" className="form-textarea" placeholder="Décrivez votre projet en quelques mots…" value={form.besoin} onChange={set('besoin')} />
                  </div>

                  {status === 'error' && (
                    <p style={{ color: '#c0392b', fontSize: 13, marginBottom: 12 }}>
                      Une erreur est survenue. Appelez-nous directement.
                    </p>
                  )}

                  <button type="submit" className="btn btn-gold form-submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}
                  </button>
                </form>

                <div className="form-tel-big">
                  <p className="form-tel-label">Ou appelez directement</p>
                  <p className="form-tel-number"><a href="tel:+33767491424">07 67 49 14 24</a></p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
