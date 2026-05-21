import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { PRODUCTS_TRADITIONAL, PRODUCTS_PREMIUM } from '../data/brand';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'traditional' | 'premium'>('traditional');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const allProducts = activeTab === 'traditional' ? PRODUCTS_TRADITIONAL : PRODUCTS_PREMIUM;

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = categoryFilter ? product.category === categoryFilter : true;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter, activeTab, allProducts]);

  const categories = Array.from(new Set(allProducts.map((p) => p.category)));

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionTitle
            title="Catálogo de Productos"
            subtitle="Descubre todos nuestros cortes y productos premium"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-warm-cream p-6 rounded-lg border border-warm-amber/40 mb-12 warm-shadow"
        >
          {/* Tabs */}
          <div className="flex gap-4 mb-6 flex-wrap">
            {(['traditional', 'premium'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCategoryFilter(null);
                }}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
                    : 'bg-white text-warm-brown border border-warm-amber/30 hover:border-brand-red/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === 'traditional' ? 'Productos Tradicionales' : 'Productos Premium'}
              </motion.button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-warm-amber/40 rounded-lg text-warm-brown placeholder:text-warm-brown/40 focus:outline-none focus:border-brand-red transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            <motion.button
              onClick={() => setCategoryFilter(null)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                categoryFilter === null
                  ? 'bg-warm-amber text-warm-brown'
                  : 'bg-white text-warm-brown border border-warm-amber/30 hover:border-brand-red/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Todas
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  categoryFilter === category
                    ? 'bg-brand-red text-white'
                    : 'bg-white text-warm-brown border border-warm-amber/30 hover:border-brand-red/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-warm-brown/70 mb-6"
        >
          Mostrando <span className="text-brand-red font-bold">{filteredProducts.length}</span> de {allProducts.length} productos
        </motion.p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-warm-brown/70 text-lg mb-4">No se encontraron productos</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter(null);
              }}
              className="brand-button-primary"
            >
              Limpiar Filtros
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
