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
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-brand-red/10 hover:border-brand-red/40 transition-colors"
    >
      <motion.div
        className="w-14 h-14 rounded-lg bg-brand-red/10 flex items-center justify-center mb-4 group"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(226, 35, 36, 0.2)' }}
      >
        <IconComponent size={28} className="text-brand-red group-hover:text-brand-yellow transition-colors" />
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ValueCard;
