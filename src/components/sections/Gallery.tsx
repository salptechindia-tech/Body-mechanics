import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';

export const Gallery: React.FC = () => {
  return (
    <Section
      id="gallery"
      title="Our Facility"
      subtitle="Take a virtual tour of our premium training environment, equipped with the latest fitness technology."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gymConfig.gallery.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-2xl aspect-square group ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img
              src={img}
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
