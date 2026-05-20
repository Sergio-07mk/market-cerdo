import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  delay?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        <span className="text-brand-red">{title.split(' ')[0]}</span>{' '}
        {title.split(' ').slice(1).join(' ')}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/60 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
