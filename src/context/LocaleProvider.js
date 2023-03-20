import localeContext from './localeContext';
import React from 'react';
import useLocaleStorage from 'hooks/useLocaleStorage';

const LS_KEY_FAVORITE_ARTICLES = 'favorite_articles';
const LS_KEY_READ_ARTICLES = 'read_articles';

function LocaleProvider({ children }) {
  const [favoriteArticles, setFavoriteArticles] = useLocaleStorage(
    LS_KEY_FAVORITE_ARTICLES,
    []
  );
  const [readArticles, setReadArticles] = useLocaleStorage(
    LS_KEY_READ_ARTICLES,
    []
  );

  const addToFavoriteArticle = newArticle => {
    setFavoriteArticles(prevArticles => [...prevArticles, newArticle]);
  };

  const addToReadArticle = newArticle => {
    const date = new Date();
    const readDate = date.toLocaleString();
    const articleWithDate = { ...newArticle, readDate };
    setReadArticles(prevArticles => [...prevArticles, articleWithDate]);
  };

  const deleteArticle = articleId => {
    setFavoriteArticles(prevArticles =>
      prevArticles.filter(article => article.id !== articleId)
    );
  };

  return (
    <localeContext.Provider
      value={{
        favoriteArticles,
        addToFavoriteArticle,
        deleteArticle,
        addToReadArticle,
        readArticles,
      }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
