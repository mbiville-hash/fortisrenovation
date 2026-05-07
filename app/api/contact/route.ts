import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL ||
  'https://hook.eu1.make.com/tt88vi9co5elnwmotjwuhv9wesmf54el'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, nom, tel, besoin } = body

    if (!nom || !tel) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    const payload = {
      type: type || 'Non précisé',
      nom,
      tel,
      besoin: besoin || '',
      source: 'fortis-renovation.fr',
      date: new Date().toISOString(),
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
