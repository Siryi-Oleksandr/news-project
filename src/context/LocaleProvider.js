import localeContext from './localeContext';
import React, { useState } from 'react';
import useLocaleStorage from 'hooks/useLocaleStorage';
import { addLeadingZero } from '../services/dataService';
import { toast } from 'react-hot-toast';

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
  const [query, setQuery] = useState(null);

  const addToFavoriteArticle = newArticle => {
    setFavoriteArticles(prevArticles => [...prevArticles, newArticle]);
  };

  const addToReadArticle = newArticle => {
    const date = new Date();
    const year = date.getFullYear();
    const month = addLeadingZero(date.getMonth() + 1);
    const number = addLeadingZero(date.getDate());
    const readDate = `${number}/${month}/${year}`;
    const articleWithDate = { ...newArticle, readDate };
    //   check if current article is in collection then delete it and after add current article with new reading data
    setReadArticles(prevArticles => {
      const filteredArticles = prevArticles.filter(
        article => article.id !== newArticle.id
      );
      return [...filteredArticles, articleWithDate];
    });
  };

  const deleteArticle = articleId => {
    setFavoriteArticles(prevArticles =>
      prevArticles.filter(article => article.id !== articleId)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.query.value === '') {
      toast.success('Your search is empty');
      return;
    }
    setQuery(e.target.query.value);
    // e.target.reset();
  };

  return (
    <localeContext.Provider
      value={{
        favoriteArticles,
        addToFavoriteArticle,
        deleteArticle,
        addToReadArticle,
        readArticles,
        handleSubmit,
        query,
        setQuery,
      }}
    >
      {children}
    </localeContext.Provider>
  );
}

export default LocaleProvider;
