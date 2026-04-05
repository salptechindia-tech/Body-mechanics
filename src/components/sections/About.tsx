import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl z-0" />
          <img
            src={gymConfig.about.image}
            alt="About Us"
            className="rounded-2xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-2xl shadow-2xl z-20 hidden md:block">
            <p className="text-secondary font-black text-4xl italic tracking-tighter">EST. 2015</p>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-tight">
            {gymConfig.about.title}
          </h2>
          <p className="text-text/70 text-lg leading-relaxed mb-10">
            {gymConfig.about.content}
          </p>

          <div className="grid grid-cols-2 gap-8">
            {gymConfig.about.stats.map((stat, i) => (
              <div key={i} className="border-l-4 border-primary pl-6">
                <p className="text-3xl font-black text-primary italic tracking-tighter">{stat.value}</p>
                <p className="text-text/40 uppercase text-xs font-bold tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
