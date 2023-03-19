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

const LS_KEY_THEME = 'user_theme';
const LS_KEY_FAVORITE_ARTICLES = 'favorite_articles';

function App() {
  const [theme, setTheme] = useLocaleStorage(LS_KEY_THEME, lightTheme);
  const [favoriteArticles, setFavoriteArticles] = useLocaleStorage(
    LS_KEY_FAVORITE_ARTICLES,
    []
  );

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const addToFavoriteArticle = newArticle => {
    setFavoriteArticles(prevArticles => [newArticle, ...prevArticles]);
  };

  const deleteArticle = articleId => {
    setFavoriteArticles(prevArticles =>
      prevArticles.filter(article => article.id !== articleId)
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout toggleTheme={toggleTheme} />}>
            <Route
              index
              element={
                <Home
                  onAddArticle={addToFavoriteArticle}
                  onDeleteArticle={deleteArticle}
                />
              }
            />
            <Route
              path="/favorite"
              element={<Favorite favoriteArticles={favoriteArticles} />}
            />
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
