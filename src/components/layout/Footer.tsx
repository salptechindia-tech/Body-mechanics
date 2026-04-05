import React from 'react';
import { gymConfig } from '../../gymConfig';
import { DynamicIcon } from '../common/DynamicIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
             <img 
              src={gymConfig.brand.logo} 
              alt={gymConfig.brand.name} 
              className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <br />
            <p className="text-text/60 leading-relaxed mb-8">
              {gymConfig.brand.description}
            </p>
            <div className="flex gap-4">
              {Object.entries(gymConfig.socials).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all"
                >
                  <DynamicIcon name={platform.charAt(0).toUpperCase() + platform.slice(1)} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6">{gymConfig.ui.footer.quickLinks}</h4>
            <ul className="space-y-4">
              {[
                { name: gymConfig.ui.nav.about, id: 'about' },
                { name: gymConfig.ui.nav.programs, id: 'programs' },
                { name: gymConfig.ui.nav.plans, id: 'plans' },
                { name: gymConfig.ui.nav.trainers, id: 'trainers' },
                { name: gymConfig.ui.nav.gallery, id: 'gallery' },
                { name: 'FAQ', id: 'faq' }
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-text/60 hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6">{gymConfig.ui.footer.locations}</h4>
            <ul className="space-y-6">
              {gymConfig.locations.map((loc) => (
                <li key={loc.name}>
                  <p className="font-bold text-sm uppercase text-primary">{loc.name}</p>
                  <p className="text-text/60 text-sm">{loc.address}</p>
                  <p className="text-text/40 text-xs mt-1">{loc.hours}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6">{gymConfig.ui.footer.newsletter}</h4>
            <p className="text-text/60 text-sm mb-4">{gymConfig.ui.footer.newsletterSub}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={gymConfig.ui.footer.emailPlaceholder}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-secondary px-4 py-2 rounded-lg font-bold text-xs uppercase">
                {gymConfig.ui.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center text-text/40 text-xs">
          <p>© {new Date().getFullYear()} {gymConfig.brand.name}. All rights reserved. Engineered by AIS.</p>
        </div>
      </div>
    </footer>
  );
};
