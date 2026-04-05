import React from 'react';
import { motion } from 'motion/react';
import { gymConfig } from '../../gymConfig';
import { Section } from '../common/Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title={gymConfig.ui.nav.contact}
      subtitle="Ready to start your transformation? Send us a message or visit one of our locations today."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-8">{gymConfig.ui.contactForm.infoHeading}</h3>
          <div className="space-y-8">
            <a
              href={`mailto:${gymConfig.contact.email}`}
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-text/40 text-xs font-black uppercase tracking-widest mb-1">{gymConfig.ui.contactForm.emailLabel}</p>
                <p className="text-xl font-bold">{gymConfig.contact.email}</p>
              </div>
            </a>

            <a
              href={`tel:${gymConfig.contact.phone}`}
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-text/40 text-xs font-black uppercase tracking-widest mb-1">{gymConfig.ui.contactForm.callLabel}</p>
                <p className="text-xl font-bold">{gymConfig.contact.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-text/40 text-xs font-black uppercase tracking-widest mb-1">{gymConfig.ui.contactForm.visitLabel}</p>
                <p className="text-xl font-bold">{gymConfig.contact.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
            <h4 className="text-lg font-black uppercase italic tracking-tighter mb-4 text-primary">{gymConfig.ui.contactForm.hoursHeading}</h4>
            <ul className="space-y-2 text-sm text-text/60">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span className="font-bold text-text">5:00 AM - 11:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span className="font-bold text-text">7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="font-bold text-text">7:00 AM - 8:00 PM</span></li>
            </ul>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-2xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-text/40 mb-2">{gymConfig.ui.contactForm.nameLabel}</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder={gymConfig.ui.contactForm.placeholders.name}
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-text/40 mb-2">{gymConfig.ui.contactForm.emailFieldLabel}</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder={gymConfig.ui.contactForm.placeholders.email}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-text/40 mb-2">{gymConfig.ui.contactForm.subjectLabel}</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                <option className="bg-secondary">Membership Inquiry</option>
                <option className="bg-secondary">Personal Training</option>
                <option className="bg-secondary">Group Classes</option>
                <option className="bg-secondary">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-text/40 mb-2">{gymConfig.ui.contactForm.messageLabel}</label>
              <textarea
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder={gymConfig.ui.contactForm.placeholders.message}
              />
            </div>
            <button className="w-full bg-primary text-secondary py-5 rounded-xl font-black uppercase text-sm tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/10">
              {gymConfig.ui.contactForm.sendButton} <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};
