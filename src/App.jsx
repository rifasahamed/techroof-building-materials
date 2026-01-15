import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const openWhatsApp = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <Hero />
      <About />
      <CategoryGrid onOpenWhatsApp={openWhatsApp} />
      <FeaturedProducts onOpenWhatsApp={openWhatsApp} />
      <ContactSection />
      <Footer />

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
      />
    </div>
  );
}

export default App;
