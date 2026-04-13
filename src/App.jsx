import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { import TechnicalExpertiseSection from '@/components/TechnicalExpertiseSection.jsx';
import EngagementModelsSection from '@/components/EngagementModelsSection.jsx';
import ValuesSection from '@/components/ValuesSection.jsx';
import
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Target, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Globe,
  Settings,
  TrendingUp,
  Workflow,
  ShoppingBag,
  Plus,
  Building,
  ChefHat,
  Clock,
  Shield,
  Heart,
  Star,
  Bot
} from 'lucide-react'
import './App.css'

// Importar imágenes
import logoImage from './assets/logo.png'
import heroImage from './assets/Maz6kAmnrXK3.jpg'
import digitalTransformImage from './assets/hoPDy8BaqQQf.jpg'
import automationImage from './assets/vzjaBhbOlt8x.jpg'
import processImage from './assets/FNWwq4MXMGDd.png'

function App() {
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
    console.log('Form submitted:', formData)
    // Aquí se manejaría el envío del formulario
    alert('Gracias por contactarnos. Te responderemos pronto.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="Linkevolution Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Linkevolution
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-700 hover:text-teal-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-slate-700 hover:text-teal-600 transition-colors">Servicios</a>
              <a href="#proyectos" className="text-slate-700 hover:text-teal-600 transition-colors">Proyectos</a>
              <a href="#equipo" className="text-slate-700 hover:text-teal-600 transition-colors">Equipo</a>
              <a href="#contacto" className="text-slate-700 hover:text-teal-600 transition-colors">Contacto</a>
            </div>
            <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
              Consulta Gratuita
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                  WhatsApp + IA + CRM
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Automatiza tu negocio.
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    {" "}Crece{" "}
                  </span>
                  sin contratar más.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  WhatsApp, email, voz y CRM — todo en una plataforma diseñada para PYMEs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200">
                  Empieza gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 transform hover:scale-105 transition-all duration-200">
                  Cuéntanos tu caso → te proponemos una solución en 24h
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">negocios automatizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">tasa de apertura en WhatsApp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">&lt; 2s</div>
                  <div className="text-sm text-slate-600">tiempo de respuesta medio</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-3xl transform rotate-3"></div>
              <img 
                src={heroImage} 
                alt="Transformación Digital" 
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases by Sector Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              Por Sectores
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Soluciones para tu
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}sector
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Automatizaciones específicas diseñadas para las necesidades únicas de cada industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Retail y eCommerce</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Responde pedidos, recupera carritos abandonados y envía notificaciones de envío por WhatsApp, automáticamente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Clínicas y Salud</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Confirma citas, envía recordatorios y gestiona bajas sin intervención manual.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Inmobiliarias</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Califica leads en WhatsApp, agenda visitas y mantén a tus clientes informados en tiempo real.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Hostelería y Restauración</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Gestiona reservas, responde consultas y lanza campañas de fidelización por WhatsApp.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Linkevolution Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              Por qué Linkevolution
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              La plataforma de automatización
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}más completa{" "}
              </span>
              para PYMEs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">IA que trabaja 24/7</h3>
              <p className="text-slate-600">Tu agente nunca duerme, no descansa y responde en segundos.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sin código, sin complicaciones</h3>
              <p className="text-slate-600">Configura automatizaciones en minutos, no en semanas.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Pensado para PYMEs</h3>
              <p className="text-slate-600">Precios accesibles, soporte real y onboarding guiado.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Ético y seguro</h3>
              <p className="text-slate-600">Cumplimiento GDPR, datos en Europa, sin venta a terceros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              Nuestros Servicios
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Agentes de IA que
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}automatizzan tu negocio
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ofrecemos agentes de IA especializados para automatizar completamente tu negocio y generar más leads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Agente de IA WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Tu agente de WhatsApp responde, califica y convierte — incluso mientras duermes.
                  
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Respuestas instantáneas 24/7
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Calificación automática de leads
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Integración con tu CRM
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Automatización Email & Voz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Campañas de email inteligentes y llamadas automatizadas con IA que suenan completamente humanas.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Secuencias de email personalizadas
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Llamadas automatizadas con IA
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Seguimiento y métricas en tiempo real
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">CRM Inteligente Gratuito</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Un CRM que aprende de cada conversación y te sugiere el siguiente paso.
                  
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Gestión inteligente de contactos
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sugerencias automáticas de acciones
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pipeline visual de ventas
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              Testimonios
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Lo que dicen nuestros
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}clientes
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4 italic">
                  "Desde que implementamos Linkevolution, nuestras ventas han aumentado un 40%. Los clientes aman la atención inmediata por WhatsApp."
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">María G.</div>
                  <div className="text-sm text-slate-600">Directora, Clínica Vitalmed</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4 italic">
                  "La automatización de WhatsApp nos ha permitido reducir el tiempo de respuesta de horas a segundos. Increíble."
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">Carlos R.</div>
                  <div className="text-sm text-slate-600">CEO, Distribuidora Norte</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4 italic">
                  "El CRM gratuito es mejor que muchas soluciones de pago. La integración con WhatsApp es perfecta."
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">Ana L.</div>
                  <div className="text-sm text-slate-600">Gerente, Inmobiliaria Premium</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200">
              Casos de Éxito
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Proyectos que
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}inspiran
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos de transformación digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={digitalTransformImage} 
                  alt="Proyecto de Transformación Digital" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-teal-600 text-white">
                  Transformación Digital
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Modernización de Procesos Empresariales</CardTitle>
                <CardDescription>
                  Implementación completa de soluciones digitales para una empresa manufacturera, 
                  resultando en un 40% de mejora en eficiencia operativa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Duración:</span>
                    <span className="font-medium">6 meses</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Sector:</span>
                    <span className="font-medium">Manufactura</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Mejora:</span>
                    <span className="font-medium text-green-600">+40% eficiencia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={automationImage} 
                  alt="Proyecto de Automatización" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">
                  Automatización
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Automatización de Procesos Financieros</CardTitle>
                <CardDescription>
                  Automatización completa del departamento financiero de una empresa de servicios, 
                  reduciendo el tiempo de procesamiento en un 60%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Duración:</span>
                    <span className="font-medium">4 meses</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Sector:</span>
                    <span className="font-medium">Servicios</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Reducción:</span>
                    <span className="font-medium text-green-600">-60% tiempo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={processImage} 
                  alt="Proyecto de Gestión de Flujos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-teal-700 text-white">
                  Gestión de Flujos
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Optimización de Flujos de Trabajo</CardTitle>
                <CardDescription>
                  Rediseño completo de los flujos de trabajo para una empresa de logística, 
                  mejorando la coordinación entre equipos en un 50%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Duración:</span>
                    <span className="font-medium">3 meses</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Sector:</span>
                    <span className="font-medium">Logística</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Mejora:</span>
                    <span className="font-medium text-green-600">+50% coordinación</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">¿Tienes un proyecto en mente?</CardTitle>
                <CardDescription>
                  Cada proyecto es único y adaptamos nuestras soluciones a las necesidades específicas de tu empresa.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                  Consulta tu Proyecto
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conversational CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-xl opacity-90">
              Cuéntanos tu negocio y te diseñamos una automatización a medida en 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-slate-100">
                <Users className="mr-2 w-5 h-5" />
                Hablar con un experto
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('tel:+34647027418')}
              >
                <Phone className="mr-2 w-5 h-5" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              Nuestro Equipo
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Expertos en
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}transformación
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un equipo multidisciplinario de profesionales especializados en tecnología y procesos empresariales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Ana García</CardTitle>
                  <CardDescription className="text-base">Directora de Transformación Digital</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Más de 10 años de experiencia liderando proyectos de transformación digital en empresas Fortune 500.
                </p>
                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Carlos Rodríguez</CardTitle>
                  <CardDescription className="text-base">Especialista en Automatización</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Experto en RPA y automatización de procesos con certificaciones en las principales plataformas del mercado.
                </p>
                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">María López</CardTitle>
                  <CardDescription className="text-base">Consultora de Procesos</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Especialista en análisis y optimización de procesos empresariales con enfoque en metodologías ágiles.
                </p>
                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-r from-teal-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
                    <div className="text-slate-600">Años de Experiencia Combinada</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                    <div className="text-slate-600">Proyectos Completados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
                    <div className="text-slate-600">Satisfacción del Cliente</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
              Contacto
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Comencemos tu
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}transformación
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Estamos listos para ayudarte a llevar tu empresa al siguiente nivel. Contáctanos para una consulta gratuita.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nombre completo
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Tu nombre"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="cristianursan@outlook.es"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Empresa
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Mensaje
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos sobre tu proyecto..."
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Email</div>
                        <div className="text-slate-600">cristianursan@outlook.es</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Teléfono</div>
                        <div className="text-slate-600">+34 647 027 418</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Oficina</div>
                        <div className="text-slate-600">Madrid, España</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">WhatsApp</div>
                        <div className="text-slate-600">+34 647 027 418</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu empresa?</h3>
                  <p className="mb-6 opacity-90">
                    Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte a alcanzar tus objetivos.
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

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src={logoImage} alt="Linkevolution Logo" className="w-8 h-8" />
                <span className="text-xl font-bold">Linkevolution</span>
              </div>
              <p className="text-slate-400">
                Transformamos empresas a través de la innovación digital y la automatización inteligente.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Transformación Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automatización</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gestión de Flujos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-400">
                <li>cristianursan@outlook.es</li>
                <li>+34 647 027 418</li>
                <li>Madrid, España</li>
                <li>WhatsApp: +34 647 027 418</li>
              </ul>
              <div className="flex space-x-3 mt-4">
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-slate-600 hover:bg-slate-800">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-slate-600 hover:bg-slate-800">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Linkevolution. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

