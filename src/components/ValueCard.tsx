import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, delay = 0 }) => {
  // Type assertion for icon
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<any>>)[icon] || Icons.Heart;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-lg p-8 border-2 border-warm-amber/40 hover:border-brand-red/60 transition-colors warm-shadow hover:warm-shadow-md"
    >
      <motion.div
        className="w-14 h-14 rounded-lg bg-brand-red/15 flex items-center justify-center mb-4 group"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 28, 28, 0.2)' }}
      >
        <IconComponent size={28} className="text-brand-red group-hover:text-warm-deepred transition-colors" />
      </motion.div>

      <h3 className="text-xl font-bold text-warm-brown mb-3">{title}</h3>
      <p className="text-warm-brown/70 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ValueCard;
