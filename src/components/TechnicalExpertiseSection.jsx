import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Layers,
  Cpu,
  Code,
  Database,
  Cloud,
  Smartphone,
  BrainCircuit
} from 'lucide-react'

function TechnicalExpertiseSection() {
  const expertise = [
    {
      title: 'ERP',
      description: 'SAP, Oracle, Workday, Salesforce',
      icon: Layers,
      bg: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Backend',
      description: 'Node.js, Laravel, PHP, .NET',
      icon: Cpu,
      bg: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Frontend',
      description: 'React.js, Angular, Vue.js, HTML5',
      icon: Code,
      bg: 'from-teal-600 to-teal-700'
    },
    {
      title: 'Data Analytics',
      description: 'Power BI, Tableau, Qlik Sense, Excel',
      icon: Database,
      bg: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Database',
      description: 'MySQL, PostgreSQL, MongoDB',
      icon: Database,
      bg: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Deployment',
      description: 'AWS, Azure, Docker, Google Cloud',
      icon: Cloud,
      bg: 'from-cyan-500 to-cyan-600'
    },
    {
      title: 'Mobile Apps',
      description: 'React Native, Android, iOS',
      icon: Smartphone,
      bg: 'from-teal-600 to-teal-700'
    },
    {
      title: 'Gen AI & ML',
      description: 'Model development, consulting, content creation',
      icon: BrainCircuit,
      bg: 'from-teal-500 to-cyan-600'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
            Experiencia Técnica
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Potenciamos tu negocio con
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}tecnologías avanzadas
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Amplio dominio en ERP, desarrollo backend y frontend, analítica, bases de datos, despliegue y apps móviles.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map(({ title, description, icon: Icon, bg }, idx) => (
            <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
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

export default TechnicalExpertiseSection
