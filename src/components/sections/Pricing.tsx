import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';
import { CheckCircle2 } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <Section
      id="plans"
      title="Membership Plans"
      subtitle="Flexible plans designed to fit your lifestyle and fitness goals. No hidden fees, just pure performance."
      dark
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {gymConfig.plans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-10 rounded-3xl border ${
              plan.isPopular
                ? 'bg-primary border-primary shadow-2xl shadow-primary/20 scale-105 z-10'
                : 'bg-white/5 border-white/10'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-secondary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                {gymConfig.ui.sections.pricing.mostPopular}
              </div>
            )}

            <div className="mb-8">
              <h3 className={`text-2xl font-black uppercase italic tracking-tighter mb-2 ${plan.isPopular ? 'text-secondary' : 'text-primary'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className={`text-5xl font-black italic tracking-tighter ${plan.isPopular ? 'text-secondary' : 'text-text'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-bold uppercase tracking-widest ${plan.isPopular ? 'text-secondary/60' : 'text-text/40'}`}>
                  {plan.period}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className={plan.isPopular ? 'text-secondary' : 'text-primary'} />
                  <span className={`text-sm font-medium ${plan.isPopular ? 'text-secondary/80' : 'text-text/70'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${
                plan.isPopular
                  ? 'bg-secondary text-primary hover:bg-secondary/90'
                  : 'bg-primary text-secondary hover:scale-105'
              }`}
            >
              {plan.ctaText}
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
