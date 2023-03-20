import localeContext from './localeContext';
import React from 'react';
import useLocaleStorage from 'hooks/useLocaleStorage';

const LS_KEY_FAVORITE_ARTICLES = 'favorite_articles';
// const LS_KEY_READ_ARTICLES = 'read_articles';

function LocaleProvider({ children }) {
  const [favoriteArticles, setFavoriteArticles] = useLocaleStorage(
    LS_KEY_FAVORITE_ARTICLES,
    []
  );

  const addToFavoriteArticle = newArticle => {
    setFavoriteArticles(prevArticles => [...prevArticles, newArticle]);
  };

  const deleteArticle = articleId => {
    setFavoriteArticles(prevArticles =>
      prevArticles.filter(article => article.id !== articleId)
    );
  };

  return (
    <localeContext.Provider
      value={{ favoriteArticles, addToFavoriteArticle, deleteArticle }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
