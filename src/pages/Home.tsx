import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Flame, Users, Award, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import ValueCard from '../components/ValueCard';
import TestimonialCard from '../components/TestimonialCard';
import { BRAND_INFO, PRODUCTS_TRADITIONAL, PRODUCTS_PREMIUM, FARM_STEPS, VALUES, TESTIMONIALS } from '../data/brand';

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-white">
      <SEO
        title="Carne Premium de Calidad Superior"
        description="Carne premium de cerdo y res en Bello, Antioquia. Más de 20 años de experiencia. De la granja a tu mesa con calidad garantizada."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Market Cerdo & Market Res',
          image: '/416557898_686190353497096_3223365451129366901_n.jpg',
          description: 'Carne premium de cerdo y res en Bello, Antioquia',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bello',
            addressLocality: 'Bello',
            addressRegion: 'Antioquia',
            addressCountry: 'CO',
          },
          telephone: BRAND_INFO.phone,
          url: 'https://marketcerdoyres.com',
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-warm-amber/30 to-warm-cream">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500595046891-e21e02c37ca3?w=1600&h=900&fit=crop"
            alt="Granja antioqueña al amanecer"
            className="w-full h-full object-cover"
          />
          <div className="cinematic-overlay" />
        </div>

        {/* Smoke Effect */}
        <div className="smoke-effect" />

        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <img
              src="/416557898_686190353497096_3223365451129366901_n.jpg"
              alt="Market Cerdo & Market Res"
              className="h-32 w-auto mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Del Campo Antioqueño <span className="text-warm-amber">a tu Mesa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-md"
          >
            Carnes premium de origen real. Tradición antioqueña, producción moderna y calidad que se siente en cada corte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href={BRAND_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="brand-button-primary">
              Pedir por WhatsApp
            </a>
            <Link to="/catalogo" className="brand-button-secondary">
              Ver Catálogo
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center gap-2 pt-8"
          >
            <ChevronDown className="text-brand-red animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-warm-cream py-12 border-y border-warm-amber/40">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, label: '+20 Años', value: 'Experiencia' },
              { icon: Users, label: '5000+', value: 'Clientes Satisfechos' },
              { icon: Award, label: '100%', value: 'Calidad Premium' },
              { icon: Flame, label: 'Fresco', value: 'Garantizado' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-warm-amber/30 hover:border-brand-red/60 transition-colors warm-shadow"
                >
                  <Icon className="text-brand-red" size={32} />
                  <div className="text-left">
                    <p className="text-brand-red font-bold text-lg">{stat.label}</p>
                    <p className="text-warm-brown/70 text-sm">{stat.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quienes Somos Preview */}
      <section className="section-padding bg-gradient-to-r from-warm-cream to-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1500595046891-e21e02c37ca3?w=600&h=400&fit=crop"
                alt="Nuestra granja en Antioquia"
                className="rounded-lg border-2 border-warm-amber/40 w-full h-96 object-cover warm-shadow"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-warm-brown mb-4">
                Origen Real, <span className="text-brand-red">Calidad Auténtica</span>
              </h2>
              <p className="text-warm-brown/80 mb-6 leading-relaxed">
                Market Cerdo es una empresa productora y comercializadora de carne de cerdo, constituida por socios porcicultores con más de 20 años de experiencia. Nacemos de la pasión por ofrecer carne de excelencia.
              </p>
              <p className="text-warm-brown/70 mb-8">
                Con base en Bello, Antioquia, y próxima apertura en Envigado, somos el puente entre la granja responsable y tu mesa.
              </p>
              <Link to="/nosotros" className="brand-button-primary">
                Conocer Nuestra Historia
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* De la Granja a tu Mesa - Central Section */}
      <section className="section-padding bg-gradient-to-b from-white via-warm-cream to-warm-beige relative">
        <div className="section-container">
          <SectionTitle
            title="De la Granja a Tu Mesa"
            subtitle="Un viaje transparente de calidad, pasión y profesionalismo"
          />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {FARM_STEPS.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  activeStep === index
                    ? 'bg-brand-red border-brand-red text-white warm-shadow-md'
                    : 'bg-white border-warm-amber/40 hover:border-brand-red/60 text-warm-brown warm-shadow'
                }`}
              >
                <p className={`text-sm font-bold mb-2 ${activeStep === index ? 'text-white' : 'text-brand-red'}`}>
                  {step.id.toString().padStart(2, '0')}
                </p>
                <h4 className={`font-bold text-sm mb-1 ${activeStep === index ? 'text-white' : 'text-warm-brown'}`}>
                  {step.title}
                </h4>
                <p className={`text-xs ${activeStep === index ? 'text-white/90' : 'text-warm-brown/70'}`}>{step.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Active Step Detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 p-8 bg-gradient-to-r from-warm-amber/30 to-transparent border border-warm-amber/50 rounded-lg warm-shadow-md"
          >
            <h3 className="text-3xl font-bold text-warm-brown mb-3">{FARM_STEPS[activeStep].title}</h3>
            <p className="text-warm-brown/80 text-lg">{FARM_STEPS[activeStep].description}</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionTitle title="Nuestros Valores" subtitle="Lo que nos define como marca" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((value, i) => (
              <ValueCard key={value.id} title={value.title} description={value.description} icon={value.icon} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-warm-cream">
        <div className="section-container">
          <SectionTitle title="Productos Destacados" subtitle="Descubre nuestros cortes premium" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...PRODUCTS_TRADITIONAL.slice(0, 2), ...PRODUCTS_PREMIUM.slice(0, 2)].map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalogo" className="brand-button-primary">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionTitle title="Lo Que Dicen Nuestros Clientes" subtitle="Historias reales de satisfacción y confianza" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <TestimonialCard key={testimonial.id} {...testimonial} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-warm-brown to-warm-walnut relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-warm-amber rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            ¿Listo para llevar <span className="text-warm-amber">calidad auténtica</span> a tu mesa?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Contacta con nosotros por WhatsApp y realiza tu pedido de forma fácil y rápida.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            href={BRAND_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-button-primary inline-block text-lg"
          >
            Pedir Ahora por WhatsApp
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
