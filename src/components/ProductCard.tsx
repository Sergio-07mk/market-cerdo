import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  idealFor: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  description,
  idealFor,
  image,
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Magro':
        return 'bg-brand-red';
      case 'Semimagro':
        return 'bg-brand-yellow text-black';
      case 'Con Hueso':
        return 'bg-brand-gray';
      default:
        return 'bg-brand-red';
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hola, me interesa el producto: ${name}`;
    const url = `${BRAND_INFO.social.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg overflow-hidden border border-warm-amber/30 hover:border-brand-red/60 transition-colors warm-shadow hover:warm-shadow-md"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-warm-cream">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 via-transparent to-transparent opacity-40" />

        {/* Category Badge */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <span className={`px-3 py-1 rounded text-xs font-bold ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-bold text-warm-brown mb-2 line-clamp-2">{name}</h3>

        <p className="text-sm text-warm-brown/70 mb-3 line-clamp-2">{description}</p>

        <p className="text-xs text-brand-red font-semibold mb-4">Ideal para: <span className="text-warm-deepred">{idealFor}</span></p>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="flex-1 brand-button-primary flex items-center justify-center gap-2 py-2 text-sm"
          >
            <MessageCircle size={16} />
            Pedir
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 brand-button-secondary flex items-center justify-center gap-2 py-2 text-sm"
          >
            <ShoppingCart size={16} />
            Info
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
