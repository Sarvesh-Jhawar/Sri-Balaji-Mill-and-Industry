import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext({
  language: 'English',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') || 'English';
    } catch (e) {
      return 'English';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      // ignore
    }
    // set document language attribute for accessibility
    const langAttr = language === 'English' ? 'en' : language === 'Telugu' ? 'te' : 'hi';
    document.documentElement.lang = langAttr;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
