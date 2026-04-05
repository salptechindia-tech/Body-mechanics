import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="Success Stories"
      subtitle="Don't just take our word for it. Hear from our members who have transformed their lives at XOVA."
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {gymConfig.testimonials.map((test, i) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl relative"
          >
            <Quote className="absolute top-8 right-8 text-primary/20" size={48} />
            
            <div className="flex gap-1 mb-6">
              {[...Array(test.rating)].map((_, idx) => (
                <Star key={idx} size={16} className="fill-primary text-primary" />
              ))}
            </div>

            <p className="text-text/80 text-lg italic leading-relaxed mb-8">
              "{test.content}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={test.avatar}
                alt={test.name}
                className="w-14 h-14 rounded-full border-2 border-primary"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-black uppercase italic tracking-tighter text-primary">
                  {test.name}
                </h4>
                <p className="text-text/40 text-xs font-bold uppercase tracking-widest">
                  {test.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
