# Market Cerdo & Market Res - Setup & Configuration Guide

## Project Overview

This is a premium web application for **Market Cerdo & Market Res**, a high-end meat producer in Bello, Antioquia, Colombia. The site showcases products, brand story, and facilitates customer contact through WhatsApp.

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Brand Colors
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Database**: Supabase
- **SEO**: React Helmet Async
- **Icons**: Lucide React

---

## Configuration Steps

### 1. WhatsApp Business Setup

**Update the WhatsApp number in `src/data/brand.ts`:**

```typescript
export const BRAND_INFO = {
  whatsapp: 'https://wa.me/57YOUR_ACTUAL_NUMBER', // ← Replace with your number
  phone: '+57 YOUR_ACTUAL_NUMBER', // ← Replace with your number
  email: 'info@marketcerdoyres.com',
  // ... rest of config
};
```

**Format**: Use `https://wa.me/57XXXXXXXXXX` (Colombia country code 57)

### 2. Database Setup (Supabase)

#### Create Tables

Run these migrations in order:

**Migration 1: Contact Submissions**
```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text NOT NULL,
  client_type text,
  mensaje text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Only admins can select" ON contact_submissions FOR SELECT USING (false);
```

**Migration 2: Job Applications**
```sql
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text NOT NULL,
  email text NOT NULL,
  cargo text NOT NULL,
  resume_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert" ON job_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Only admins can select" ON job_applications FOR SELECT USING (false);
```

### 3. Environment Variables

Update `.env` with your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Brand Assets

- **Logo**: Already placed at `/public/416557898_686190353497096_3223365451129366901_n.jpg`
- **Images**: Using Unsplash stock photos. Replace URLs in `src/data/brand.ts` with your actual product photos when available.

### 5. Domain & URL Configuration

Update the following for production:

**In `src/components/SEO.tsx`:**
```typescript
url = 'https://your-actual-domain.com' // Update this
```

**Update `public/sitemap.xml`:**
```xml
<loc>https://your-actual-domain.com/</loc>
<!-- Update all URLs -->
```

---

## Brand Colors (Tailwind)

```css
Primary Red: #E22324 (brand-red)
Gray: #555757 (brand-gray)
Yellow Accent: #FFC627 (brand-yellow)
Black: #000000
White: #FFFFFF
```

All colors are configured in `tailwind.config.js` as `brand-*` classes.

---

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── BlogCard.tsx
│   ├── ValueCard.tsx
│   ├── TestimonialCard.tsx
│   ├── SectionTitle.tsx
│   ├── WhatsAppButton.tsx
│   └── SEO.tsx
├── pages/             # Page components (routes)
│   ├── Home.tsx
│   ├── Catalog.tsx
│   ├── About.tsx
│   ├── Recipes.tsx
│   ├── Promotions.tsx
│   ├── Contact.tsx
│   ├── WorkWithUs.tsx
│   ├── Terms.tsx
│   └── NotFound.tsx
├── data/
│   └── brand.ts       # All brand data, products, content
├── App.tsx            # Route definitions
├── main.tsx           # App entry point
└── index.css          # Global styles & Tailwind
```

---

## Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Hero & main landing page |
| `/catalogo` | Catalog | Product catalog (traditional & premium) |
| `/nosotros` | About | Company story, mission, vision, values |
| `/recetas` | Recipes | Blog/recipes with categories |
| `/promociones` | Promotions | Combo packages & offers |
| `/contacto` | Contact | Contact form & location info |
| `/trabaja-con-nosotros` | WorkWithUs | Job applications |
| `/terminos-y-condiciones` | Terms | Legal terms page |
| `*` | NotFound | 404 page |

---

## Key Features

### 1. Product Catalog
- 19 total products (11 traditional + 8 premium)
- Filter by category (Magro, Semimagro, Con Hueso)
- Search functionality
- WhatsApp order integration

### 2. Farm-to-Table Timeline
- 10-step visual journey
- Interactive timeline on homepage
- Transparency about production process

### 3. Contact Forms
- Contact form (saves to Supabase)
- Job application form with resume upload
- Direct WhatsApp integration

### 4. SEO Optimization
- Meta tags & Open Graph
- Schema markup (LocalBusiness, Product)
- Sitemap & robots.txt
- Lazy loading for images

### 5. Animations
- Framer Motion for smooth transitions
- Scroll-triggered animations
- Hover effects on all interactive elements
- Cinematic overlay effects

---

## Customization Guide

### Change Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    red: '#YOUR_RED_HEX',
    gray: '#YOUR_GRAY_HEX',
    yellow: '#YOUR_YELLOW_HEX',
  },
}
```

### Update Product List

Edit `src/data/brand.ts`:
```typescript
export const PRODUCTS_TRADITIONAL = [
  {
    id: 'product-id',
    name: 'Product Name',
    category: 'Magro', // or 'Semimagro' or 'Con Hueso'
    description: 'Description',
    idealFor: 'Use case',
    image: 'https://image-url',
  },
  // ... more products
];
```

### Add Blog Articles

Edit `src/data/brand.ts`:
```typescript
export const RECIPES = [
  {
    id: 1,
    title: 'Article Title',
    category: 'Category', // Parrilla, Guía, Receta, etc.
    excerpt: 'Short description',
    readTime: '5 min',
    image: 'https://image-url',
  },
  // ... more articles
];
```

### Update Testimonials

Edit `src/data/brand.ts`:
```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Customer Name',
    type: 'Familia', // or 'Restaurante', 'Parrillero'
    text: 'Testimonial text',
    image: 'https://avatar-url',
  },
  // ... more testimonials
];
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Lint code
npm run lint
```

The dev server runs on `http://localhost:5173`

---

## Performance Optimization

1. **Code Splitting**: Consider using React.lazy() for routes if bundle grows
2. **Image Optimization**: Replace Unsplash URLs with optimized versions or Cloudinary
3. **Caching**: Enable browser caching headers on static assets
4. **CDN**: Deploy static files to CDN for faster delivery

---

## SEO Checklist

- ✅ Meta titles and descriptions per page
- ✅ Open Graph tags for social sharing
- ✅ Schema markup (LocalBusiness, Products, Articles)
- ✅ Sitemap & robots.txt
- ✅ Canonical URLs
- ✅ Mobile responsive design
- ✅ Fast page load (aim for <3s)
- ✅ Alt text on all images

**To improve**: Replace stock images with professional product photography.

---

## Deployment

### Vercel (Recommended for Vite)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## Maintenance Tasks

### Regular Updates
- [ ] Update product availability monthly
- [ ] Add new blog/recipe content regularly for SEO
- [ ] Monitor contact form submissions in Supabase
- [ ] Check job applications dashboard

### Analytics
- Add Google Analytics 4 for tracking
- Monitor PageSpeed Insights regularly
- Track keyword rankings for target SEO terms

### Security
- Keep dependencies updated: `npm audit fix`
- Rotate API keys periodically
- Monitor Supabase logs for suspicious activity

---

## Support & Contacts

- **Admin Email**: info@marketcerdoyres.com
- **WhatsApp**: https://wa.me/57YOUR_NUMBER
- **Location**: Bello, Antioquia, Colombia
- **Expansion**: Envigado (Coming Soon)

---

## License & Attribution

- Stock images from Unsplash (Free to use)
- Icons from Lucide React (MIT License)
- Tailwind CSS (MIT License)
- Framer Motion (MIT License)

---

**Last Updated**: May 20, 2026
**Version**: 1.0
**Status**: Production Ready
