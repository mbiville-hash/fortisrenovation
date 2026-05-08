import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nom, tel, email, profil, type_projet, urgence, message, _gotcha } = body

    // Honeypot anti-spam : les bots remplissent ce champ, les humains non
    if (_gotcha) {
      return NextResponse.json({ ok: true })
    }

    if (!nom || !tel) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    if (!WEBHOOK_URL) {
      console.error('MAKE_WEBHOOK_URL env variable is not set')
      return NextResponse.json({ error: 'Configuration error' }, { status: 500 })
    }

    const payload = {
      nom,
      tel,
      email: email || '',
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
