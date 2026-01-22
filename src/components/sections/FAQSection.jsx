import { Badge } from '@/components/ui/badge.jsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'

const faqs = [
  {
    question: 'Que tan dificil es la integracion?',
    answer: 'La integracion es muy sencilla. Para WhatsApp, solo necesitas conectar tu numero de WhatsApp Business. Para email, configuramos los reenvios automaticos. Para voz, te proporcionamos un numero virtual. Todo el proceso toma menos de 30 minutos con nuestro equipo de soporte.'
  },
  {
    question: 'Funciona en mi idioma?',
    answer: 'Si, Linkevolution soporta mas de 50 idiomas incluyendo espanol, ingles, portugues, frances, aleman, italiano y muchos mas. La IA detecta automaticamente el idioma del cliente y responde en el mismo idioma.'
  },
  {
    question: 'Que pasa con los datos sensibles?',
    answer: 'La seguridad es nuestra prioridad. Todos los datos estan encriptados en transito y en reposo. Cumplimos con GDPR y tenemos certificaciones SOC 2. Ademas, puedes configurar reglas para que ciertos tipos de datos nunca se almacenen.'
  },
  {
    question: 'Puedo cancelar cuando quiera?',
    answer: 'Absolutamente. No hay permanencia minima ni penalizaciones por cancelar. Puedes cancelar tu suscripcion en cualquier momento desde tu panel de control y seguiras teniendo acceso hasta el final del periodo facturado.'
  },
  {
    question: 'Hay contrato de permanencia?',
    answer: 'No, no hay contrato de permanencia. Todos nuestros planes son mes a mes. Para empresas que prefieren compromisos anuales, ofrecemos descuentos significativos, pero nunca es obligatorio.'
  }
]

function FAQSection() {
  return (
    <section id="faq" className="py-20 px-6" aria-labelledby="faq-title">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200">
            FAQ
          </Badge>
          <h2 id="faq-title" className="text-4xl lg:text-5xl font-bold text-slate-900">
            Preguntas
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}frecuentes
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Todo lo que necesitas saber antes de empezar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md border-0 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQSection
