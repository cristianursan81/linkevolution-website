import { useState } from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { ArrowRight, Flame, Check, Shield, HeadphonesIcon } from 'lucide-react'

const CONTACT_EMAIL = 'contacto@linkevolution.eu'
const SPOTS_TAKEN = 35
const TOTAL_SPOTS = 50

const benefits = [
  { icon: Check, text: 'Sin tarjeta requerida' },
  { icon: Shield, text: 'Acceso prioritario' },
  { icon: HeadphonesIcon, text: 'Soporte dedicado' }
]

function EarlyAccessSection() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = 'Solicitud Beta Privada - Linkevolution'
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}

---
Solicitud de acceso a la Beta Privada de Linkevolution
    `.trim()

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(mailtoLink)

    alert('Gracias por tu interes. Se abrira tu cliente de email para enviar la solicitud.')
    setFormData({ email: '', name: '', company: '' })
  }

  const progressPercentage = (SPOTS_TAKEN / TOTAL_SPOTS) * 100

  return (
    <section id="early-access" className="py-20 px-6 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600" aria-labelledby="early-access-title">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-10">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
            <Flame className="w-5 h-5 mr-2 text-orange-300" />
            Unete a las primeras 50 empresas
          </Badge>

          <h2 id="early-access-title" className="text-3xl lg:text-5xl font-bold text-white">
            Beta privada limitada
          </h2>

          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Acceso en 2 semanas + Setup gratuito valorado en €500
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-white mb-2">
              <span>{SPOTS_TAKEN} de {TOTAL_SPOTS} plazas ocupadas</span>
              <span className="text-emerald-200">{TOTAL_SPOTS - SPOTS_TAKEN} restantes</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-orange-400 to-yellow-400 h-full rounded-full transition-all duration-500 relative"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="early-email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <Input
                id="early-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@empresa.com"
                required
                autoComplete="email"
                className="h-12"
              />
            </div>
            <div>
              <label htmlFor="early-name" className="block text-sm font-medium text-slate-700 mb-2">
                Nombre
              </label>
              <Input
                id="early-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre"
                required
                autoComplete="name"
                className="h-12"
              />
            </div>
            <div>
              <label htmlFor="early-company" className="block text-sm font-medium text-slate-700 mb-2">
                Empresa
              </label>
              <Input
                id="early-company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Tu empresa"
                required
                autoComplete="organization"
                className="h-12"
              />
            </div>
            <div className="flex items-end">
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-base font-semibold"
              >
                RESERVAR MI PLAZA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2 text-white">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <benefit.icon className="w-4 h-4" />
              </div>
              <span className="text-sm">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EarlyAccessSection
