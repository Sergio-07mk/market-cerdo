import { motion } from 'framer-motion';
import { Users, Flame, Gift, Building2 } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

const Promotions = () => {
  const combos = [
    {
      icon: Users,
      title: 'Combo Familiar',
      description: 'Perfecto para reuniones en familia',
      items: [
        '1 kg Cañón Magro',
        '500g Costilla con Hueso',
        '500g Chorizo Casero',
        'Papada (250g)',
      ],
      price: 'Consultar',
      color: 'from-brand-red/20 to-transparent',
    },
    {
      icon: Flame,
      title: 'Combo Parrilla',
      description: 'Para los maestros de la parrilla',
      items: [
        '1.5 kg Costilla San Luis',
        '1 kg Sobrebarriga',
        '500g Chorizos Premium',
        'Papada y Manero',
      ],
      price: 'Consultar',
      color: 'from-brand-yellow/20 to-transparent',
    },
    {
      icon: Gift,
      title: 'Combo Premium',
      description: 'Experiencia gourmet completa',
      items: [
        '800g Punta de Anca',
        '600g Chuleta de Lomo',
        '400g Costichi con Hueso',
        'Solomito y Bombones',
      ],
      price: 'Consultar',
      color: 'from-brand-red/20 to-transparent',
    },
    {
      icon: Building2,
      title: 'Combo Restaurante',
      description: 'Para negocios y profesionales',
      items: [
        'Cortes variados (5 kg)',
        'Opciones personalizadas',
        'Descuentos especiales',
        'Entrega dedicada',
      ],
      price: 'Personalizado',
      color: 'from-gray-500/20 to-transparent',
    },
  ];

  return (
    <div className="bg-black min-h-screen pt-24 pb-12">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-brand-red/10 to-transparent">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-brand-red">Combos</span> y Promociones
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Descubre nuestros combos especiales diseñados para cada ocasión y cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Combos Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {combos.map((combo, index) => {
              const Icon = combo.icon;
              return (
                <motion.div
                  key={combo.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${combo.color} rounded-lg border border-brand-red/20 hover:border-brand-red/50 transition-all p-8`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{combo.title}</h3>
                      <p className="text-white/60">{combo.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-brand-red" />
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-6 mb-6">
                    <p className="text-sm text-white/60 font-semibold mb-3">Incluye:</p>
                    <ul className="space-y-2">
                      {combo.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80">
                          <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <span className="text-white/60 text-sm">Desde</span>
                    <div className="flex gap-3">
                      <a
                        href={BRAND_INFO.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-button-primary flex-1 text-center py-2"
                      >
                        Pedir
                      </a>
                      <button className="brand-button-secondary py-2 px-4">Info</button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900/50">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Tu Combo No Está Aquí?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Ofrecemos combos totalmente personalizados. Contacta con nosotros por WhatsApp para diseñar el combo perfecto para tu negocio o evento.
            </p>
            <a
              href={BRAND_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-primary inline-block"
            >
              Solicitar Combo Personalizado
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
