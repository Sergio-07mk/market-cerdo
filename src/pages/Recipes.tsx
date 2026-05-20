import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { RECIPES } from '../data/brand';

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(RECIPES.map((r) => r.category)));

  const filteredRecipes = selectedCategory
    ? RECIPES.filter((r) => r.category === selectedCategory)
    : RECIPES;

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
              Recetas y <span className="text-brand-red">Guías</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Aprende técnicas, secretos de cocina y recetas autênticas con nuestros mejores cortes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="section-container">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-3 flex-wrap justify-center mb-12"
          >
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                selectedCategory === null
                  ? 'bg-brand-yellow text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Todos
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-red text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <BlogCard
                  {...recipe}
                  onClick={() => {
                    // Could open a modal or navigate to detail page
                    console.log('Article clicked:', recipe.title);
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding bg-gray-900/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-brand-red">Cocina</span> Premium con Nuestras Carnes
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                En Market Cerdo & Market Res, creemos que la carne de calidad superior merece técnicas de cocina excepcionales. Nuestros artículos te enseñan cómo sacar el máximo provecho de cada corte, desde los más magros hasta los premium con hueso.
              </p>

              <p>
                Descubre secretos de cocineros profesionales, recetas tradicionales antioqueñas, técnicas de parrilla colombiana y consejos de conservación para mantener tu carne fresca. Todo lo que necesitas saber está aquí.
              </p>

              <h3 className="text-xl font-bold text-white mt-6">Temas que Cubrimos:</h3>

              <ul className="list-disc list-inside space-y-2 text-white/60">
                <li>Cómo identificar carne de calidad premium</li>
                <li>Técnicas de desposte y porcionado</li>
                <li>Parrilla colombiana: paso a paso</li>
                <li>Recetas familiares antioqueñas</li>
                <li>Conservación al vacío y almacenamiento</li>
                <li>Diferencias entre cortes y sus usos</li>
                <li>Cocina gourmet con carnes premium</li>
                <li>Tiempos y temperaturas de cocción</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;
