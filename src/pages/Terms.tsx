import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-warm-brown mb-2">
            Términos y <span className="text-brand-red">Condiciones</span>
          </h1>
          <p className="text-warm-brown/70">Última actualización: {new Date().toLocaleDateString('es-CO')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose max-w-none text-warm-brown/70 leading-relaxed space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y usar este sitio web de Market Cerdo & Market Res, aceptas estar vinculado por estos términos y condiciones. Si no aceptas alguno de estos términos, por favor no uses este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">2. Descripción del Servicio</h2>
            <p>
              Market Cerdo & Market Res ofrece información sobre productos cárnicos premium y facilita el contacto para pedidos. El sitio web es una plataforma informativa y de comunicación, no un sistema de e-commerce directo.
            </p>
            <p>
              Todos los pedidos deben ser realizados a través de WhatsApp, llamada telefónica o contacto directo con nuestro equipo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">3. Uso Permitido</h2>
            <p>Te comprometes a usar este sitio solo para propósitos legales y de forma que no:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Viole ninguna ley aplicable</li>
              <li>Infrinja derechos de propiedad intelectual</li>
              <li>Sea ofensivo o cause daño</li>
              <li>Intente acceder sin autorización a sistemas o datos</li>
              <li>Difunda malware o código malicioso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">4. Productos y Disponibilidad</h2>
            <p>
              La disponibilidad de productos está sujeta a cambios. Las imágenes de productos son representativas y pueden variar ligeramente. Los precios están sujetos a cambio sin previo aviso.
            </p>
            <p>
              Market Cerdo & Market Res se reserva el derecho de rechazar o cancelar cualquier pedido.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">5. Contenido de Usuario</h2>
            <p>
              Al enviar formularios o contenido a través de este sitio, garantizas que tienes derecho a hacerlo y que el contenido no infringe derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">6. Privacidad</h2>
            <p>
              Tu privacidad es importante. Consulta nuestra Política de Privacidad para entender cómo recopilamos, usamos y protegemos tu información personal.
            </p>
            <p>
              Al usar este sitio, aceptas nuestra Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">7. Limitación de Responsabilidad</h2>
            <p>
              Este sitio se proporciona "tal cual" sin garantías de ningún tipo, explícitas o implícitas. Market Cerdo & Market Res no será responsable por:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Daños indirectos, incidentales o consecuentes</li>
              <li>Pérdida de datos o ganancias</li>
              <li>Interrupciones o errores en el servicio</li>
              <li>Inexactitudes en el contenido (a menos que sea negligencia grave)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">8. Enlaces Externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios terceros. Market Cerdo & Market Res no es responsable del contenido, exactitud o prácticas de estos sitios externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">9. Propiedad Intelectual</h2>
            <p>
              Todo contenido en este sitio, incluyendo logos, imágenes, texto y diseño, es propiedad de Market Cerdo & Market Res o sus licenciantes.
            </p>
            <p>
              No se permite la reproducción, distribución o transmisión sin permiso explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">10. Cambios en los Términos</h2>
            <p>
              Market Cerdo & Market Res se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al ser publicados en este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-warm-brown mb-4">11. Contacto</h2>
            <p>
              Para preguntas sobre estos términos, por favor contacta a:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li>Email: info@marketcerdoyres.com</li>
              <li>Teléfono: +57 (número)</li>
              <li>WhatsApp: +57 (número)</li>
              <li>Ubicación: Bello, Antioquia, Colombia</li>
            </ul>
          </section>

          <section className="border-t border-warm-amber/20 pt-8 mt-8">
            <p className="text-warm-brown/40 text-sm">
              Estos términos y condiciones están regidos por las leyes de Colombia. Cualquier disputa relacionada con este sitio estará sujeta a la jurisdicción exclusiva de los tribunales de Antioquia.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
