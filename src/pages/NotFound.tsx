import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center pt-24 pb-12">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-brand-red mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">Página No Encontrada</h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Lo sentimos, la página que buscas no existe. Pero no te preocupes, estamos aquí para ayudarte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="brand-button-primary">
              Ir al Inicio
            </Link>
            <Link to="/catalogo" className="brand-button-secondary">
              Ver Catálogo
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
