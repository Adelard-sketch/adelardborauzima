import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const languages = [
  { 
    code: 'en' as Language, 
    label: 'EN', 
    name: 'English',
    flag: '🇺🇸'
  },
  { 
    code: 'fr' as Language, 
    label: 'FR', 
    name: 'Français',
    flag: '🇫🇷'
  },
  { 
    code: 'sw' as Language, 
    label: 'SW', 
    name: 'Kiswahili',
    flag: '🇰🇪'
  }
];

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-center">
      {/* Compact language buttons */}
      <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-full p-1 border-2 border-[#3182bd]/20 shadow-lg">
        {languages.map((lang, index) => {
          const isActive = language === lang.code;
          
          return (
            <motion.button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`relative flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                isActive 
                  ? 'text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              title={lang.name}
            >
              {/* Active background with branded colors */}
              {isActive && (
                <motion.div
                  layoutId="activeLanguage"
                  className="absolute inset-0 bg-[#3182bd] rounded-full shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              {/* Flag and text content */}
              <div className="relative flex items-center space-x-1 z-10">
                <span className="text-sm">{lang.flag}</span>
                <span className="font-semibold tracking-wide">{lang.label}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Small indicator text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="ml-2 text-xs text-gray-500 font-medium"
      >
        {languages.find(l => l.code === language)?.name}
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;