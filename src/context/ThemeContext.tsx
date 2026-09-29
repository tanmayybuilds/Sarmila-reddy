import React, { createContext, useContext, useState, useEffect } from 'react';
import { ColorTheme, ColorThemeId } from '../types';
import { COLOR_THEMES } from '../data/content';

interface ThemeContextType {
  activeTheme: ColorTheme;
  themeId: ColorThemeId;
  setThemeId: (id: ColorThemeId) => void;
  availableThemes: ColorTheme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeIdState] = useState<ColorThemeId>(() => {
    const saved = localStorage.getItem('sarmila_color_theme') as ColorThemeId;
    if (saved && COLOR_THEMES.some(t => t.id === saved)) {
      return saved;
    }
    return 'rose-champagne'; // Default light luxury aesthetic
  });

  const activeTheme = COLOR_THEMES.find(t => t.id === themeId) || COLOR_THEMES[0];

  const setThemeId = (id: ColorThemeId) => {
    setThemeIdState(id);
    localStorage.setItem('sarmila_color_theme', id);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', activeTheme.primary);
    root.style.setProperty('--color-primary-hover', activeTheme.primaryHover);
    root.style.setProperty('--color-primary-light', activeTheme.primaryLight);
    root.style.setProperty('--color-accent', activeTheme.accent);
    root.style.setProperty('--color-accent-light', activeTheme.accentLight);
    root.style.setProperty('--color-bg-light', activeTheme.bgLight);
    root.style.setProperty('--color-surface', activeTheme.surface);
    root.style.setProperty('--color-text-dark', activeTheme.textDark);
    root.style.setProperty('--color-text-muted', activeTheme.textMuted);
    root.style.setProperty('--color-border', activeTheme.border);
    root.style.setProperty('--color-badge-bg', activeTheme.badgeBg);
    root.style.setProperty('--color-badge-text', activeTheme.badgeText);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, themeId, setThemeId, availableThemes: COLOR_THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
