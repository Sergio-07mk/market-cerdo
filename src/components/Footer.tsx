import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-brand-red/20">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img
              src="/416557898_686190353497096_3223365451129366901_n.jpg"
              alt="Market Cerdo & Market Res"
              className="h-16 w-auto"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              De la granja a tu mesa. Carne premium de excelencia en Antioquia.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href={BRAND_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href={BRAND_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BRAND_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6">Navegación</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-brand-red text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-white/60 hover:text-brand-red text-sm transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-white/60 hover:text-brand-red text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/recetas" className="text-white/60 hover:text-brand-red text-sm transition-colors">
                  Recetas
                </Link>
              </li>
              <li>
                <Link to="/promociones" className="text-white/60 hover:text-brand-red text-sm transition-colors">
                  Promociones
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6">Ubicaciones</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2">
                <MapPin size={18} className="text-brand-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">
                    {BRAND_INFO.locations.bello.city}
                  </p>
                  <p className="text-white/60 text-xs">
                    {BRAND_INFO.locations.bello.department}, {BRAND_INFO.locations.bello.country}
                  </p>
                </div>
              </li>
              <li className="flex gap-2">
                <MapPin size={18} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold">
                    {BRAND_INFO.locations.envigado.city}
                  </p>
                  <p className="text-brand-yellow text-xs font-semibold">
                    {BRAND_INFO.locations.envigado.status}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6">Contacto</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-start">
                <Phone size={16} className="text-brand-red flex-shrink-0 mt-1" />
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="text-white/60 hover:text-brand-red text-sm transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail size={16} className="text-brand-red flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-white/60 hover:text-brand-red text-sm transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-red hover:text-brand-yellow text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-red/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {currentYear} Market Cerdo & Market Res. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/terminos-y-condiciones" className="hover:text-brand-red transition-colors">
              Términos y Condiciones
            </Link>
            <a href="#" className="hover:text-brand-red transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
