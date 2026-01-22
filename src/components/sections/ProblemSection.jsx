import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const painPoints = [
  {
    emoji: '😰',
    title: 'Tiempo perdido en repeticiones',
    description: 'Queries repetitivas consumen el 60% del tiempo de tu equipo. Las mismas preguntas, una y otra vez.',
    stat: '60%',
    statLabel: 'tiempo perdido'
  },
  {
    emoji: '🌙',
    title: 'Imposible estar siempre disponible',
    description: 'No puedes estar disponible 24/7 sin costos prohibitivos. Pierdes clientes fuera de horario.',
    stat: '40%',
    statLabel: 'consultas nocturnas'
  },
  {
    emoji: '💸',
    title: 'Costes de personal disparados',
    description: 'Cada contratacion cuesta €30K+ al ano mas overhead. Escalar es insostenible.',
    stat: '€30K+',
    statLabel: 'por empleado/ano'
  }
]

function ProblemSection() {
  return (
    <section id="problema" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="problem-title">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
            El Problema
          </Badge>
          <h2 id="problem-title" className="text-4xl lg:text-5xl font-bold text-slate-900">
            Tu equipo de soporte esta
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {" "}saturado?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 border-b border-red-100">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{point.emoji}</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{point.stat}</div>
                      <div className="text-xs text-slate-500">{point.statLabel}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-600 text-sm">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <Badge className="bg-white/20 text-white border-0">La Solucion</Badge>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Linkevolution automatiza el 80% de consultas rutinarias
                </h3>
                <p className="text-emerald-100 mb-6">
                  Con IA conversacional avanzada que entiende contexto, resuelve problemas y escala solo cuando es necesario.
                </p>
                <Button
                  className="bg-white text-emerald-600 hover:bg-emerald-50"
                  asChild
                >
                  <a href="#producto">
                    Ver como funciona
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-white/10 p-8 lg:p-12 flex items-center">
                <div className="grid grid-cols-3 gap-6 w-full">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold">-60%</div>
                    <div className="text-sm text-emerald-100">Carga de trabajo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold">24/7</div>
                    <div className="text-sm text-emerald-100">Disponibilidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold">€30K</div>
                    <div className="text-sm text-emerald-100">Ahorro anual</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ProblemSection
