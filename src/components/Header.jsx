import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import logo from '@/assets/logo.png'
import { NAV, SITE, scrollToId } from '@/lib/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  function go(id) {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a
          href="#inicio"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault()
            go('inicio')
          }}
        >
          <img src={logo} alt="Linkevolution" className="h-9 w-9 object-contain" />
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-teal-700"
              onClick={(e) => {
                e.preventDefault()
                go(item.href.slice(1))
              }}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
            onClick={() => go('contacto')}
          >
            Consulta gratuita
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Móvil">
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-base font-medium text-slate-800"
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.href.slice(1))
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600"
                onClick={() => go('contacto')}
              >
                Consulta gratuita
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
