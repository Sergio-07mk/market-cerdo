import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    cargo: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('telefono', formData.telefono);
    data.append('email', formData.email);
    data.append('cargo', formData.cargo);
    if (file) {
      data.append('resume', file);
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: '', telefono: '', email: '', cargo: '' });
        setFile(null);
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  const positions = [
    {
      title: 'Operario de Producción',
      location: 'Bello, Antioquia',
      description: 'Experiencia en beneficio y desposte de carne',
    },
    {
      title: 'Vendedor / Asesor Comercial',
      location: 'Bello, Antioquia',
      description: 'Conocimiento del sector y orientación al cliente',
    },
    {
      title: 'Supervisor de Calidad',
      location: 'Bello, Antioquia',
      description: 'Experiencia en control de calidad en cárnicos',
    },
    {
      title: 'Conductor / Repartidor',
      location: 'Bello y Envigado',
      description: 'Licencia vigente y experiencia en distribución',
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-warm-amber/20 to-transparent">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-warm-brown mb-6">
              Trabaja <span className="text-brand-red">Con Nosotros</span>
            </h1>
            <p className="text-xl text-warm-brown/70 max-w-3xl mx-auto">
              Únete a un equipo apasionado por la excelencia, la calidad y el compromiso con nuestras comunidades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-warm-cream/50">
        <div className="section-container">
          <SectionTitle title="Por Qué Unirse a Market Cerdo & Market Res" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Experiencia',
                description: 'Aprende de profesionales con más de 20 años en el sector',
              },
              {
                title: 'Oportunidad',
                description: 'Crece con nosotros en expansión a nuevas ubicaciones',
              },
              {
                title: 'Valores',
                description: 'Trabaja en una empresa que valora la honestidad y responsabilidad',
              },
              {
                title: 'Comunidad',
                description: 'Sé parte de un equipo que impacta positivamente',
              },
            ].map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-warm-amber/40 hover:border-brand-red/60 transition-colors warm-shadow"
              >
                <h3 className="text-lg font-bold text-warm-brown mb-2">{reason.title}</h3>
                <p className="text-warm-brown/60">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="section-container">
          <SectionTitle title="Posiciones Disponibles" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {positions.map((position, i) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-warm-amber/40 hover:border-brand-red/60 transition-colors warm-shadow"
              >
                <h3 className="text-xl font-bold text-warm-brown mb-2">{position.title}</h3>
                <p className="text-warm-amber text-sm font-semibold mb-3">{position.location}</p>
                <p className="text-warm-brown/60 mb-4">{position.description}</p>
                <button
                  onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-brand-red hover:text-warm-deepred transition-colors font-semibold text-sm"
                >
                  Aplicar →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding bg-warm-cream/50">
        <div className="section-container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-warm-brown mb-2 text-center">
              Envía Tu <span className="text-brand-red">Aplicación</span>
            </h2>
            <p className="text-warm-brown/60 text-center mb-8">
              Completa el formulario y adjunta tu hoja de vida. Nos pondremos en contacto pronto.
            </p>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border border-warm-amber/40 warm-shadow">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 border border-green-300 text-green-800 rounded-lg p-4 mb-6"
                >
                  Aplicación enviada exitosamente. Nos pondremos en contacto pronto.
                </motion.div>
              )}

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-warm-brown font-semibold mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-warm-cream border border-warm-amber/40 rounded-lg text-warm-brown placeholder:text-warm-brown/40 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-warm-brown font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-warm-cream border border-warm-amber/40 rounded-lg text-warm-brown placeholder:text-warm-brown/40 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-warm-brown font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-warm-cream border border-warm-amber/40 rounded-lg text-warm-brown placeholder:text-warm-brown/40 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="+57 ..."
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-warm-brown font-semibold mb-2">Posición Solicitada</label>
                  <select
                    name="cargo"
                    value={formData.cargo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-warm-cream border border-warm-amber/40 rounded-lg text-warm-brown focus:outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">Selecciona una posición</option>
                    {positions.map((pos) => (
                      <option key={pos.title} value={pos.title}>
                        {pos.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-warm-brown font-semibold mb-2">Hoja de Vida (PDF, DOC)</label>
                  <label className="flex items-center justify-center gap-2 px-4 py-6 border-2 border-dashed border-warm-amber/60 rounded-lg cursor-pointer hover:border-brand-red/60 transition-colors">
                    <Upload size={20} className="text-brand-red" />
                    <span className="text-warm-brown/60">
                      {file ? file.name : 'Arrastra o click para subir'}
                    </span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Submit */}
                <button type="submit" className="brand-button-primary w-full py-3 text-lg">
                  Enviar Aplicación
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
