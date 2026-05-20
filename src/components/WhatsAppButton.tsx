import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_INFO } from '../data/brand';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={BRAND_INFO.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-brand-red/50 transition-all group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} className="text-white" />
      <motion.div
        className="absolute -top-12 right-0 bg-white text-brand-red px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Pedir por WhatsApp
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
