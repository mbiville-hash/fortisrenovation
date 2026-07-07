# CLAUDE.md — Fortis Rénovation

Contexte et règles pour toute session Claude travaillant sur ce dépôt.

## Projet

Site vitrine de **Fortis Rénovation** (artisan, Rouen) : rénovation de **salle de bain** (particuliers), **plomberie / dépannage**, **maintenance immobilière** (syndics & copropriétés).

- **Stack** : Next.js (App Router) + TypeScript + React.
- **Hébergement** : Vercel, **auto-deploy à chaque push sur `main`** du repo GitHub `mbiville-hash/fortisrenovation`.
- **Prod** : https://www.fortisrenovation.fr

## Workflow de déploiement — IMPORTANT

1. Éditer les fichiers directement.
2. Vérifier la syntaxe via **transpile TypeScript sur une liste de fichiers EXPLICITE** (jamais via `git status`).
3. Commit + push **uniquement via l'app GitHub Desktop**.
   - **Ne JAMAIS lancer de commande `git` dans le sandbox / terminal agent** → ça crée un `.git/index.lock` qui bloque GitHub Desktop.
   - Les commits utilisent l'e-mail noreply `282668003+mbiville-hash@users.noreply.github.com` (GitHub Desktop → Settings → Git) pour passer la protection « email privé » de GitHub.
   - Vérifier « Current Repository = **fortisrenovation** » avant chaque commit (GitHub Desktop bascule parfois sur `gestion` ou `fortis-power-web`).
4. Attendre ~30-45 s le build Vercel, puis vérifier en ligne.

## Charte éditoriale (ton)

- Toujours **« nous »**, jamais « on ».
- **« rapidement »**, jamais « sans délai ».
- Urgences dépannage : **« en quelques heures »** (jamais 48h). Devis / réponse courante : **« sous 48h »**. Astreinte : **« 24h/24 · 7j/7 »**.
- **Aucun faux avis / faux témoignage** : uniquement la note Google réelle + le nombre d'avis réel + lien vers Google.
- Ne jamais afficher une qualification / assurance non détenue (ex : **assurance décennale — pas encore obtenue** ; à afficher seulement une fois active).

## Périmètre d'activité

- **OUI** : plomberie, dépannage, dégât des eaux, électricité courante, peinture, carrelage & sols, mise aux normes, salle de bain clé en main, maintenance de copropriété.
- **NON** : menuiserie, maçonnerie, chauffage / énergie (donc **pas de RGE**).

## Avis Google — mise à jour MANUELLE

- Actuel : **5/5 · 30 avis**. La note (5/5) ne change pas sauf indication.
- Le script d'auto-update et son workflow GitHub Actions ont été **supprimés** — **ne pas les recréer**.
- Pour changer le nombre d'avis (ex. 30 → 31) :
  - Remplacer `30 avis` → `31 avis` partout : `grep -rl "30 avis" --include=*.tsx --include=*.ts .`
  - Mettre à jour `reviewCount: '30'` → `'31'` dans `lib/schema.ts`.
  - Fichiers concernés : `components/AvisC.tsx`, `components/HeroA.tsx`, `components/BathroomPremium.tsx`, `app/a-propos/page.tsx`, `app/plombier-rouen/page.tsx`, toutes les `app/plombier-*/page.tsx`, `lib/schema.ts`.

## Design system (`styles/globals.css`)

- Couleurs : `--paper #f5f0e8`, `--ink #1a1a18`, `--gold #b8975a`, `--gold-light #d4b483`, `--gold-deep #806532`, `--dark #111110`, `--ink-soft #4a4a45`, `--ink-faint #6b6b63`.
- Polices : **Bodoni Moda** (serif, titres), **Montserrat** (texte).
- Motif signature : **cercles concentriques dorés animés** — composant `components/Rings.tsx` (variantes `rings--tr`, `rings--br`).
- Animations d'entrée : attribut **`data-reveal`** (défini dans `globals.css`, décalage auto entre éléments frères).

## Architecture

- `/` (`app/page.tsx`) = accueil **PARTICULIER** (salle de bain). Commence par `<Aiguillage/>` — bloc « Vous êtes ? » : **« Particulier »** défile vers le hero (`id="decouvrir"`, reste sur la page), **« Syndic & pro »** → `/professionnels`.
- Pages clés :
  - `/salle-de-bain-rouen` (pilier ; composant `BathroomPremium` → `BathroomPillar`) + 13× `/salle-de-bain-[commune]` (`BathroomSupportPage`).
  - `/professionnels` (maintenance / syndics), `/maintenance-copropriete-rouen`, `/degat-des-eaux-rouen`.
  - `/plombier-rouen` (hub plomberie) + 8× `/plombier-[commune]`.
  - `/devis`, `/a-propos`, `/guides/*`.
- **Schema JSON-LD** : `lib/schema.ts` (`BASE_SCHEMA`, `serviceSchema`, `breadcrumbSchema`, `faqSchema`, `imageObjectSchema`, `aggregateRating`).
- **Redirections** (`next.config.js`) : 301 `/maintenance-immobiliere-rouen` → `/professionnels`. http / non-www → `https://www` géré par Vercel.
- Maillage : les pages `/plombier-[commune]` et le footer pointent « Rouen » vers `/plombier-rouen`.

## NAP (identité — à garder cohérente partout)

Fortis Rénovation · 193C Rue du Renard · 76000 Rouen · 07 67 49 13 24 · mbiville@fortisrenovation.fr · SIRET 937 628 428 00016 · TVA FR47937628428 · depuis 2024.

## Pièges connus

- Sandbox : pas de `git` (locks). Suppression de fichiers bloquée par le montage (« Operation not permitted ») → utiliser l'outil de suppression Cowork.
- Onglet navigateur en arrière-plan : animations CSS et scroll gelés → forcer l'opacité pour les captures.
- Largeur mini de la fenêtre Chrome ~606 px → impossible d'atteindre le vrai breakpoint mobile (560 px) par redimensionnement ; simuler via injection CSS.

## Contexte métier — parcours client salle de bain

Contact → visite & relevé (fiche détaillée, devis gratuit) → **plan 3D d'implantation** (fait par Fortis = sa signature ; volumes / ambiance, sans les produits exacts) → **showroom partenaire (Grandbains)** pour le choix des produits en VR → devis définitif → réalisation → remise des clés + demande d'avis. **Fortis reste l'interlocuteur unique** (l'exécution est sous-traitée, mais on ne le mentionne pas au client).
