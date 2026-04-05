import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { gymConfig } from '../../gymConfig';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: gymConfig.ui.nav.about, href: '#about' },
    { name: gymConfig.ui.nav.programs, href: '#programs' },
    { name: gymConfig.ui.nav.plans, href: '#plans' },
    { name: gymConfig.ui.nav.trainers, href: '#trainers' },
    { name: gymConfig.ui.nav.gallery, href: '#gallery' },
    { name: gymConfig.ui.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary/95 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-black/40 backdrop-blur-[2px] py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          {gymConfig.brand.logo ? (
            <img 
              src={gymConfig.brand.logo} 
              alt={gymConfig.brand.name} 
              className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          ) : (
            <span className="text-xl md:text-2xl font-black tracking-tighter text-primary uppercase italic">
              {gymConfig.brand.name}
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors drop-shadow-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${gymConfig.contact.phone}`}
            className="bg-primary text-secondary px-6 py-2.5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            <Phone size={14} /> {gymConfig.ui.nav.joinNow}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-secondary border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-widest hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${gymConfig.contact.phone}`}
                className="bg-primary text-secondary px-6 py-3 rounded-lg font-bold uppercase text-center tracking-widest mt-4"
              >
                {gymConfig.ui.nav.joinNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
