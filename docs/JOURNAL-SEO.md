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

### 5 août 2026 — Guide « Amiante avant travaux : l'obligation est la vôtre »

- **Produit** : le guide `/guides/amiante-avant-travaux-sols` et un outil à trois
  questions — date du permis, nature des travaux, repérage déjà réalisé ou non —
  qui donne cinq réponses possibles, du hors-champ à l'obligation ferme.
- **Angle vérifié** : l'article R4412-97 du code du travail, lu sur Légifrance,
  met la recherche d'amiante à la charge du **donneur d'ordre**, pas de
  l'entreprise qui exécute. C'est le point que les gestionnaires découvrent
  généralement trop tard.
- **Également vérifié** : l'arrêté du 16 juillet 2019 (opérateur certifié avec
  mention amiante, prélèvements si l'information est insuffisante, rapport à
  communiquer aux entreprises intervenantes) et, sur service-public, le fait que
  le dossier amiante immobilier **ne dispense pas** du repérage avant travaux —
  deux régimes distincts, deux codes différents.
- **Périmètre annoncé** : nous ne réalisons ni les repérages ni les travaux de
  retrait. Le guide le dit deux fois, dont une dans l'outil.
- **Branche** : `feat/guide-amiante-sols`
- **Liste terminée.** Les cinq points sont faits. Avant d'aller plus loin, il
  faut fusionner et relire : les cinq guides portent la même date et rien n'a
  encore été vu en production.

### 5 août 2026 — Guide « Diagnostic électrique : ce qui oblige vraiment »

- **Produit** : le guide `/guides/diagnostic-electrique-location` et un outil qui
  trie les anomalies d'un rapport électrique entre les six points de sécurité,
  qui bloquent la relocation, et les informations complémentaires, qui peuvent
  attendre.
- **Angle vérifié** : le diagnostic **n'impose aucun travaux**, il constate. Ce
  point est confirmé noir sur blanc par service-public. Ce qui oblige, c'est
  l'obligation de décence — articles 2 et 3 du décret de 2002, déjà lus sur
  Légifrance pour le guide précédent. C'est l'angle qui différencie ce guide de
  ce qu'on lit ailleurs.
- **Également vérifié** : diagnostic exigé au-delà de quinze ans d'installation,
  validité de six ans en location contre trois en vente, substitution possible
  par une attestation de conformité de moins de six ans, et les deux sanctions
  distinctes (perte de l'exonération de garantie des vices cachés d'un côté,
  amende de 1 500 € pour recours à un diagnostiqueur non certifié de l'autre).
- **Branche** : `feat/guide-diagnostic-electrique`
- **Reste à faire** : point 5 — amiante avant travaux sur les sols.

### 5 août 2026 — Guide « Logement décent : votre bien est-il louable ? »

- **Produit** : le guide `/guides/logement-decent-est-il-louable` et sa checklist
  de douze critères plus la classe énergétique. On coche uniquement ce qui ne va
  pas, et l'outil dit si le lot est louable, quels travaux chaque manquement
  impose, et lesquels relèvent ou non de nos métiers.
- **Vérifié** : les articles 2, 3 et 4 du décret du 30 janvier 2002, lus un par
  un sur Légifrance — sécurité et étanchéité, les sept équipements obligatoires,
  et la surface minimale de 9 m² sous 2,20 m ou 20 m³. Le calendrier de la
  décence énergétique et les recours du locataire ont été vérifiés sur
  service-public.gouv.fr.
- **Point d'honnêteté** : le chauffage, la classe énergétique et la surface sont
  signalés dans l'outil comme hors de notre périmètre. Ils représentent trois des
  douze critères : mieux vaut le dire que de laisser croire qu'on traite tout.
- **Réserve** : troisième guide daté du 5 août. L'espacement de deux jours
  demandé supposerait de postdater, ce que je me refuse à faire.
- **Branche** : `feat/guide-logement-decent`
- **Reste à faire** : points 4 et 5 — diagnostic électrique, amiante sur les sols.

### 5 août 2026 — Blocs « à lire aussi » sur onze pages qui n'en avaient aucun

- **Produit** : le bloc de guides ajouté à `/plombier-rouen`, aux huit pages
  plombier de commune, à `/degat-des-eaux-rouen` et à
  `/maintenance-copropriete-rouen`. Onze pages qui ne renvoyaient vers aucun
  guide en renvoient désormais vers les neuf.
- **Constat de départ** : vingt-deux pages du site n'avaient aucun bloc de
  guides. Les onze traitées ici sont celles qui s'adressent aux professionnels.
- **Volontairement écarté** : les onze pages salle de bain. Elles s'adressent aux
  particuliers, et y pousser des guides de gestion locative n'aurait servi ni le
  lecteur ni le référencement.
- **Vérifié** : les onze pages affichent bien les neuf cartes, chacune pointant
  vers un guide, et le bloc se place avant l'appel à l'action final.
- **Branche** : `feat/bloc-guides-plombier-rouen` (contient aussi le guide
  humidité, pour garder ce journal continu et éviter un conflit de fusion).
- **Reste à faire** : points 3 à 5 de la liste — logement décent, diagnostic
  électrique, amiante sur les sols.

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
