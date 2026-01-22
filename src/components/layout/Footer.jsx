import { Button } from '@/components/ui/button.jsx'
import { Linkedin, Twitter } from 'lucide-react'
import logoImage from '@/assets/logo.svg'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Linkevolution Logo" className="w-8 h-8" loading="lazy" decoding="async" />
              <span className="text-xl font-bold">Linkevolution</span>
            </div>
            <p className="text-slate-400">
              Plataforma de Customer Operations con IA. WhatsApp + Voz + Email + CRM. Todo en uno.
            </p>
            <div className="flex space-x-3 mt-4">
              <Button
                size="sm"
                variant="outline"
                className="w-10 h-10 p-0 border-slate-600 hover:bg-slate-800"
                aria-label="Visitar perfil de LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="w-10 h-10 p-0 border-slate-600 hover:bg-slate-800"
                aria-label="Visitar perfil de Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#producto" className="hover:text-white transition-colors">Chatbot WhatsApp</a></li>
              <li><a href="#producto" className="hover:text-white transition-colors">Agente de Voz</a></li>
              <li><a href="#producto" className="hover:text-white transition-colors">Email Automation</a></li>
              <li><a href="#producto" className="hover:text-white transition-colors">CRM Gratuito</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Politica de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terminos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contacto</h4>
              <a href="mailto:contacto@linkevolution.eu" className="text-slate-400 hover:text-white transition-colors">
                contacto@linkevolution.eu
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Linkevolution. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
