import { NextRequest, NextResponse } from 'next/server'

const PORTAL_API_URL =
  process.env.PORTAL_APPS_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbz9LT9ECyPJknntqRxbR58gneS47RXDjLUs3j52ST5HMMOAT-gonA2vljgE1nl8WCiusQ/exec'

const ACTIONS = new Set(['requestAccessCode', 'verifyAccessCode', 'getPortalData', 'logout'])

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Payload invalide' }, { status: 400 })
    }

    const action = typeof body.action === 'string' ? body.action : ''

    if (!ACTIONS.has(action)) {
      return NextResponse.json({ error: 'Action invalide' }, { status: 400 })
    }

    let res = await fetch(PORTAL_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action,
        email: body.email || '',
        code: body.code || '',
        sessionToken: body.sessionToken || '',
      }),
      cache: 'no-store',
      redirect: 'manual',
    })

    const redirectUrl = res.headers.get('location')
    if (res.status >= 300 && res.status < 400 && redirectUrl) {
      res = await fetch(redirectUrl, {
        method: 'GET',
        cache: 'no-store',
      })
    }

    const text = await res.text()
    let data: unknown

    try {
      data = JSON.parse(text)
    } catch {
      console.error('Invalid portal response:', text.slice(0, 300))
      if (text.includes('Fonction de script introuvable') || text.includes('doPost')) {
        return NextResponse.json(
          { error: 'Apps Script doit être redéployé avec la fonction doPost.' },
          { status: 502 }
        )
      }

      return NextResponse.json({ error: 'Réponse portail invalide' }, { status: 502 })
    }

    if (!res.ok) {
      return NextResponse.json(
        typeof data === 'object' && data !== null ? data : { error: 'Erreur portail' },
        { status: 502 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Espace pro route error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
