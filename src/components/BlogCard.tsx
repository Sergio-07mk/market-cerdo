import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  category,
  excerpt,
  readTime,
  image,
  onClick,
}) => {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group cursor-pointer rounded-lg overflow-hidden bg-gray-900 border border-brand-red/10 hover:border-brand-red/40 transition-colors"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-black">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-brand-red text-white text-xs font-bold rounded">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-white/60 mb-4 line-clamp-3 flex-1">{excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>

          <motion.div
            className="text-brand-red"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
