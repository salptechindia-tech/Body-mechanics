import React, { useEffect } from 'react';
import { gymConfig } from '../gymConfig';

export const ThemeInjector: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', gymConfig.colors.primary);
    root.style.setProperty('--secondary', gymConfig.colors.secondary);
    root.style.setProperty('--accent', gymConfig.colors.accent);
    root.style.setProperty('--background', gymConfig.colors.background);
    root.style.setProperty('--text', gymConfig.colors.text);
  }, []);

  return null;
};
