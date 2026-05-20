import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  type: string;
  text: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, type, text, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-lg p-6 border border-brand-red/10 hover:border-brand-red/40 transition-colors"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/80 italic mb-6 line-clamp-4">&quot;{text}&quot;</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border border-brand-red/20" />
        <div>
          <p className="text-white font-bold text-sm">{name}</p>
          <p className="text-brand-yellow text-xs font-semibold">{type}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
