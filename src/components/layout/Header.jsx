import { Button } from '@/components/ui/button.jsx'
import logoImage from '@/assets/logo.svg'

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-md"
      >
        Saltar al contenido principal
      </a>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between" aria-label="Navegacion principal">
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Linkevolution Logo" className="w-8 h-8" loading="lazy" decoding="async" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Linkevolution
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#producto" className="text-slate-700 hover:text-emerald-600 transition-colors">Producto</a>
            <a href="#pricing" className="text-slate-700 hover:text-emerald-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-700 hover:text-emerald-600 transition-colors">FAQ</a>
            <a href="#contacto" className="text-slate-700 hover:text-emerald-600 transition-colors">Contacto</a>
          </div>
          <Button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
            asChild
          >
            <a href="#early-access">Unete a la Beta</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
