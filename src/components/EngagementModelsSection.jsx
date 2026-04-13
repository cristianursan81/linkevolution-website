import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Clock, Users, Share } from 'lucide-react'

function EngagementModelsSection() {
  const models = [
    {
      title: 'Tiempo & Material',
      description: 'Facturación flexible basada en el tiempo y recursos consumidos.',
      icon: Clock,
      bg: 'from-teal-500 to-teal-600'
    },
    {
      title: 'ODC Nombrado',
      description: 'Centros de desarrollo dedicados para proyectos a largo plazo.',
      icon: Users,
      bg: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Servicios Compartidos',
      description: 'Enfoque de equipo compartido para reducir costes manteniendo la calidad.',
      icon: Share,
      bg: 'from-teal-600 to-teal-700'
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
            Modelos de Contratación
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Cómo Colaboramos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map(({ title, description, icon: Icon, bg }, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg text-center">
              <CardHeader className="space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${bg} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
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

export default EngagementModelsSection
