import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Quote, Globe, Award } from 'lucide-react'

const companies = [
  { name: 'Tesla', logo: 'TESLA' },
  { name: 'StubHub', logo: 'STUBHUB' },
  { name: 'Tech Mahindra', logo: 'TECH MAHINDRA' },
  { name: 'KONE', logo: 'KONE' }
]

const certifications = [
  { name: 'AWS Partner', color: 'bg-orange-100 text-orange-700' },
  { name: 'Azure AI Engineer', color: 'bg-blue-100 text-blue-700' }
]

function SocialProofSection() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white" aria-labelledby="social-proof-title">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
            <Award className="w-4 h-4 mr-1" />
            Equipo Fundador
          </Badge>
          <h2 id="social-proof-title" className="text-3xl lg:text-4xl font-bold">
            Construido por expertos que escalaron
            <span className="text-emerald-400"> operaciones globales</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="w-5 h-5 text-teal-400" />
                <span className="text-slate-400 text-sm">Experiencia en empresas lideres</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/50 rounded-lg p-4 flex items-center justify-center"
                  >
                    <span className="text-lg font-bold text-slate-300 tracking-wider">
                      {company.logo}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div>
                  <div className="text-2xl font-bold text-white">12+ anos</div>
                  <div className="text-sm text-slate-400">Liderando equipos globales</div>
                </div>
                <div className="flex gap-2">
                  {['EMEA', 'LATAM', 'APAC'].map((region, index) => (
                    <Badge key={index} className="bg-slate-700 text-slate-300 border-slate-600">
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-600 to-teal-600 border-0">
            <CardContent className="p-8 flex flex-col h-full">
              <Quote className="w-10 h-10 text-white/30 mb-4" />
              <blockquote className="text-xl lg:text-2xl font-medium text-white mb-6 flex-1">
                "He reducido costos operativos un 35% en Tesla y StubHub. Ahora estas estrategias estan automatizadas en Linkevolution."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  CU
                </div>
                <div>
                  <div className="font-bold text-white">Cristian Ursan</div>
                  <div className="text-emerald-200 text-sm">Founder & Customer Operations Expert</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-slate-400 text-sm">Certificaciones:</span>
          {certifications.map((cert, index) => (
            <Badge key={index} className={`${cert.color} px-4 py-2`}>
              {cert.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
