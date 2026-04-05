import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', dark = false }) => {
  return (
    <section
      id={id}
      className={`py-24 px-4 ${dark ? 'bg-background' : 'bg-secondary'} ${className}`}
    >
      <div className="container mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-text/60 max-w-2xl mx-auto text-lg font-medium">
                {subtitle}
              </p>
            )}
            <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
