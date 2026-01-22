import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Moon, UserCheck, Search, Package, Wrench, ArrowUpRight, ArrowRight, MessageSquare } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: UserCheck,
    title: 'Identifica al cliente',
    description: 'Reconoce automaticamente quien escribe',
    color: 'bg-emerald-500'
  },
  {
    number: '2',
    icon: Search,
    title: 'Consulta tu sistema',
    description: 'Accede a tu base de datos en tiempo real',
    color: 'bg-teal-500'
  },
  {
    number: '3',
    icon: Package,
    title: 'Responde con tracking',
    description: 'Envia informacion precisa del pedido',
    color: 'bg-cyan-500'
  },
  {
    number: '4',
    icon: Wrench,
    title: 'Ofrece resolver problemas',
    description: 'Propone soluciones proactivamente',
    color: 'bg-blue-500'
  },
  {
    number: '5',
    icon: ArrowUpRight,
    title: 'Escala si es necesario',
    description: 'Transfiere a humano solo cuando hace falta',
    color: 'bg-violet-500'
  }
]

function UseCaseSection() {
  return (
    <section id="caso-uso" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50" aria-labelledby="usecase-title">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
            <MessageSquare className="w-4 h-4 mr-1" />
            Caso de Uso
          </Badge>
          <h2 id="usecase-title" className="text-4xl lg:text-5xl font-bold text-slate-900">
            Linkevolution en
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              {" "}Accion
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Moon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-purple-400 text-sm font-medium">Imagina este escenario</div>
                  <div className="text-xl font-bold">Son las 3:00 AM</div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Un cliente en WhatsApp pregunta por su pedido. Necesita saber donde esta y cuando llega.
                </p>

                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">WA</span>
                    </div>
                    <div className="bg-slate-600 rounded-lg rounded-tl-none p-3 flex-1">
                      <p className="text-sm text-slate-200">
                        "Hola! Quiero saber donde esta mi pedido #4521. Deberia haber llegado ayer."
                      </p>
                      <span className="text-xs text-slate-400 mt-1 block">3:02 AM</span>
                    </div>
                  </div>
                </div>

                <div className="text-center py-4">
                  <span className="text-emerald-400 font-semibold">Tu chatbot automaticamente...</span>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-emerald-100">
                        "Hola Maria! Tu pedido #4521 esta en camino. Llega manana entre 9-11h.
                        Hubo un retraso por lluvia. Te aviso cuando salga a reparto?"
                      </p>
                      <span className="text-xs text-emerald-400 mt-1 block">3:02 AM - Respuesta automatica</span>
                    </div>
                  </div>
                </div>

                <p className="text-center text-slate-400 italic">
                  Todo mientras duermes. Sin turno nocturno.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-5 flex items-center space-x-4">
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-slate-400">PASO {step.number}</span>
                    </div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              className="w-full mt-6 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600"
              size="lg"
              asChild
            >
              <a href="#early-access">
                Quiero automatizar mi soporte
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UseCaseSection
