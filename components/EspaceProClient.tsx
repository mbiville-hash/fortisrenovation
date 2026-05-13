'use client'

import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'

type Invoice = {
  id: string
  number: string
  status: string
  statusLabel: string
  totalAmount: string
  createdAt: string
  paidAt: string
  url: string
}

type Quote = {
  id: string
  number: string
  status: string
  statusLabel: string
  totalAmount: string
  createdAt: string
  url: string
}

type PortalDocument = {
  id: string
  name: string
  url: string
  updatedAt: string
  category?: 'invoice' | 'quote' | 'report' | 'document'
}

type DocumentStatus = {
  state: 'no_drive_folder' | 'empty_drive_folder' | 'copied' | 'drive_error'
  message: string
}

type Affaire = {
  id: string
  number: string
  description: string
  status: string
  address: string
  quoteUrl: string
  invoiceUrl: string
  reportUrl: string
  invoices: Invoice[]
  quotes: Quote[]
  documents: PortalDocument[]
  documentStatus?: DocumentStatus
}

type Company = {
  id: string
  name: string
  email: string
  contacts: Array<{ name: string; email: string }>
  affaires: Affaire[]
  unmatchedInvoices: Invoice[]
}

type PortalData = {
  ok: boolean
  email: string
  generatedAt: string
  companies: Company[]
}

type PortalActionResponse = {
  ok?: boolean
  message?: string
  error?: string
  sessionToken?: string
}

const SESSION_KEY = 'fortisProSession'

async function callPortal<T>(payload: Record<string, unknown>): Promise<T> {
  const res = await fetch('/api/espace-pro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json()

  if (!res.ok || data?.ok === false) {
    throw new Error(data?.error || 'Une erreur est survenue.')
  }

  return data
}

function formatDate(value: string) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }).format(date)
}

function euro(value: string) {
  if (!value) return ''
  const amount = Number(value)
  if (Number.isNaN(amount)) return ''
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount)
}

function statusClass(status: string) {
  if (status === 'paid' || status === 'approved') return 'good'
  if (status === 'unpaid') return 'late'
  return 'neutral'
}

export default function EspaceProClient() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [codeRequested, setCodeRequested] = useState(false)
  const [sessionToken, setSessionToken] = useState('')
  const [data, setData] = useState<PortalData | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const metrics = useMemo(() => {
    const companies = data?.companies || []
    const affaires = companies.flatMap((company) => company.affaires || [])
    const invoices = [
      ...affaires.flatMap((affaire) => affaire.invoices || []),
      ...companies.flatMap((company) => company.unmatchedInvoices || []),
    ]
    const documents = affaires.flatMap((affaire) => affaire.documents || [])
    return {
      affaires: affaires.length,
      unpaid: invoices.filter((invoice) => invoice.status === 'unpaid').length,
      documents: documents.length,
    }
  }, [data])

  useEffect(() => {
    const existing = window.localStorage.getItem(SESSION_KEY)
    if (existing) {
      setSessionToken(existing)
      void loadPortal(existing)
    }
  }, [])

  async function requestCode() {
    setLoading(true)
    setLoadingText('Envoi du code sécurisé')
    setError('')
    setMessage('')
    try {
      const res = await callPortal<PortalActionResponse>({ action: 'requestAccessCode', email })
      setCodeRequested(true)
      setMessage(res.message || 'Si cette adresse est autorisée, un code vient d’être envoyé.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Impossible d’envoyer le code.')
    } finally {
      setLoading(false)
      setLoadingText('')
    }
  }

  async function verifyCode() {
    setLoading(true)
    setLoadingText('Vérification du code')
    setError('')
    setMessage('')
    try {
      const res = await callPortal<PortalActionResponse>({ action: 'verifyAccessCode', email, code })
      if (!res.sessionToken) throw new Error('Session invalide.')
      window.localStorage.setItem(SESSION_KEY, res.sessionToken)
      setSessionToken(res.sessionToken)
      await loadPortal(res.sessionToken)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Code incorrect.')
    } finally {
      setLoading(false)
      setLoadingText('')
    }
  }

  async function loadPortal(token: string) {
    setLoading(true)
    setLoadingText('Synchronisation Notion, Qonto et Drive')
    setError('')
    try {
      const res = await callPortal<PortalData>({ action: 'getPortalData', sessionToken: token })
      setData(res)
    } catch (err) {
      window.localStorage.removeItem(SESSION_KEY)
      setSessionToken('')
      setData(null)
      setError(err instanceof Error ? err.message : 'Session expirée.')
    } finally {
      setLoading(false)
      setLoadingText('')
    }
  }

  async function logout() {
    const token = sessionToken
    window.localStorage.removeItem(SESSION_KEY)
    setSessionToken('')
    setData(null)
    setCode('')
    setCodeRequested(false)
    setMessage('')
    setError('')
    if (token) {
      try {
        await callPortal({ action: 'logout', sessionToken: token })
      } catch {
        // Local logout is enough for the client.
      }
    }
  }

  return (
    <>
      <style>{styles}</style>
      <main className="pro-space">
        {loading && <LoadingOverlay text={loadingText || 'Chargement de l’espace pro'} />}
        {!sessionToken || !data ? (
          <section className="pro-login">
            <div className="pro-hero">
              <p className="eyebrow">Espace pro</p>
              <h1>Vos dossiers Fortis, affaire par affaire.</h1>
              <p className="hero-copy">
                Retrouvez vos devis, factures et bons d’intervention dans un espace dédié à votre entreprise,
                avec les mêmes repères que ceux que nous utilisons ensemble sur le terrain.
              </p>
              <div className="proof-grid">
                <div><strong>01</strong> Code temporaire</div>
                <div><strong>02</strong> Documents par affaire</div>
                <div><strong>03</strong> Statuts synchronisés</div>
              </div>
            </div>

            <form className="login-card" onSubmit={(event) => event.preventDefault()}>
              <p className="eyebrow">Connexion entreprise</p>
              <h2>Accéder aux documents</h2>
              <p>
                Saisissez votre adresse professionnelle. Si elle est rattachée à une entreprise cliente,
                vous recevrez un code à usage unique.
              </p>

              <label htmlFor="pro-email">Email professionnel</label>
              <input
                id="pro-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="prenom@entreprise.fr"
              />

              {codeRequested && (
                <>
                  <label htmlFor="pro-code">Code reçu par e-mail</label>
                  <input
                    id="pro-code"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    value={code}
                    onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="123456"
                  />
                </>
              )}

              <div className="login-actions">
                <button className="btn btn-gold" type="button" onClick={requestCode} disabled={loading || !email}>
                  Recevoir un code
                </button>
                {codeRequested && (
                  <button className="btn btn-outline" type="button" onClick={verifyCode} disabled={loading || code.length < 6}>
                    Valider
                  </button>
                )}
              </div>

              {message && <p className="form-message">{message}</p>}
              {error && <p className="form-message form-error">{error}</p>}
            </form>
          </section>
        ) : (
          <section className="portal">
            <div className="portal-top">
              <div>
                <p className="eyebrow">Espace pro</p>
                <h1>{data.companies[0]?.name || 'Entreprise'}</h1>
                <p>Connecté avec {data.email}. Données mises à jour depuis Fortis, Qonto et Drive.</p>
              </div>
              <button className="btn btn-outline" type="button" onClick={logout}>Se déconnecter</button>
            </div>

            <div className="metrics">
              <Metric value={metrics.affaires} label="Affaires suivies" />
              <Metric value={metrics.unpaid} label="Factures impayées" />
              <Metric value={metrics.documents} label="Documents disponibles" />
            </div>

            {data.companies.map((company) => (
              <CompanySection key={company.id} company={company} />
            ))}
          </section>
        )}
      </main>
    </>
  )
}

function LoadingOverlay({ text }: { text: string }) {
  return (
    <div className="loading-overlay" role="status" aria-live="polite" aria-label={text}>
      <div className="loading-card">
        <div className="loading-logo" aria-hidden="true">F<span>.</span></div>
        <p>{text}</p>
      </div>
    </div>
  )
}

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function CompanySection({ company }: { company: Company }) {
  return (
    <div className="company-section">
      <div className="section-title">
        <p className="eyebrow">Affaires</p>
        <h2>{company.name}</h2>
      </div>

      <div className="affaire-list">
        {company.affaires.map((affaire) => (
          <AffaireCard key={affaire.id} affaire={affaire} />
        ))}
      </div>

      {company.unmatchedInvoices.length > 0 && (
        <div className="unmatched">
          <h3>Factures de l’entreprise non rattachées à une affaire</h3>
          {company.unmatchedInvoices.map((invoice) => (
            <InvoiceRow key={invoice.id || invoice.number} invoice={invoice} />
          ))}
        </div>
      )}
    </div>
  )
}

function AffaireCard({ affaire }: { affaire: Affaire }) {
  const invoiceDocuments = affaire.documents.filter((doc) => doc.category === 'invoice')
  const quoteDocuments = affaire.documents.filter((doc) => doc.category === 'quote')
  const reportDocuments = affaire.documents.filter((doc) => doc.category === 'report' || !doc.category || doc.category === 'document')
  const hasInvoices = Boolean(affaire.invoiceUrl || affaire.invoices.length || invoiceDocuments.length)
  const hasQuotes = Boolean(affaire.quoteUrl || affaire.quotes.length || quoteDocuments.length)
  const hasReports = Boolean(affaire.reportUrl || reportDocuments.length)

  return (
    <article className="affaire-card">
      <div className="affaire-head">
        <div>
          <p className="aff-number">{affaire.number || 'Affaire'}</p>
          <h3>{affaire.description}</h3>
          {affaire.address && <p className="address">{affaire.address}</p>}
        </div>
        {affaire.status && <span className="aff-status">{affaire.status}</span>}
      </div>

      <div className="doc-columns">
        <DocumentPanel title="Factures">
          {affaire.invoiceUrl && affaire.invoices.length === 0 && <DocumentLink href={affaire.invoiceUrl} label="Facture liée à l’affaire" meta="Qonto" />}
          {affaire.invoices.map((invoice) => <InvoiceRow key={invoice.id || invoice.number} invoice={invoice} />)}
          {invoiceDocuments.map((doc) => (
            <DocumentLink key={doc.id} href={doc.url} label={doc.name} meta={formatDate(doc.updatedAt) || 'Drive'} />
          ))}
          {!hasInvoices && <Empty text="Aucune facture disponible pour cette affaire pour le moment." />}
        </DocumentPanel>

        <DocumentPanel title="Devis">
          {affaire.quoteUrl && affaire.quotes.length === 0 && <DocumentLink href={affaire.quoteUrl} label="Devis lié à l’affaire" meta="Qonto" />}
          {affaire.quotes.map((quote) => <QuoteRow key={quote.id || quote.number} quote={quote} />)}
          {quoteDocuments.map((doc) => (
            <DocumentLink key={doc.id} href={doc.url} label={doc.name} meta={formatDate(doc.updatedAt) || 'Drive'} />
          ))}
          {!hasQuotes && <Empty text="Aucun devis disponible pour cette affaire pour le moment." />}
        </DocumentPanel>

        <DocumentPanel title="Bons d’intervention">
          {affaire.reportUrl && <DocumentLink href={affaire.reportUrl} label="Rapport d’intervention" meta="Drive" />}
          {reportDocuments.map((doc) => (
            <DocumentLink key={doc.id} href={doc.url} label={doc.name} meta={formatDate(doc.updatedAt) || 'Drive'} />
          ))}
          {!hasReports && <Empty text="Aucun document disponible pour cette affaire pour le moment." />}
        </DocumentPanel>
      </div>
    </article>
  )
}

function DocumentPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="document-panel">
      <h4>{title}</h4>
      {children}
    </div>
  )
}

function InvoiceRow({ invoice }: { invoice: Invoice }) {
  return (
    <a className="doc-row" href={invoice.url || '#'} target="_blank" rel="noreferrer">
      <span>
        <strong>{invoice.number || 'Facture'}</strong>
        <small>{[euro(invoice.totalAmount), formatDate(invoice.createdAt)].filter(Boolean).join(' · ')}</small>
      </span>
      <em className={statusClass(invoice.status)}>{invoice.statusLabel}</em>
    </a>
  )
}

function QuoteRow({ quote }: { quote: Quote }) {
  return (
    <a className="doc-row" href={quote.url || '#'} target="_blank" rel="noreferrer">
      <span>
        <strong>{quote.number || 'Devis'}</strong>
        <small>{[euro(quote.totalAmount), formatDate(quote.createdAt)].filter(Boolean).join(' · ')}</small>
      </span>
      <em className={statusClass(quote.status)}>{quote.statusLabel}</em>
    </a>
  )
}

function DocumentLink({ href, label, meta }: { href: string; label: string; meta: string }) {
  return (
    <a className="doc-row" href={href} target="_blank" rel="noreferrer">
      <span>
        <strong>{label}</strong>
        <small>{meta}</small>
      </span>
      <em>Ouvrir</em>
    </a>
  )
}

function Empty({ text }: { text: string }) {
  return <p className="empty-state">{text}</p>
}

const styles = `
.pro-space { padding-top: 72px; background: var(--paper); min-height: 100vh; }
.loading-overlay { position: fixed; inset: 0; z-index: 90; display: grid; place-items: center; background: rgba(247,245,240,.78); backdrop-filter: blur(7px); padding: 24px; }
.loading-card { min-width: min(320px, 100%); background: rgba(255,255,255,.94); border: 1px solid rgba(184,151,90,.36); box-shadow: 0 24px 70px rgba(17,17,16,.14); padding: 28px 26px 24px; display: grid; place-items: center; gap: 14px; text-align: center; }
.loading-logo { width: 48px; height: 48px; display: grid; place-items: center; position: relative; border: 1px solid rgba(184,151,90,.45); color: var(--ink); font-family: 'Bodoni Moda', serif; font-size: 24px; font-weight: 700; line-height: 1; }
.loading-logo span { color: var(--gold); }
.loading-logo::after { content: ''; position: absolute; inset: -6px; border: 1px solid transparent; border-top-color: var(--gold); border-right-color: rgba(184,151,90,.45); animation: portal-spin .9s linear infinite; }
.loading-card p { margin: 0; color: var(--ink-soft); font-size: 12px; font-weight: 700; letter-spacing: .12em; line-height: 1.45; text-transform: uppercase; }
@keyframes portal-spin { to { transform: rotate(360deg); } }
.pro-login { min-height: calc(100vh - 72px); display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(360px, .68fr); gap: 56px; align-items: center; max-width: 1180px; margin: 0 auto; padding: 56px 24px 72px; }
.pro-hero { min-height: 620px; background: var(--dark); color: white; padding: 56px 52px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; }
.pro-hero::after { content: ''; position: absolute; right: -90px; bottom: -130px; width: 360px; height: 360px; border: 1px solid rgba(184,151,90,.35); transform: rotate(32deg); }
.eyebrow { color: var(--gold); font-size: 11px; font-weight: 700; letter-spacing: .22em; text-transform: uppercase; margin-bottom: 20px; }
.pro-hero h1 { font-size: clamp(42px, 5vw, 72px); line-height: .96; margin-bottom: 24px; max-width: 720px; }
.hero-copy { max-width: 560px; color: rgba(255,255,255,.66); font-size: 16px; line-height: 1.8; }
.proof-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; position: relative; z-index: 1; }
.proof-grid div { border-top: 1px solid rgba(184,151,90,.62); padding-top: 14px; color: rgba(255,255,255,.78); font-size: 13px; }
.proof-grid strong { display: block; font-family: 'Bodoni Moda', serif; color: white; font-size: 18px; margin-bottom: 4px; }
.login-card { background: white; border: 1px solid rgba(184,151,90,.34); padding: 36px; box-shadow: 0 22px 60px rgba(17,17,16,.08); }
.login-card h2 { font-size: 34px; margin-bottom: 12px; }
.login-card p { color: var(--ink-soft); font-size: 14px; line-height: 1.75; }
.login-card label { display: block; margin: 22px 0 8px; font-size: 11px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
.login-card input { width: 100%; min-height: 52px; border: 1px solid rgba(26,26,24,.16); background: var(--paper); padding: 0 15px; font: inherit; color: var(--ink); outline: none; }
.login-card input:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(184,151,90,.15); }
.login-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 24px; }
.form-message { margin-top: 16px; font-size: 13px; color: var(--ink-soft); }
.form-error { color: #9f362e; }
.portal { max-width: 1180px; margin: 0 auto; padding: 56px 24px 80px; }
.portal-top { display: flex; justify-content: space-between; align-items: flex-end; gap: 32px; border-bottom: 1px solid rgba(26,26,24,.14); padding-bottom: 24px; }
.portal-top h1 { font-size: clamp(36px, 5vw, 58px); margin-bottom: 10px; }
.portal-top p { color: var(--ink-soft); font-size: 14px; }
.metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin: 24px 0 34px; }
.metric { background: white; border: 1px solid rgba(26,26,24,.11); padding: 20px; }
.metric strong { display: block; font-family: 'Bodoni Moda', serif; font-size: 42px; line-height: 1; color: var(--gold); margin-bottom: 8px; }
.metric span { font-size: 12px; text-transform: uppercase; letter-spacing: .12em; color: var(--ink-soft); font-weight: 700; }
.company-section { margin-top: 34px; }
.section-title h2 { font-size: 34px; margin-bottom: 18px; }
.affaire-list { display: grid; gap: 18px; }
.affaire-card { background: white; border: 1px solid rgba(26,26,24,.12); padding: 24px; box-shadow: 0 12px 32px rgba(17,17,16,.045); }
.affaire-head { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 18px; align-items: start; }
.aff-number { color: var(--gold); font-size: 11px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 8px; }
.affaire-card h3 { font-size: 25px; margin-bottom: 8px; }
.address { color: var(--ink-soft); font-size: 13px; }
.aff-status { border: 1px solid rgba(184,151,90,.45); padding: 8px 10px; color: var(--ink); font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.doc-columns { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin-top: 24px; }
.document-panel { border-top: 1px solid rgba(26,26,24,.12); padding-top: 14px; }
.document-panel h4 { font-family: 'Montserrat', sans-serif; color: var(--ink-soft); font-size: 11px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 10px; }
.doc-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 12px; align-items: center; border-bottom: 1px solid rgba(26,26,24,.08); padding: 10px 0; }
.doc-row:last-child { border-bottom: 0; }
.doc-row strong { display: block; font-size: 13px; line-height: 1.35; overflow-wrap: anywhere; }
.doc-row small { display: block; color: var(--ink-faint); font-size: 12px; margin-top: 3px; }
.doc-row em { font-style: normal; color: var(--gold); font-size: 12px; font-weight: 700; white-space: nowrap; }
.doc-row em.good { color: #246a45; }
.doc-row em.late { color: #9f362e; }
.doc-row em.neutral { color: var(--ink-faint); }
.empty-state { color: var(--ink-faint); font-size: 13px; padding: 6px 0; }
.unmatched { margin-top: 20px; background: white; border: 1px dashed rgba(184,151,90,.5); padding: 18px; }
.unmatched h3 { font-family: 'Montserrat', sans-serif; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 10px; }
@media (max-width: 900px) {
  .pro-login { grid-template-columns: 1fr; gap: 20px; padding: 32px 16px 56px; }
  .pro-hero { min-height: auto; padding: 36px 26px; }
  .proof-grid, .metrics, .doc-columns { grid-template-columns: 1fr; }
  .login-card { padding: 26px; }
  .portal { padding: 36px 16px 64px; }
  .portal-top, .affaire-head { display: block; }
  .portal-top .btn { margin-top: 18px; }
  .aff-status { display: inline-block; margin-top: 12px; }
}
`
