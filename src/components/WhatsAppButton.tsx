import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND_INFO } from '../data/brand';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={BRAND_INFO.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group animate-warm-glow"
      style={{ boxShadow: '0 0 20px rgba(139, 28, 28, 0.4)' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(139, 28, 28, 0.8)' }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} className="text-white" />
      <motion.div
        className="absolute -top-12 right-0 bg-warm-cream text-brand-red px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap pointer-events-none border border-warm-amber/30"
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
