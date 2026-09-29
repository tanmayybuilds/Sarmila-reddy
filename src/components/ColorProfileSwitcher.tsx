import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Check, Sparkles, X, Info } from 'lucide-react';
import { ColorThemeId } from '../types';

export const ColorProfileSwitcher: React.FC = () => {
  const { activeTheme, themeId, setThemeId, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Pill on Bottom-Right - Adjusted for mobile sticky bar */}
      <aside aria-label="Color Palette Selector" className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40">
        <button
          id="color-palette-floating-button"
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: activeTheme.border,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          }}
          title="Customize light color profile"
        >
          <div
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-black/10 shadow-inner"
            style={{ backgroundColor: activeTheme.primary }}
          />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wide hidden xs:inline" style={{ color: activeTheme.textDark }}>
            Theme: <span className="font-bold">{activeTheme.name.split(' ')[0]}</span>
          </span>
          <Palette className="w-3.5 h-3.5" style={{ color: activeTheme.primary }} />
        </button>
      </aside>

      {/* Modal / Drawer for Color Profiles */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fade-in">
          <div
            id="color-palette-modal"
            className="relative w-full max-w-lg p-6 rounded-2xl shadow-2xl border transition-all"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: activeTheme.border,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: activeTheme.border }}>
              <div className="flex items-center gap-2.5">
                <div
                  className="p-2 rounded-xl"
                  style={{ backgroundColor: activeTheme.primaryLight }}
                >
                  <Palette className="w-5 h-5" style={{ color: activeTheme.primary }} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold" style={{ color: activeTheme.textDark }}>
                    Choose Your Luxury Light Palette
                  </h3>
                  <p className="text-xs text-stone-500">
                    All palettes are calibrated for high contrast, soft light warmth, and premium credibility.
                  </p>
                </div>
              </div>
              <button
                id="close-color-palette-modal"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5 text-stone-500" />
              </button>
            </div>

            {/* Explanatory Note for User */}
            <div
              className="my-4 p-3 rounded-xl flex items-start gap-2.5 text-xs leading-relaxed"
              style={{
                backgroundColor: activeTheme.accentLight,
                borderColor: activeTheme.border,
              }}
            >
              <Info className="w-4 h-4 mt-0.5 shrink-0" style={{ color: activeTheme.accent }} />
              <p style={{ color: activeTheme.textDark }}>
                <strong>Client Choice Note:</strong> Click any palette below to instantly preview the website in that aesthetic. You can tell us your preference, and we will set it as the permanent brand style!
              </p>
            </div>

            {/* List of Palettes */}
            <div className="space-y-3 mt-4">
              {availableThemes.map(theme => {
                const isSelected = theme.id === themeId;
                return (
                  <button
                    key={theme.id}
                    id={`select-theme-${theme.id}`}
                    onClick={() => {
                      setThemeId(theme.id as ColorThemeId);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected ? 'ring-2 ring-offset-2' : 'hover:bg-stone-50'
                    }`}
                    style={{
                      borderColor: isSelected ? theme.primary : '#E5E7EB',
                      backgroundColor: isSelected ? theme.primaryLight : '#FFFFFF',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Color dots preview */}
                      <div className="flex -space-x-1">
                        <span
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.primary }}
                        />
                        <span
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.accent }}
                        />
                        <span
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.bgLight }}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm" style={{ color: theme.textDark }}>
                            {theme.name}
                          </span>
                          {isSelected && (
                            <span
                              className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor: theme.primary,
                                color: '#FFFFFF',
                              }}
                            >
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">{theme.tagline}</p>
                      </div>
                    </div>

                    <div className="shrink-0 pl-2">
                      {isSelected ? (
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: theme.primary }}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-xs font-medium text-stone-400 hover:text-stone-700">Preview</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer button */}
            <div className="mt-5 pt-3 border-t flex justify-end" style={{ borderColor: activeTheme.border }}>
              <button
                id="confirm-color-selection-btn"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{ backgroundColor: activeTheme.primary }}
              >
                Apply & Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
