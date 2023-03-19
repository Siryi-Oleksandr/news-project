import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import PropTypes from 'prop-types';
import { Container } from './App.styled';
import GlobalStyle from 'GlobalStyle';
import SharedLayout from 'components/SharedLayout';
import { Toaster } from 'react-hot-toast';
import { lightTheme, darkTheme } from '../../styles/theme';
import useLocaleStorage from '../../hooks/useLocaleStorage';

const Home = lazy(() => import('pages/Home'));
const Read = lazy(() => import('pages/Read'));
const Favorite = lazy(() => import('pages/Favorite'));

const LS_KEY_THEME = 'userTheme';

function App() {
  const [theme, setTheme] = useLocaleStorage(LS_KEY_THEME, lightTheme);

  function toggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout toggleTheme={toggleTheme} />}>
            <Route index element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/read" element={<Read />} />
          </Route>
        </Routes>
        <GlobalStyle />
        <Toaster toastOptions={{ duration: 2500 }} />
      </Container>
    </ThemeProvider>
  );
}

App.propTypes = {};

export default App;
