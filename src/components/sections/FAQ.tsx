import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      title="Frequently Asked Questions"
      subtitle={gymConfig.ui.sections.faq.subtitle}
      dark
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {gymConfig.faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <span className="text-lg font-bold uppercase tracking-tighter italic">
                {faq.question}
              </span>
              <div className={`text-primary transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            
            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-text/60 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};
