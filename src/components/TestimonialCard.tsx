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
      className="bg-white rounded-lg p-6 border border-warm-amber/40 hover:border-brand-red/60 transition-colors warm-shadow hover:warm-shadow-md"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-warm-amber text-warm-amber" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-warm-brown/80 italic mb-6 line-clamp-4">&quot;{text}&quot;</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover border border-warm-amber/30" />
        <div>
          <p className="text-warm-brown font-bold text-sm">{name}</p>
          <p className="text-brand-red text-xs font-semibold">{type}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
