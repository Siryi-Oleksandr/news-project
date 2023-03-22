import ArticlesList from 'components/ArticlesList';
import Loader from 'components/Loader';
import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../services/newsAPI';
import {
  handleResentArticles,
  handleSearchArticles,
  handleArticlesByCategory,
} from '../../services/dataService';

import localeContext from '../../context/localeContext';
import { toast } from 'react-hot-toast';
import CategoryList from 'components/CategoryList';

function Home() {
  const [recentArticles, setRecentArticle] = useState([]);
  const [categories, setCategoryList] = useState([]);
  // const [hits, setHits] = useState(0); // TODO there are for pagination
  // const [offset, setOffset] = useState(0);
  const [isLoader, setIsLoader] = useState(false);
  const LS_Context = useContext(localeContext);
  const { query, setQuery } = LS_Context;

  useEffect(() => {
    API.getSectionList().then(setCategoryList);
  }, []);

  useEffect(() => {
    if (!query) {
      setIsLoader(true);
      API.getRecentArticles()
        .then(data => {
          const handleArticles = handleResentArticles(data);
          setRecentArticle(handleArticles);
        })
        .catch(error => {
          console.error(error.message);
        })
        .finally(() => setIsLoader(false));
      return;
    }

    setIsLoader(true);
    const abortConroller = new AbortController();

    API.getArticlesByQuery(query, abortConroller)
      .then(data => {
        if (data.meta.hits === 0) {
          toast.error('Nothing was found for your request.');
          return;
        }
        const handleArticles = handleSearchArticles(data.docs);
        setRecentArticle(handleArticles);
        // setHits(data.meta.hits); // TODO there are for pagination
        // setOffset(data.meta.offset);
      })
      .catch(error => {
        console.error(error.message);
      })
      .finally(() => setIsLoader(false));

    return () => {
      setQuery(null);
      abortConroller.abort();
    };
  }, [query, setQuery]);

  const searchByCategory = category => {
    setIsLoader(true);

    API.getArticlesByCategory(category)
      .then(data => {
        const handleArticles = handleArticlesByCategory(data);
        setRecentArticle(handleArticles);
      })
      .catch(error => {
        console.error(error.message);
      })
      .finally(() => setIsLoader(false));
  };

  if (recentArticles.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      {isLoader && <Loader />}
      <CategoryList
        categories={categories}
        onSearchByCategory={searchByCategory}
      />
      <ArticlesList articles={recentArticles} />
    </div>
  );
}

Home.propTypes = {};

export default Home;
