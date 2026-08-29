# Linkevolution

Sitio público de [linkevolution.eu](https://linkevolution.eu): automatización de WhatsApp, email y CRM para PYMEs en España.

Stack: Vite 6 + React 18 + Tailwind 4. Se publica en GitHub Pages con dominio propio.

## Desarrollo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Despliegue

Un único workflow (`.github/workflows/deploy.yml`) construye `dist/` y lo publica en GitHub Pages en cada push a `main`.

El `CNAME` vive en `public/` para que Vite lo copie al artefacto. No commitees `dist/` ni `assets/` generados.

GitHub Pages ya tiene el dominio `linkevolution.eu`. Lo que falta es el DNS en Namecheap.

## DNS (Namecheap → Domain List → linkevolution.eu → Advanced DNS)

Borra registros A / URL Redirect / Parking del `@` si apuntan a otra cosa. **No toques** `app` (Railway).

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `cristianursan81.github.io.` |
| CNAME | `dashboard` | `cname.vercel-dns.com.` |

Cuando GitHub marque el dominio como verificado: Settings → Pages → **Enforce HTTPS**.

Mapa de hosts:

| Host | Destino |
|---|---|
| `linkevolution.eu` / `www` | sitio (GitHub Pages) |
| `dashboard.linkevolution.eu` | inbox (Vercel) |
| `app.linkevolution.eu` | API (Railway) — ya existe, no cambiar |

## Formulario

El formulario usa [FormSubmit](https://formsubmit.co) hacia `cristianursan@outlook.es`. La **primera** petición envía un correo de confirmación: ábrelo o los leads no llegan. WhatsApp (`+34 647 027 418`) es el canal de respaldo y no depende de eso.

## Contacto

- Email: cristianursan@outlook.es
- Tel / WhatsApp: +34 647 027 418
- Madrid, España
