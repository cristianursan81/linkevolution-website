import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Heart, Star, Zap } from 'lucide-react'

function ValuesSection() {
  const values = [
    {
      title: 'Integridad',
      description: 'Confianza y honestidad en cada relación.',
      icon: Shield,
      bg: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Pasión & Dedicación',
      description: 'Compromiso para agregar valor y ser la primera elección.',
      icon: Heart,
      bg: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Excelencia',
      description: 'Enfoque en procesos y excelencia para deleitar al cliente.',
      icon: Star,
      bg: 'from-teal-600 to-teal-700'
    },
    {
      title: 'Agilidad & Respuesta',
      description: 'Rapidez y flexibilidad para satisfacer necesidades cambiantes.',
      icon: Zap,
      bg: 'from-teal-500 to-cyan-600'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
            Nuestros Valores
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Lo que nos define</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ title, description, icon: Icon, bg }, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${bg} rounded-full flex items-center justify-center mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-slate-600">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
