import logo from '@/assets/logo.png'
import { SITE, scrollToId } from '@/lib/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Linkevolution" className="h-8 w-8 object-contain" />
            <span className="text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Automatización de WhatsApp, email y CRM para PYMEs. Hecho en {SITE.city}.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Servicios</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Agente de WhatsApp</li>
            <li>Email y voz</li>
            <li>CRM ligero</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Sitio</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <button type="button" className="hover:text-white" onClick={() => scrollToId('servicios')}>
                Servicios
              </button>
            </li>
            <li>
              <button type="button" className="hover:text-white" onClick={() => scrollToId('como')}>
                Cómo trabajo
              </button>
            </li>
            <li>
              <button type="button" className="hover:text-white" onClick={() => scrollToId('privacidad')}>
                Privacidad
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Contacto</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a className="hover:text-white" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a className="hover:text-white" href={SITE.phoneHref}>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>{SITE.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-5 py-6 text-center text-sm text-slate-500">
        © {year} {SITE.name}. {SITE.founder}.
      </div>
    </footer>
  )
}
