import localeContext from './localeContext';
import React from 'react';

function LocaleProvider({ children }) {
  return (
    <localeContext.Provider value={{ a: 1 }}>{children}</localeContext.Provider>
  );
}

export default LocaleProvider;
