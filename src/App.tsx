import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import WorkWithUs from './pages/WorkWithUs';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/recetas" element={<Recipes />} />
          <Route path="/promociones" element={<Promotions />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/trabaja-con-nosotros" element={<WorkWithUs />} />
          <Route path="/terminos-y-condiciones" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
