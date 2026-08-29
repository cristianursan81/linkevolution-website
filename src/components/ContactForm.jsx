import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { SITE } from '@/lib/site.js'

const ENDPOINT = `https://formsubmit.co/ajax/${SITE.email}`

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('company_url')) return

    setStatus('loading')
    setError('')

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company') || '',
      message: data.get('message'),
      _subject: `Consulta Linkevolution — ${data.get('name')}`,
      _template: 'table',
      _captcha: 'false',
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('No se pudo enviar')
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('error')
      setError(
        `No se pudo enviar ahora. Escríbeme a ${SITE.email} o por WhatsApp.`,
      )
    }
  }

  if (status === 'ok') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-teal-600" />
        <p className="text-lg font-semibold text-slate-900">Mensaje enviado</p>
        <p className="text-slate-600">
          Te respondo en menos de 24 horas laborables.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="company_url" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Nombre
          <Input name="name" required placeholder="Tu nombre" className="mt-2 bg-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <Input
            name="email"
            type="email"
            required
            placeholder="tu@empresa.com"
            className="mt-2 bg-white"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700">
        Empresa (opcional)
        <Input name="company" placeholder="Nombre de tu empresa" className="mt-2 bg-white" />
      </label>
      <label className="block text-sm font-medium text-slate-700">
        ¿Qué quieres automatizar?
        <Textarea
          name="message"
          required
          rows={5}
          placeholder="Ej. pedidos por WhatsApp, recordatorios de citas, seguimiento de leads…"
          className="mt-2 bg-white"
        />
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Enviar mensaje
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-xs text-slate-500">
        Al enviar aceptas que use tus datos solo para responderte. No los cedo a terceros.
      </p>
    </form>
  )
}
