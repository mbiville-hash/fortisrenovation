# Journal SEO — Fortis Rénovation

Point d'entrée pour savoir ce qui a été fait, quand, et sur quelle branche.
Une ligne par itération, la plus récente en haut.

## Conventions du site

Pour que le dépôt reste lisible, chaque nouveau contenu suit les mêmes règles.

- **Un guide = deux fichiers.** `app/guides/<slug>/page.tsx` pour la page,
  `components/<NomOutil>.tsx` pour l'outil interactif. Rien d'autre.
- **Registre visuel des outils.** Les outils de décision (on répond à des
  questions, on obtient un verdict) sont sur fond blanc. Les simulateurs
  chiffrés (on déplace des curseurs, on obtient des montants) sont sur fond
  sombre avec les chiffres en doré.
- **`lib/guides.ts` est la source unique.** Ajouter une entrée en tête suffit à
  faire apparaître le guide sur l'accueil, l'index `/guides`, les pages métier et
  les pages commune. C'est le fichier à ouvrir pour voir tout le catalogue.
- **`app/sitemap.ts` est manuel.** Il n'est pas généré depuis `lib/guides.ts` :
  il faut y ajouter l'URL à la main. C'est l'oubli classique.
- **Piège CSS connu.** Dans un guide, toute règle de style visant un paragraphe
  doit être préfixée par la classe du conteneur, sinon le style du guide l'écrase
  et le texte devient illisible. Corrigé sur les six outils le 5 août 2026.
- **Sources.** Toute règle de droit citée doit venir d'une page officielle
  réellement ouverte et lue, et figurer dans le bloc « Sources » du guide.

---

## Itérations

### 5 août 2026 — Guide « Humidité : condensation, remontée ou infiltration ? »

- **Produit** : le guide `/guides/humidite-identifier-la-cause` et son outil
  d'orientation en trois questions, qui distingue condensation, remontée
  capillaire, infiltration et fuite de canalisation.
- **Vérifié** : l'article 2 du décret du 30 janvier 2002 sur le logement décent,
  lu directement sur Légifrance. Il nomme explicitement les trois mécanismes —
  remontées d'eau, infiltrations, évacuation de l'humidité — ce qui donne au
  guide une base juridique et non seulement technique.
- **Réserve** : la date de publication est le 5 août, comme le guide dégât des
  eaux. L'espacement de deux jours demandé n'a pas pu être respecté sans
  postdater l'article, ce qui aurait été malhonnête. Les prochaines itérations
  s'espaceront naturellement si elles tombent des jours différents.
- **Branche** : `feat/guide-humidite`
- **Reste à faire** : points 2 à 5 de la liste — bloc de guides sur
  `/plombier-rouen`, logement décent, diagnostic électrique, amiante sur les sols.
