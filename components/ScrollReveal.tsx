'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    let io: IntersectionObserver | null = null
    let timer: ReturnType<typeof setTimeout> | undefined
    const reveal = (el: Element) => el.classList.add('is-in')

    // Attendre une frame : en navigation interne, le contenu de la
    // nouvelle page doit être dans le DOM avant qu'on l'observe.
    const raf = requestAnimationFrame(() => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')
      )
      if (els.length === 0) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        els.forEach(reveal)
        return
      }

      const vh = window.innerHeight
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target)
              io?.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
      )

      els.forEach((el) => {
        // Déjà visible (ou presque) au chargement → on révèle tout de suite,
        // sans dépendre du déclenchement de l'observer.
        if (el.getBoundingClientRect().top < vh * 0.95) reveal(el)
        else io!.observe(el)
      })

      // Filet de sécurité : quoi qu'il arrive, rien ne reste invisible.
      timer = setTimeout(() => {
        document
          .querySelectorAll('[data-reveal]:not(.is-in)')
          .forEach(reveal)
      }, 2500)
    })

    return () => {
      cancelAnimationFrame(raf)
      if (timer) clearTimeout(timer)
      io?.disconnect()
    }
  }, [pathname])

  return null
}
