import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Play, Bot, Zap, Clock, PiggyBank, Rocket } from 'lucide-react'

const metrics = [
  {
    icon: Bot,
    value: '80%',
    label: 'Consultas automatizadas',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100'
  },
  {
    icon: Zap,
    value: '<2 seg',
    label: 'Tiempo de respuesta',
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  {
    icon: PiggyBank,
    value: '€30K',
    label: 'Ahorrados al año',
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Disponible siempre',
    color: 'text-teal-600',
    bg: 'bg-teal-100'
  }
]

function HeroSection() {
  return (
    <section id="inicio" className="py-16 lg:py-24 px-6" aria-labelledby="hero-title">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 px-4 py-2 text-sm">
                <Rocket className="w-4 h-4 mr-2" />
                Beta Privada - Plazas Limitadas
              </Badge>
              <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Atiende 10x mas clientes
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}sin contratar mas gente
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Plataforma de Customer Operations con IA. WhatsApp + Voz + Email + CRM. Todo en uno.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-lg px-8 py-6"
                asChild
              >
                <a href="#early-access">
                  Empezar Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 hover:bg-slate-50 text-lg px-8 py-6"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white shadow-md border border-slate-100">
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${metric.bg} flex items-center justify-center`}>
                    <metric.icon className={`w-5 h-5 ${metric.color}`} aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                  <div className="text-xs text-slate-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-slate-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-slate-500 ml-4">Dashboard Linkevolution</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-emerald-50 rounded-lg p-3 text-center">
                    <div className="text-xl lg:text-2xl font-bold text-emerald-600">1,247</div>
                    <div className="text-xs text-slate-600">Conversaciones</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <div className="text-xl lg:text-2xl font-bold text-teal-600">98%</div>
                    <div className="text-xs text-slate-600">Resueltas</div>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-3 text-center">
                    <div className="text-xl lg:text-2xl font-bold text-cyan-600">1.8s</div>
                    <div className="text-xs text-slate-600">Respuesta</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 bg-slate-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">WA</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">WhatsApp Bot</div>
                      <div className="text-xs text-green-600">Activo - 847 chats hoy</div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">VOZ</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">Agente de Voz</div>
                      <div className="text-xs text-blue-600">Activo - 156 llamadas</div>
                    </div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-50 rounded-lg p-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">EM</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">Email Automation</div>
                      <div className="text-xs text-purple-600">Activo - 244 emails</div>
                    </div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
