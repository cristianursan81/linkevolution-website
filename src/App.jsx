import {
  ArrowRight,
  Bot,
  Building,
  CheckCircle,
  ChefHat,
  Clock,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Shield,
  ShoppingBag,
  Users,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import ContactForm from '@/components/ContactForm.jsx'
import ChatWidget from '@/components/ChatWidget.jsx'
import logo from '@/assets/logo.png'
import heroImage from '@/assets/hero.jpg'
import { SITE, scrollToId, whatsappUrl } from '@/lib/site.js'

const sectors = [
  {
    icon: ShoppingBag,
    title: 'Retail y eCommerce',
    text: 'Pedidos, carritos abandonados y avisos de envío por WhatsApp, sin copiar y pegar.',
  },
  {
    icon: Plus,
    title: 'Clínicas y salud',
    text: 'Confirmación de citas, recordatorios y bajas. Menos huecos vacíos en la agenda.',
  },
  {
    icon: Building,
    title: 'Inmobiliarias',
    text: 'Califica leads en WhatsApp, agenda visitas y mantiene informado al cliente.',
  },
  {
    icon: ChefHat,
    title: 'Hostelería',
    text: 'Reservas, consultas y campañas de fidelización sin saturar al equipo de sala.',
  },
]

const pillars = [
  { icon: Clock, title: 'Respuesta inmediata', text: 'El agente atiende fuera de horario y en segundos, no en horas.' },
  { icon: Zap, title: 'Sin código', text: 'Configuramos el flujo por ti. Tú apruebas, no programas.' },
  { icon: Heart, title: 'Hecho para PYMEs', text: 'Precio cerrado, onboarding guiado y una persona al otro lado.' },
  { icon: Shield, title: 'Datos en serio', text: 'Solo lo necesario para atender a tus clientes. Sin venta a terceros.' },
]

const services = [
  {
    icon: Bot,
    title: 'Agente de WhatsApp',
    text: 'Responde, califica y deriva a un humano cuando hace falta.',
    points: ['Atención 24/7', 'Calificación de leads', 'Handoff a tu equipo'],
  },
  {
    icon: Mail,
    title: 'Email y voz',
    text: 'Secuencias de email y llamadas automatizadas con seguimiento.',
    points: ['Campañas con plantillas', 'Recordatorios de cita', 'Métricas de apertura y respuesta'],
  },
  {
    icon: Users,
    title: 'CRM ligero',
    text: 'Un tablero de contactos y pipeline, conectado a WhatsApp.',
    points: ['Contactos unificados', 'Siguiente acción visible', 'Sin licencia por asiento abusiva'],
  },
]

const steps = [
  { n: '01', title: 'Cuéntame el caso', text: 'Un mensaje o 20 minutos de llamada. Te devuelvo una propuesta en 24 h.' },
  { n: '02', title: 'Montamos el flujo', text: 'WhatsApp, email o CRM. Lo dejamos funcionando con tus textos y horarios.' },
  { n: '03', title: 'Mides y ajustas', text: 'Revisamos respuestas, citas o ventas. Iteramos. Sin permanencia opaca.' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Header />

      <main>
        <section id="inicio" className="px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="space-y-7">
              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">WhatsApp · Email · CRM</Badge>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Automatiza tu negocio.{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Crece
                </span>{' '}
                sin contratar más.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                Diseño e implemento automatizaciones de atención al cliente para PYMEs en España.
                Tú sigues vendiendo; el agente responde, califica y agenda.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  onClick={() => scrollToId('contacto')}
                >
                  Cuéntame tu caso
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <ul className="grid grid-cols-1 gap-3 pt-2 text-sm text-slate-600 sm:grid-cols-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  Propuesta en 24 h
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  Sin código por tu parte
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  Soporte desde Madrid
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-r from-teal-600/20 to-cyan-600/20" />
              <img
                src={heroImage}
                alt="Equipo revisando un panel de atención al cliente"
                className="relative w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-50 to-teal-50 px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-3 text-center">
              <Badge className="bg-teal-100 text-teal-800">Por sector</Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Flujos pensados para tu{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">sector</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Ejemplos de lo que se puede automatizar. No son casos inventados de clientes: son
                los problemas que resuelvo.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {sectors.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="border-0 shadow-lg">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{text}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-3 text-center">
              <Badge className="bg-teal-100 text-teal-800">Por qué Linkevolution</Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Automatización a medida, no un chatbot genérico
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="space-y-3 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-600">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <p className="text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-3 text-center">
              <Badge className="bg-teal-100 text-teal-800">Servicios</Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Agentes de IA que{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  automatizan tu negocio
                </span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map(({ icon: Icon, title, text, points }) => (
                <Card key={title} className="border-0 shadow-lg">
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{text}</CardDescription>
                    <ul className="mt-4 space-y-2">
                      {points.map((p) => (
                        <li key={p} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="como" className="bg-gradient-to-br from-slate-50 to-teal-50 px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-3 text-center">
              <Badge className="bg-cyan-100 text-cyan-800">Cómo trabajo</Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Tres pasos, sin teatro</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <Card key={s.n} className="border-0 shadow-lg">
                  <CardHeader>
                    <p className="text-sm font-bold tracking-widest text-teal-600">{s.n}</p>
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{s.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button
                className="bg-gradient-to-r from-teal-600 to-cyan-600"
                onClick={() => scrollToId('contacto')}
              >
                Pedir propuesta
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-16 text-white">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">¿No sabes por dónde empezar?</h2>
            <p className="text-lg text-white/90">
              Cuéntame cómo atiendes hoy. En 24 horas te digo qué se puede automatizar y qué no merece la pena.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" className="bg-white text-teal-700 hover:bg-slate-100" asChild>
                <a href={whatsappUrl()}>
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <a href={SITE.phoneHref}>
                  <Phone className="h-5 w-5" />
                  Llamar
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-white px-5 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <Badge className="bg-teal-100 text-teal-800">Sobre mí</Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {SITE.founder}, {SITE.city}
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                Impulso {SITE.name} yo. Diseño e implemento automatizaciones de atención al cliente
                para PYMEs: WhatsApp, email, voz y un CRM ligero. Sin equipo fantasma ni cifras de
                «500 empresas automatizadas».
              </p>
              <p className="leading-relaxed text-slate-600">
                Si tu caso encaja, te lo digo. Si no, también. El objetivo es que dejes de perder
                leads por responder tarde, no venderte un software que no vas a usar.
              </p>
            </div>
            <Card className="border-0 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg">
              <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                <img src={logo} alt="Linkevolution" className="h-20 w-20 object-contain" />
                <div>
                  <p className="text-xl font-bold text-slate-900">{SITE.founder}</p>
                  <p className="text-slate-600">Fundador · {SITE.name}</p>
                </div>
                <Button variant="outline" onClick={() => scrollToId('contacto')}>
                  Hablar
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacto" className="bg-gradient-to-br from-slate-50 to-teal-50 px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 space-y-3 text-center">
              <Badge className="bg-teal-100 text-teal-800">Contacto</Badge>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Cuéntame tu caso. Propuesta en 24 h.
              </h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="space-y-6 p-8">
                    <h3 className="text-2xl font-bold text-slate-900">Directo</h3>
                    <a href={`mailto:${SITE.email}`} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                        <Mail className="h-5 w-5 text-teal-700" />
                      </span>
                      <span>
                        <span className="block font-medium text-slate-900">Email</span>
                        <span className="text-slate-600">{SITE.email}</span>
                      </span>
                    </a>
                    <a href={SITE.phoneHref} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                        <Phone className="h-5 w-5 text-cyan-700" />
                      </span>
                      <span>
                        <span className="block font-medium text-slate-900">Teléfono</span>
                        <span className="text-slate-600">{SITE.phoneDisplay}</span>
                      </span>
                    </a>
                    <a href={whatsappUrl()} className="flex items-start gap-4" target="_blank" rel="noreferrer">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                        <MessageCircle className="h-5 w-5 text-green-700" />
                      </span>
                      <span>
                        <span className="block font-medium text-slate-900">WhatsApp</span>
                        <span className="text-slate-600">{SITE.phoneDisplay}</span>
                      </span>
                    </a>
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                        <MapPin className="h-5 w-5 text-teal-700" />
                      </span>
                      <span>
                        <span className="block font-medium text-slate-900">Ubicación</span>
                        <span className="text-slate-600">{SITE.city}</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="mb-2 text-2xl font-bold">Consulta de 30 minutos</h3>
                    <p className="mb-6 text-white/90">
                      Sin compromiso. Revisamos tu canal de atención y te digo qué automatizaría primero.
                    </p>
                    <Button variant="secondary" className="bg-white text-teal-700 hover:bg-slate-100" asChild>
                      <a href={whatsappUrl('Hola Cristian, quiero agendar una consulta de 30 minutos.')}>
                        Agendar por WhatsApp
                        <Zap className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="privacidad" className="bg-white px-5 py-12">
          <div className="mx-auto max-w-3xl space-y-3 text-sm text-slate-600">
            <h2 className="text-lg font-semibold text-slate-900">Privacidad</h2>
            <p>
              El responsable es {SITE.founder} ({SITE.email}), {SITE.city}. Uso el nombre, email y
              mensaje que envías solo para responderte. Base jurídica: tu solicitud (art. 6.1.b RGPD).
              Conservación: el tiempo de la conversación comercial y, si no hay relación, hasta 12 meses.
              Puedes pedir acceso, rectificación o supresión escribiendo al mismo email. No hay cesión
              a terceros salvo el envío del formulario (FormSubmit) para entregarme el mensaje.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
