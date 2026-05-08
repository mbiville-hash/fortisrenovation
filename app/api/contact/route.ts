import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nom, tel, email, profil, type_projet, urgence, message, _gotcha, cf_token } = body

    // Honeypot — bots fill this, humans don't
    if (_gotcha) {
      return NextResponse.json({ ok: true })
    }

    if (!nom || !tel || !email) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    // Turnstile CAPTCHA validation
    if (!cf_token) {
      return NextResponse.json({ error: 'Captcha manquant' }, { status: 400 })
    }
    if (TURNSTILE_SECRET) {
      const verif = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: TURNSTILE_SECRET, response: cf_token }),
      })
      const verifData = await verif.json()
      if (!verifData.success) {
        console.error('Turnstile rejected — error-codes:', JSON.stringify(verifData['error-codes']), '| hostname:', verifData.hostname)
        return NextResponse.json({ error: 'Captcha invalide' }, { status: 400 })
      }
    }

    if (!WEBHOOK_URL) {
      console.error('MAKE_WEBHOOK_URL env variable is not set')
      return NextResponse.json({ error: 'Configuration error' }, { status: 500 })
    }

    const payload = {
      nom,
      tel,
      email,
      profil: profil || 'Non précisé',
      type_projet: type_projet || 'Non précisé',
      urgence: urgence || 'Non précisé',
      message: message || '',
      date_envoi: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
    }

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('Webhook error:', res.status, await res.text())
      return NextResponse.json({ error: 'Webhook failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
