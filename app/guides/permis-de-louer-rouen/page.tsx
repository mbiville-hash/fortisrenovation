import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideArticle } from '@/components/GuideArticle'
import PermisDeLouer from '@/components/PermisDeLouer'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { OG_IMAGE } from '@/lib/seo'

const SLUG = '/guides/permis-de-louer-rouen'
const TITRE = 'Permis de louer à Rouen : secteurs, dossier et délais'

export const metadata: Metadata = {
  title: TITRE,
  description: 'Six secteurs de Rouen imposent une autorisation avant toute nouvelle mise en location. Qui est concerné, ce que contient le dossier, le délai de 30 jours et les sanctions.',
  alternates: { canonical: `https://www.fortisrenovation.fr${SLUG}` },
  openGraph: {
    title: TITRE,
    description: 'Les six secteurs concernés, la procédure, le délai de 30 jours — et ce qu’il faut faire en cas de refus.',
    url: `https://www.fortisrenovation.fr${SLUG}`,
    locale: 'fr_FR',
    type: 'article',
    images: OG_IMAGE,
  },
}

export default function GuidePermisDeLouerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({
        title: TITRE,
        description: 'Autorisation préalable de mise en location à Rouen : secteurs concernés, dossier de diagnostics, délai d’instruction et sanctions.',
        slug: SLUG,
        datePublished: '2026-08-04',
      })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Accueil', url: 'https://www.fortisrenovation.fr' },
        { name: 'Guides', url: 'https://www.fortisrenovation.fr/guides' },
        { name: 'Permis de louer à Rouen', url: `https://www.fortisrenovation.fr${SLUG}` },
      ])) }} />

      <GuideArticle
        category="Permis de louer"
        title={TITRE}
        lead="Dans six secteurs de Rouen, vous ne pouvez pas signer un bail sans avoir obtenu l’accord de la Ville. Beaucoup de bailleurs l’ignorent — et l’amende peut atteindre 5 000 €. Voici qui est concerné, ce que la Ville examine, et ce qu’il faut faire quand elle refuse."
        datePublished="2026-08-04"
        readingTime="6 min"
        ctaTitle="Un refus à lever avant de relouer ?"
        ctaText="Électricité, sanitaires, ventilation, sols et peinture : nous chiffrons sous 48h les travaux exigés pour obtenir l’autorisation, et nous calons l’intervention sur votre date de relocation."
        sources={[
          { label: 'Permis de louer — Ville de Rouen (rouen.fr)', url: 'https://rouen.fr/permisdelouer' },
          { label: 'Articles L635-1 à L635-11 du code de la construction et de l’habitation (Légifrance)', url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000028781374/' },
          { label: 'Article L635-7 du CCH — sanctions (Légifrance)', url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028781426' },
          { label: 'Je souhaite louer — Métropole Rouen Normandie', url: 'https://www.metropole-rouen-normandie.fr/le-cadre-reglementaire/je-souhaite-louer' },
        ]}
        lastVerified="Dispositif vérifié sur rouen.fr et Légifrance le 4 août 2026. Les périmètres sont fixés par la Ville et peuvent évoluer : vérifiez votre adresse avant toute démarche. Ce guide est informatif et ne constitue pas un avis juridique."
      >
        <h2>De quoi parle-t-on</h2>
        <p>
          Le «&nbsp;permis de louer&nbsp;» est le nom courant de l’<strong>autorisation préalable de
          mise en location</strong>, prévue par les articles L635-1 et suivants du code de la
          construction et de l’habitation. Il permet à une commune d’exiger son accord avant toute
          nouvelle location, dans des secteurs où l’habitat dégradé est répandu.
        </p>
        <p>
          Rouen l’a instauré dans le cadre du programme local de l’habitat porté par la Métropole
          Rouen Normandie. Ce n’est pas une formalité de plus&nbsp;: sans autorisation, le bail est
          conclu en infraction.
        </p>

        <h2>Êtes-vous concerné&nbsp;?</h2>
        <p>Trois conditions doivent être réunies. Répondez ci-dessous.</p>

        <PermisDeLouer />

        <h2>Les six secteurs</h2>
        <p>
          Le dispositif ne couvre pas toute la ville. Six secteurs sont visés&nbsp;:
          <strong> Hôtel de Ville – Cathédrale</strong>, <strong>Cauchoise</strong>,
          <strong> Rive-Gauche</strong>, <strong>Beauvoisine</strong>, <strong>Saint-Nicaise</strong>
          {' '}et <strong>Saint-Hilaire</strong>.
        </p>
        <div className="guide-note">
          <p>
            Le découpage se fait <strong>rue par rue</strong>, et parfois par tronçon de rue&nbsp;:
            un côté peut être concerné et l’autre non. Ne vous fiez pas au nom du quartier — vérifiez
            l’adresse exacte sur la carte publiée par la Ville. C’est la seule source qui fait foi.
          </p>
        </div>
        <p>
          Deuxième filtre&nbsp;: seuls les <strong>bâtiments de plus de quinze ans</strong> sont
          concernés. Troisième filtre&nbsp;: il s’agit d’une <strong>nouvelle mise en location</strong>.
          Un bail en cours, un renouvellement ou un avenant ne déclenchent pas de demande.
        </p>

        <h2>Ce que la Ville examine</h2>
        <p>
          La demande s’accompagne d’un dossier de diagnostics techniques. Selon l’âge du bâti et des
          installations, il comprend le DPE, le constat de risque d’exposition au plomb, l’état
          d’amiante, et les états des installations d’électricité et de gaz lorsqu’elles ont plus de
          quinze ans.
        </p>
        <p>
          Une <strong>visite du logement</strong> peut être programmée. La Ville se prononce au plus
          tard <strong>trente jours</strong> après l’accusé de réception du dossier complet — d’où
          l’intérêt de déposer un dossier complet du premier coup.
        </p>
        <div className="guide-note">
          <p>
            Nous ne réalisons pas les diagnostics&nbsp;: ils relèvent d’un diagnostiqueur certifié.
            En revanche, nous exécutons les travaux qu’ils imposent, et nous chiffrons à partir de
            votre rapport.
          </p>
        </div>

        <h2>En cas de refus</h2>
        <p>
          Le refus est motivé&nbsp;: il liste les désordres qui portent atteinte à la sécurité ou à la
          santé des occupants. Vous devez alors <strong>réaliser les travaux, puis déposer une
          nouvelle demande</strong>. Tant que l’autorisation n’est pas obtenue, le logement ne peut
          pas être reloué.
        </p>
        <p>
          Ce qui revient le plus souvent&nbsp;: une installation électrique sans terre ou sans
          protection différentielle, une ventilation absente ou hors service, une humidité non
          traitée, des sanitaires non conformes. Nos pages{' '}
          <Link href="/electricien-rouen">électricité</Link>,{' '}
          <Link href="/plombier-rouen">plomberie</Link> et{' '}
          <Link href="/peintre-rouen">peinture et enduits</Link> détaillent ces interventions.
        </p>

        <h2>Ce que vous risquez sans autorisation</h2>
        <p>
          Louer sans avoir déposé la demande expose à une amende pouvant atteindre
          <strong> 5 000 €</strong>. En cas de nouveau manquement dans les trois ans, le plafond
          passe à <strong>15 000 €</strong> (article L635-7 du CCH). Le montant est proportionné à la
          gravité des manquements constatés.
        </p>

        <h2>Comment s’organiser sans perdre de temps</h2>
        <ol>
          <li>
            <strong>Vérifiez l’adresse</strong> sur la carte de la Ville dès que le préavis du
            locataire arrive — pas à la remise des clés.
          </li>
          <li>
            <strong>Faites réaliser les diagnostics</strong> pendant le préavis. Ce sont eux qui
            révèlent les travaux à prévoir.
          </li>
          <li>
            <strong>Faites chiffrer les reprises</strong> dans la foulée, sans attendre l’avis de la
            Ville&nbsp;: si un refus tombe, le devis est déjà prêt.
          </li>
          <li>
            <strong>Déposez un dossier complet.</strong> Le délai de trente jours ne court qu’à
            partir de là.
          </li>
        </ol>
        <p>
          Sur un logement vide, ces semaines coûtent cher&nbsp;: notre guide sur le{' '}
          <Link href="/guides/cout-vacance-locative">coût de la vacance locative</Link> permet de
          chiffrer ce que représente chaque jour d’attente. Et pour préparer la remise en état, voyez
          notre méthode de{' '}
          <Link href="/remise-en-etat-locative-rouen">remise en état locative</Link>.
        </p>
        <p>
          C’est aussi le moment où le loyer se fixe&nbsp;: Rouen n’étant pas classée en zone tendue,
          la relocation est la seule occasion de le repositionner librement. Voyez notre guide sur
          l’<Link href="/guides/augmentation-de-loyer-rouen">augmentation de loyer à Rouen</Link>.
        </p>
        <p>
          Les diagnostics exigés ici révèlent souvent des manquements à la décence, qui s’imposent
          eux partout, secteur ou pas. Notre guide{' '}
          <Link href="/guides/logement-decent-est-il-louable">votre bien est-il louable&nbsp;?</Link>{' '}
          liste les critères et ce que chacun impose comme travaux.
        </p>

        <h2>Et ailleurs dans la métropole&nbsp;?</h2>
        <p>
          Rouen n’est pas la seule commune concernée&nbsp;: plusieurs villes de la métropole ont mis
          en place un dispositif comparable, avec leurs propres périmètres et leurs propres
          modalités. Si vous gérez des lots sur plusieurs communes, vérifiez chaque adresse auprès
          de la mairie concernée — un dispositif rouennais ne vaut pas pour la commune voisine.
        </p>
      </GuideArticle>
    </>
  )
}
