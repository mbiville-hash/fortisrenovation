#!/usr/bin/env python3
"""Génère la Charte Sous-Traitants Fortis Rénovation en PDF A5."""

from weasyprint import HTML, CSS

HTML_CONTENT = """<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    :root {
      --marine: #1B2A4A;
      --or:     #C9A84C;
    }

    @page {
      size: 148mm 210mm;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Montserrat', sans-serif;
      background: #FFFFFF;
      color: var(--marine);
      width: 148mm;
      min-height: 210mm;
      display: flex;
      flex-direction: column;
    }

    /* ── EN-TÊTE ── */
    header {
      padding: 10mm 12mm 0 12mm;
      text-align: center;
    }

    .logo {
      font-size: 16pt;
      font-weight: 700;
      color: var(--marine);
      letter-spacing: 4px;
      text-transform: uppercase;
      line-height: 1.2;
    }

    .subtitle {
      font-size: 9pt;
      font-weight: 400;
      color: var(--marine);
      letter-spacing: 2.5px;
      text-transform: uppercase;
      margin-top: 3mm;
      opacity: 0.7;
    }

    .divider {
      width: 40mm;
      height: 2px;
      background: var(--or);
      margin: 5mm auto 0 auto;
    }

    /* ── CORPS ── */
    main {
      flex: 1;
      padding: 8mm 14mm 6mm 14mm;
    }

    .intro {
      font-size: 8pt;
      font-weight: 400;
      color: var(--marine);
      text-align: center;
      line-height: 1.7;
      margin-bottom: 8mm;
      opacity: 0.75;
    }

    .rules {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 5mm;
    }

    .rule {
      display: flex;
      align-items: flex-start;
      gap: 4mm;
    }

    .rule-number {
      flex-shrink: 0;
      font-size: 15pt;
      font-weight: 700;
      color: var(--or);
      line-height: 1.1;
      width: 7mm;
      text-align: right;
    }

    .rule-text {
      font-size: 8.5pt;
      font-weight: 400;
      color: var(--marine);
      line-height: 1.65;
      padding-top: 1.5mm;
    }

    /* ── ZONE SIGNATURE ── */
    .signature-section {
      padding: 0 14mm 0 14mm;
    }

    .signature-divider {
      width: 100%;
      height: 1px;
      background: var(--or);
      opacity: 0.4;
      margin-bottom: 6mm;
    }

    .signature-title {
      font-size: 7.5pt;
      font-weight: 700;
      color: var(--marine);
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 5mm;
      opacity: 0.6;
    }

    .signature-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4mm 6mm;
    }

    .sig-field {
      display: flex;
      flex-direction: column;
      gap: 1.5mm;
    }

    .sig-label {
      font-size: 6.5pt;
      font-weight: 700;
      color: var(--marine);
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.5;
    }

    .sig-line {
      height: 1px;
      background: var(--marine);
      opacity: 0.2;
      margin-top: 4mm;
    }

    .sig-field.full-width {
      grid-column: 1 / -1;
    }

    /* ── PIED DE PAGE ── */
    footer {
      background: var(--marine);
      padding: 3mm 12mm;
      text-align: center;
      margin-top: 6mm;
    }

    .footer-text {
      font-size: 7pt;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: 3px;
      text-transform: uppercase;
      opacity: 0.85;
    }
  </style>
</head>
<body>

  <header>
    <div class="logo">Fortis Rénovation</div>
    <div class="subtitle">Charte Sous-Traitants</div>
    <div class="divider"></div>
  </header>

  <main>
    <p class="intro">
      En intervenant pour le compte de Fortis Rénovation, vous vous engagez<br>
      à respecter les principes suivants en toutes circonstances.
    </p>

    <ol class="rules">
      <li class="rule">
        <span class="rule-number">1</span>
        <span class="rule-text">
          Vous représentez Fortis Rénovation — adoptez un comportement
          professionnel en toutes circonstances.
        </span>
      </li>
      <li class="rule">
        <span class="rule-number">2</span>
        <span class="rule-text">
          Il est strictement interdit de démarcher ou de facturer
          un client de Fortis Rénovation en direct.
        </span>
      </li>
      <li class="rule">
        <span class="rule-number">3</span>
        <span class="rule-text">
          Ne faites aucune promesse de délai ou de prix au client
          sans validation préalable.
        </span>
      </li>
      <li class="rule">
        <span class="rule-number">4</span>
        <span class="rule-text">
          Le port des EPI est obligatoire sur l'ensemble des chantiers.
        </span>
      </li>
      <li class="rule">
        <span class="rule-number">5</span>
        <span class="rule-text">
          Toute information commerciale (tarifs, marges, clients)
          est strictement confidentielle.
        </span>
      </li>
    </ol>
  </main>

  <div class="signature-section">
    <div class="signature-divider"></div>
    <div class="signature-title">Engagement &amp; Signature</div>
    <div class="signature-grid">
      <div class="sig-field">
        <span class="sig-label">Nom</span>
        <div class="sig-line"></div>
      </div>
      <div class="sig-field">
        <span class="sig-label">Entreprise</span>
        <div class="sig-line"></div>
      </div>
      <div class="sig-field">
        <span class="sig-label">Date</span>
        <div class="sig-line"></div>
      </div>
      <div class="sig-field">
        <span class="sig-label">Signature</span>
        <div class="sig-line"></div>
      </div>
    </div>
  </div>

  <footer>
    <span class="footer-text">Fortis Rénovation</span>
  </footer>

</body>
</html>
"""

OUTPUT = "charte_sous_traitants_fortis.pdf"

if __name__ == "__main__":
    print("Génération du PDF…")
    HTML(string=HTML_CONTENT, base_url=".").write_pdf(
        OUTPUT,
        stylesheets=[CSS(string="@page { size: 148mm 210mm; margin: 0; }")]
    )
    print(f"PDF généré : {OUTPUT}")
