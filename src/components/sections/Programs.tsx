import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';
import { DynamicIcon } from '../common/DynamicIcon';

export const Programs: React.FC = () => {
  return (
    <Section
      id="programs"
      title="Elite Training Programs"
      subtitle="Choose from a variety of specialized programs designed to push your limits and deliver results."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gymConfig.services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500"
          >
            {/* Image Background */}
            <div className="h-64 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-primary text-secondary p-3 rounded-xl shadow-xl">
                <DynamicIcon name={service.icon} size={24} />
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-4 transition-all"
              >
                {gymConfig.ui.sections.programs.learnMore} <DynamicIcon name="ArrowRight" size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
