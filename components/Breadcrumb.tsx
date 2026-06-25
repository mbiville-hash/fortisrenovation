import Link from 'next/link'

export default function Breadcrumb({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="breadcrumb">
      <ol>
        {items.map((it, i) => {
          const last = i === items.length - 1
          return (
            <li key={it.name}>
              {it.href && !last ? <Link href={it.href}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
              {!last && <span className="breadcrumb-sep" aria-hidden="true">›</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
