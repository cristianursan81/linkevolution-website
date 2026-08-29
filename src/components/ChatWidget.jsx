import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import logo from '@/assets/logo.png'
import { SITE } from '@/lib/site.js'

const STORAGE_VISITOR = 'le_visitor'
const STORAGE_CONV = 'le_conversation'

function visitorId() {
  let id = localStorage.getItem(STORAGE_VISITOR)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(STORAGE_VISITOR, id)
  }
  return id
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: `Hola, soy el asistente de ${SITE.name}. Pregúntame por WhatsApp, precios o cómo empezamos. Si quieres a ${SITE.founder}, te paso.`,
    },
  ])
  const bottom = useRef(null)

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  async function send(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text || busy) return
    setInput('')
    setMessages((m) => [...m, { role: 'user', text }])
    setBusy(true)
    try {
      const res = await fetch(SITE.agentUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitor_id: visitorId(),
          conversation_id: localStorage.getItem(STORAGE_CONV) || undefined,
          body: text,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.detail || 'No he podido enviar el mensaje')
      }
      if (data.conversation_id) {
        localStorage.setItem(STORAGE_CONV, data.conversation_id)
      }
      setMessages((m) => [...m, { role: 'assistant', text: data.reply }])
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          text: `Ahora mismo el chat no responde. Escríbeme por WhatsApp (${SITE.phoneDisplay}) o ${SITE.email}.`,
        },
      ])
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[min(28rem,70vh)] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-3 text-white">
            <img src={logo} alt="" className="h-8 w-8" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{SITE.name}</p>
              <p className="text-xs text-slate-300">Asistente · suele responder al momento</p>
            </div>
            <button type="button" className="rounded-md p-1 hover:bg-white/10" onClick={() => setOpen(false)} aria-label="Cerrar chat">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto bg-slate-50 p-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user' ? 'bg-teal-600 text-white' : 'bg-white text-slate-800 shadow-sm'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {busy && <p className="text-xs text-slate-400">Escribiendo…</p>}
            <div ref={bottom} />
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-slate-200 p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta…"
              className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
              maxLength={2000}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-xl bg-teal-600 p-2 text-white disabled:opacity-40"
              aria-label="Enviar"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700"
        aria-label={open ? 'Cerrar chat' : 'Abrir chat'}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
