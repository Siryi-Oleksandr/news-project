import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../styles/theme';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  function toggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <StyledThemeProvider theme={theme}>
      {children}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
