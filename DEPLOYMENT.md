# JurisAI Website — Guía de Deployment

## Arquitectura

```
jurisai.do (Vercel/Railway)     →  Next.js Website (Landing + Auth + Dashboard)
    ↕ API calls
api.jurisai.do (Railway)        →  FastAPI Backend (tu app existente)
```

## Opción 1: Deploy en Vercel (Recomendado para Frontend)

### 1. Subir a GitHub
```bash
cd jurisai-website
git init
git add .
git commit -m "Initial commit: JurisAI website"
git remote add origin https://github.com/tu-usuario/jurisai-website.git
git push -u origin main
```

### 2. Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com) y crea una cuenta (login con GitHub)
2. Click "New Project" → Importa tu repositorio `jurisai-website`
3. Framework preset: **Next.js** (auto-detectado)
4. Click "Deploy"

### 3. Configurar Dominio jurisai.do
En Vercel Dashboard → tu proyecto → Settings → Domains:
1. Agrega `jurisai.do`
2. Agrega `www.jurisai.do`
3. Agrega `jurisai.com.do` (si quieres redirect)

En tu registrador de dominios (donde compraste jurisai.do), configura DNS:
```
Tipo    Nombre    Valor
A       @         76.76.21.21
CNAME   www       cname.vercel-dns.com
```

### 4. Variables de Entorno
En Vercel Dashboard → Settings → Environment Variables, agrega:
```
NEXT_PUBLIC_API_URL=https://api.jurisai.do
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxx
STRIPE_SECRET_KEY=sk_live_xxxx
```

---

## Opción 2: Deploy en Railway (Todo en Uno)

Como ya tienes Railway, puedes hospedar tanto el frontend como el backend ahí:

### 1. Crear servicio para el Website
```bash
# En el root del proyecto
railway link  # conecta al proyecto existente
railway up    # deploy
```

### 2. O via GitHub
1. En Railway Dashboard → New Service → GitHub Repo
2. Selecciona `jurisai-website`
3. Railway detecta Next.js automáticamente
4. Agrega Custom Domain: `jurisai.do`

### 3. Configurar DNS para Railway
```
Tipo    Nombre    Valor
CNAME   @         [tu-servicio].up.railway.app
CNAME   www       [tu-servicio].up.railway.app
```

---

## Integración con FastAPI Backend

### Configurar CORS en FastAPI
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://jurisai.do",
        "https://www.jurisai.do",
        "http://localhost:3000",  # dev
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### API Routes en Next.js (proxy opcional)
Puedes crear API routes en Next.js que hagan proxy al backend FastAPI:

```typescript
// src/app/api/auth/login/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return Response.json(await res.json());
}
```

---

## Integración de Stripe

### 1. Instalar dependencias
```bash
npm install stripe @stripe/stripe-js
```

### 2. Crear endpoint de checkout
```typescript
// src/app/api/stripe/checkout/route.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { priceId } = await request.json();

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
  });

  return Response.json({ url: session.url });
}
```

### 3. Crear productos en Stripe Dashboard
- Starter: $99/mes, $948/año
- Professional: $299/mes, $2,868/año
- Enterprise: facturación manual

---

## Próximos Pasos

1. **Autenticación**: Integrar NextAuth.js o tu auth de FastAPI
2. **Stripe**: Crear productos y conectar Checkout
3. **Webapp**: Migrar componentes React del Vite app al dashboard
4. **Analytics**: Agregar Plausible o PostHog (privacy-first)
5. **SEO**: Agregar sitemap.xml y robots.txt
6. **Email**: Integrar Resend o SendGrid para formulario de contacto
7. **CardNET/AZUL**: Fase 2 — integrar procesadores locales DOP

---

## Desarrollo Local

```bash
npm install
npm run dev
# Abre http://localhost:3000
```
