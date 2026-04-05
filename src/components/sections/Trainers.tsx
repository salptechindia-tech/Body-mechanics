import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';
import { DynamicIcon } from '../common/DynamicIcon';

export const Trainers: React.FC = () => {
  return (
    <Section
      id="trainers"
      title="Meet the Experts"
      subtitle="Our certified trainers are here to guide, motivate, and push you towards your peak performance."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {gymConfig.trainers.map((trainer, i) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Socials Overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                {Object.entries(trainer.socials).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    className="w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <DynamicIcon name={platform.charAt(0).toUpperCase() + platform.slice(1)} size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-1 group-hover:text-primary transition-colors">
                {trainer.name}
              </h3>
              <p className="text-primary text-xs font-black uppercase tracking-widest mb-4">
                {trainer.specialty}
              </p>
              <p className="text-text/60 text-sm italic max-w-xs mx-auto">
                "{trainer.bio}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
