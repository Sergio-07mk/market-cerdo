import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ValueCard from '../components/ValueCard';
import { VALUES } from '../data/brand';

const About = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-brand-red/10 to-transparent relative overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quiénes <span className="text-brand-red">Somos</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Más de 20 años de tradición, pasión y compromiso con la excelencia en cada corte de carne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Nuestra granja"
                className="rounded-lg border border-brand-red/20 w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="text-brand-red">Nuestra</span> Historia
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Market Cerdo es una empresa productora y comercializadora de carne de cerdo, constituida por socios porcicultores con más de 20 años de experiencia en el sector.
                </p>
                <p>
                  Nacemos de la pasión compartida por ofrecer productos de excelencia, combinando tradición antioqueña con estándares modernos de calidad y profesionalismo.
                </p>
                <p>
                  Con base en Bello, Antioquia, y próxima expansión a Envigado, nos hemos consolidado como proveedores de confianza para familias, restaurantes y profesionales de la parrilla.
                </p>
                <p>
                  Cada corte que sale de nuestras manos es el resultado de un proceso transparente, responsable y riguroso que garantiza frescura y sabor incomparables.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="section-padding bg-gradient-to-r from-brand-red/10 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Nuestro <span className="text-brand-red">Propósito</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8 border-l-4 border-brand-red pl-6 py-4">
              Producir proteína de excelente calidad para los colombianos, fortaleciendo el sector porcino del país, generando empleo digno y apoyando a las familias.
            </p>
            <p className="text-white/60">
              Creemos que la verdadera excelencia va más allá del producto. Es compromiso con nuestras comunidades, responsabilidad con el medio ambiente y transparencia en cada paso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg border border-brand-red/20 p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-brand-red">Misión</span>
            </h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Ser proveedores de carnes premium de cerdo y res, garantizando siempre calidad, frescura y confiabilidad. Nos comprometemos a un servicio cercano, transparente y responsable que fortalezca la confianza con nuestros clientes en Antioquia y más allá.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visión */}
      <section className="section-padding bg-gray-900/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black rounded-lg border border-brand-red/20 p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-brand-red">Visión</span>
            </h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Convertirnos en la marca referente de carnes premium en Antioquia, reconocida por excelencia, innovación y compromiso. Expandir nuestra presencia manteniendo los valores de calidad y humanidad que nos definen, llegando a más hogares y negocios con el mejor producto del campo colombiano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="section-container">
          <SectionTitle title="Nuestros Valores" subtitle="Lo que nos guía en cada decisión" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((value, i) => (
              <ValueCard
                key={value.id}
                title={value.title}
                description={value.description}
                icon={value.icon}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-900/50">
        <div className="section-container">
          <SectionTitle title="Nuestro Equipo" subtitle="Profesionales dedicados a la excelencia" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Producción',
                description: 'Equipo de porcicultores con décadas de experiencia en crianza responsable.',
                icon: '🐷',
              },
              {
                name: 'Calidad',
                description: 'Estándares rigurosos en beneficio, desposte y control sanitario.',
                icon: '✓',
              },
              {
                name: 'Servicio',
                description: 'Atención personalizada y compromiso con cada cliente.',
                icon: '❤️',
              },
            ].map((team, i) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-black rounded-lg border border-brand-red/20 p-8 text-center"
              >
                <div className="text-4xl mb-4">{team.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{team.name}</h4>
                <p className="text-white/60">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
