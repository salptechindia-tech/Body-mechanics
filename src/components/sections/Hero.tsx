import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymConfig.hero.backgroundImage}
          alt="Gym Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background z-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-tight mb-6 drop-shadow-2xl">
            {gymConfig.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-primary' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-2xl text-text/90 max-w-3xl mx-auto mb-10 font-medium tracking-wide drop-shadow-md">
            {gymConfig.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={gymConfig.hero.ctaLink}
              className="bg-primary text-secondary px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-2xl shadow-primary/20"
            >
              {gymConfig.hero.ctaText}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programs"
              className="bg-white/10 backdrop-blur-md text-text px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center"
            >
              Explore Programs
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
