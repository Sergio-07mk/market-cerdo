import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    clientType: 'hogar',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombre: '', telefono: '', clientType: 'hogar', mensaje: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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
              <span className="text-brand-red">Contáctanos</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Estamos aquí para responder tus preguntas y procesar tus pedidos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Phone */}
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-red/20 hover:border-brand-red/40 transition-colors">
                <div className="flex gap-4 items-start">
                  <Phone className="text-brand-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Teléfono</h3>
                    <a
                      href={`tel:${BRAND_INFO.phone}`}
                      className="text-white/60 hover:text-brand-red transition-colors"
                    >
                      {BRAND_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-red/20 hover:border-brand-red/40 transition-colors">
                <div className="flex gap-4 items-start">
                  <MessageCircle className="text-brand-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                    <a
                      href={BRAND_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red hover:text-brand-yellow transition-colors font-semibold"
                    >
                      Enviar mensaje
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-red/20 hover:border-brand-red/40 transition-colors">
                <div className="flex gap-4 items-start">
                  <Mail className="text-brand-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-white/60 hover:text-brand-red transition-colors"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-red/20 hover:border-brand-red/40 transition-colors">
                <div className="flex gap-4 items-start">
                  <MapPin className="text-brand-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-bold mb-3">Ubicaciones</h3>
                    <div className="space-y-2 text-white/60 text-sm">
                      <p>
                        <span className="font-semibold text-white">Bello, Antioquia</span>
                        <br />
                        Disponible ahora
                      </p>
                      <p>
                        <span className="font-semibold text-white">Envigado, Antioquia</span>
                        <br />
                        <span className="text-brand-yellow">Próximamente</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-900 rounded-lg p-6 border border-brand-red/20 hover:border-brand-red/40 transition-colors">
                <div className="flex gap-4 items-start">
                  <Clock className="text-brand-red flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Horario</h3>
                    <div className="space-y-1 text-white/60 text-sm">
                      <p>Lunes - Viernes: 7:00 AM - 6:00 PM</p>
                      <p>Sábado: 8:00 AM - 4:00 PM</p>
                      <p>Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg p-8 border border-brand-red/20">
                <h3 className="text-2xl font-bold text-white mb-6">Envía tu Mensaje</h3>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-500/20 border border-green-500 text-green-300 rounded-lg p-4 mb-6"
                  >
                    Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                  </motion.div>
                )}

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-brand-red/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-brand-red/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="+57 ..."
                    />
                  </div>

                  {/* Client Type */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Tipo de Cliente</label>
                    <select
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-brand-red/20 rounded-lg text-white focus:outline-none focus:border-brand-red transition-colors"
                    >
                      <option value="hogar">Hogar</option>
                      <option value="restaurante">Restaurante</option>
                      <option value="parrillero">Parrillero</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Mensaje</label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black border border-brand-red/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-brand-red transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu consulta..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="brand-button-primary w-full py-3 text-lg">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="section-padding bg-gradient-to-r from-brand-red/10 to-transparent">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Pedidos <span className="text-brand-red">Rápidos</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Para hacer tu pedido de forma más rápida y directa, usa WhatsApp. Responderemos en minutos.
            </p>
            <a
              href={BRAND_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-primary inline-block text-lg"
            >
              Abrir WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
