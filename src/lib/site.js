export const SITE = {
  name: 'Linkevolution',
  url: 'https://linkevolution.eu',
  email: 'cristianursan@outlook.es',
  phoneDisplay: '+34 647 027 418',
  phoneHref: 'tel:+34647027418',
  whatsapp: '34647027418',
  city: 'Madrid, España',
  founder: 'Cristian Ursan',
  agentUrl: 'https://linkevolution-production.up.railway.app/agent/chat',
}

export const NAV = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#como', label: 'Cómo trabajo' },
  { href: '#sobre', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

export function whatsappUrl(text = 'Hola Cristian, quiero automatizar la atención de mi negocio con Linkevolution.') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
