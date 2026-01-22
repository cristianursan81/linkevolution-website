import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { ArrowRight, Mail, Phone, MapPin, Zap } from 'lucide-react'

const CONTACT_EMAIL = 'contacto@linkevolution.eu'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = 'Nueva consulta desde Linkevolution Website'
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Mensaje: ${formData.message}

---
Enviado desde el formulario de contacto de Linkevolution
    `.trim()

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(mailtoLink)

    alert('Gracias por contactarnos. Se abrira tu cliente de email para enviar el mensaje.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50" aria-labelledby="contact-title">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
            Contacto
          </Badge>
          <h2 id="contact-title" className="text-4xl lg:text-5xl font-bold text-slate-900">
            Comencemos tu
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}transformacion
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte a llevar tu empresa al siguiente nivel. Contactanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo
                      </label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-2">
                      Empresa
                    </label>
                    <Input
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa"
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuentanos sobre tu proyecto..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  >
                    Enviar Mensaje
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Informacion de Contacto</h3>
                <address className="space-y-6 not-italic">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-teal-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-600 hover:text-teal-600 transition-colors">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-cyan-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Telefono</div>
                      <a href="tel:+34900123456" className="text-slate-600 hover:text-teal-600 transition-colors">
                        +34 900 123 456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">Oficina</div>
                      <div className="text-slate-600">Madrid, Espana</div>
                    </div>
                  </div>
                </address>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Listo para transformar tu empresa?</h3>
                <p className="mb-6 opacity-90">
                  Agenda una consulta gratuita de 30 minutos y descubre como podemos ayudarte a alcanzar tus objetivos.
                </p>
                <Button variant="secondary" className="bg-white text-teal-600 hover:bg-slate-100">
                  Agendar Consulta Gratuita
                  <Zap className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
