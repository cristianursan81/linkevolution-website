import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MessageSquare, Phone, Mail, Target, Users, Check } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Chatbot WhatsApp',
    description: 'Responde automaticamente a tus clientes en WhatsApp con IA conversacional avanzada.',
    gradient: 'from-green-500 to-emerald-500',
    bgLight: 'bg-green-50',
    bullets: [
      'Respuestas instantaneas 24/7',
      'Integracion con tu catalogo',
      'Escalado automatico a humanos'
    ]
  },
  {
    icon: Phone,
    title: 'Agente de Voz',
    description: 'Un asistente de voz con IA que atiende llamadas y resuelve consultas en tiempo real.',
    gradient: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    bullets: [
      'Voz natural y fluida',
      'Multiidioma automatico',
      'Transcripcion en tiempo real'
    ]
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Automatiza respuestas a emails de soporte con IA que entiende el contexto.',
    gradient: 'from-purple-500 to-violet-500',
    bgLight: 'bg-purple-50',
    bullets: [
      'Clasificacion automatica',
      'Respuestas personalizadas',
      'Seguimiento inteligente'
    ]
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Captura y cualifica leads automaticamente desde todos tus canales de comunicacion.',
    gradient: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    bullets: [
      'Scoring automatico de leads',
      'Nurturing personalizado',
      'Integracion con tu CRM'
    ]
  },
  {
    icon: Users,
    title: 'CRM Gratuito',
    description: 'Gestiona todos tus contactos y conversaciones desde un unico lugar, sin coste adicional.',
    gradient: 'from-teal-500 to-cyan-500',
    bgLight: 'bg-teal-50',
    bullets: [
      'Vista unificada 360',
      'Historial de interacciones',
      'Etiquetas y segmentacion'
    ]
  }
]

function FeaturesSection() {
  return (
    <section id="producto" className="py-20 px-6" aria-labelledby="features-title">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
            Producto
          </Badge>
          <h2 id="features-title" className="text-4xl lg:text-5xl font-bold text-slate-900">
            Todo lo que necesitas para
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}escalar tu soporte
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Una plataforma completa de Customer Operations con IA que unifica todos tus canales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center text-sm text-slate-600">
                      <Check className={`w-4 h-4 mr-2 text-${feature.gradient.split('-')[1]}-500`} aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
