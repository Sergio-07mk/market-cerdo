# Quick Start Guide - Market Cerdo & Market Res

## 🏃 5 minutos para empezar

### Paso 1: Configura el WhatsApp
Edita `src/data/brand.ts` línea 5-6:

```typescript
phone: '+57 YOUR_ACTUAL_NUMBER',
whatsapp: 'https://wa.me/57YOUR_ACTUAL_NUMBER', // Ej: 573001234567
```

### Paso 2: Actualiza Supabase URLs
Edita `.env`:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### Paso 3: Inicia desarrollo
```bash
npm run dev
# Abre http://localhost:5173
```

### Paso 4: (Opcional) Configura Database
Crea estas 2 tablas en Supabase:

**Tabla 1: contact_submissions**
```sql
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text NOT NULL,
  client_type text,
  mensaje text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

**Tabla 2: job_applications**
```sql
CREATE TABLE job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text NOT NULL,
  email text NOT NULL,
  cargo text NOT NULL,
  resume_url text,
  created_at timestamptz DEFAULT now()
);
```

### Paso 5: Build para producción
```bash
npm run build
# La carpeta "dist/" está lista para deploy
```

---

## 📍 Rutas Disponibles Inmediatamente

- `http://localhost:5173/` - Home
- `http://localhost:5173/catalogo` - Catálogo
- `http://localhost:5173/nosotros` - Quiénes somos
- `http://localhost:5173/recetas` - Recetas
- `http://localhost:5173/promociones` - Combos
- `http://localhost:5173/contacto` - Contacto
- `http://localhost:5173/trabaja-con-nosotros` - Empleos
- `http://localhost:5173/terminos-y-condiciones` - Legal

---

## 🎨 Cambia Colores de Marca

Edita `tailwind.config.js` líneas 8-13:

```javascript
colors: {
  brand: {
    red: '#E22324',      // ← Tu rojo
    gray: '#555757',     // ← Tu gris
    yellow: '#FFC627',   // ← Tu amarillo
  },
}
```

---

## 📝 Edita Productos

Abre `src/data/brand.ts` y modifica:
- `PRODUCTS_TRADITIONAL` - 11 productos
- `PRODUCTS_PREMIUM` - 8 productos

Cada producto necesita:
```typescript
{
  id: 'unique-id',
  name: 'Nombre',
  category: 'Magro' | 'Semimagro' | 'Con Hueso',
  description: 'Descripción',
  idealFor: 'Ideal para...',
  image: 'https://image-url.jpg'
}
```

---

## 🖼️ Reemplaza Logo

1. Nuevo logo en `public/logo.jpg`
2. Edita `src/components/Navbar.tsx` línea 28:
```tsx
<img src="/logo.jpg" alt="Logo" className="h-12 w-auto" />
```

---

## 🔗 Deployment Rápido

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
# Configura vite.config.ts: base: '/repo-name/'
npm run build
# Sube carpeta dist/ a gh-pages branch
```

---

## 🆘 Problemas Comunes

### ❌ WhatsApp no funciona
→ Verifica el formato: `https://wa.me/57XXXXXXXXXX` (sin +)

### ❌ Imágenes no cargan
→ Cambia URLs de Unsplash por tus propias imágenes en `src/data/brand.ts`

### ❌ Formularios no guardan
→ Verifica Supabase `.env` y RLS policies de tablas

### ❌ Build falla
→ Corre: `npm install` y luego `npm run build`

---

## 📊 Lo que Obtienes

✅ 8 páginas premium completamente funcionales
✅ 19 productos en catálogo filtrable
✅ 5 valores corporativos con animaciones
✅ 4 testimonios integrados
✅ 10 artículos de blog
✅ Timeline interactiva "De la Granja a tu Mesa"
✅ Formularios guardados en Supabase
✅ Integración WhatsApp para pedidos
✅ SEO optimizado para Google
✅ Diseño mobile-first responsive
✅ 60+ animaciones suaves
✅ Todo en TypeScript + React + Tailwind

---

## 📚 Documentación Completa

- **Guía de Configuración**: Ver `SETUP_GUIDE.md`
- **Resumen del Proyecto**: Ver `PROJECT_SUMMARY.md`
- **Código**: Revisa `src/` para entender la estructura

---

## 🎯 Siguientes Pasos

1. Configura WhatsApp
2. Prueba en `npm run dev`
3. Haz deploy a producción
4. Añade Analytics de Google
5. Monitorea performance
6. Actualiza contenido regularmente

---

**Listo para volar! 🚀**

*¿Preguntas? Revisa SETUP_GUIDE.md para detalles completos.*
