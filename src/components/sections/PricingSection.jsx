import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Gratis',
    price: '0',
    description: 'Perfecto para probar la plataforma',
    features: [
      '100 conversaciones/mes',
      '1 canal (WhatsApp o Email)',
      'CRM basico (100 contactos)',
      '1 usuario',
      'Soporte comunidad'
    ],
    cta: 'Empezar Gratis',
    popular: false,
    ctaVariant: 'outline'
  },
  {
    name: 'Pro',
    price: '99',
    description: 'Para equipos en crecimiento',
    features: [
      'Conversaciones ilimitadas',
      'Todos los canales',
      'CRM completo',
      '5 usuarios',
      'Soporte prioritario',
      'Integraciones API',
      'Analytics avanzados'
    ],
    cta: 'Unirme a Beta',
    popular: true,
    ctaVariant: 'default'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Solucion a medida para grandes empresas',
    features: [
      'White label',
      'Integraciones custom',
      'SLA garantizado',
      'Onboarding dedicado',
      'Account manager',
      'SSO y seguridad avanzada',
      'Soporte 24/7 dedicado'
    ],
    cta: 'Contactar',
    popular: false,
    ctaVariant: 'outline'
  }
]

function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 bg-slate-50" aria-labelledby="pricing-title">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
            Precios
          </Badge>
          <h2 id="pricing-title" className="text-4xl lg:text-5xl font-bold text-slate-900">
            Planes que
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}crecen contigo
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empieza gratis y escala cuando lo necesites. Sin sorpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1">
                    Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                <CardDescription className="text-slate-600">{plan.description}</CardDescription>
                <div className="pt-4">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold text-slate-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-600">/mes</span>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600">
                      <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-emerald-500' : 'text-teal-500'}`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                      : ''
                  }`}
                  variant={plan.ctaVariant}
                  asChild
                >
                  <a href={plan.popular ? '#early-access' : '#contacto'}>
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
