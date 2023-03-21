import ArticlesList from 'components/ArticlesList';
import Loader from 'components/Loader';
import React, { useState, useEffect, useContext } from 'react';
import * as API from '../../services/newsAPI';
import {
  handleResentArticles,
  handleSearchArticles,
} from '../../services/dataService';

import localeContext from '../../context/localeContext';
import { toast } from 'react-hot-toast';
import CategoryList from 'components/CategoryList';

function Home() {
  const [recentArticles, setRecentArticle] = useState([]);
  const [status, setStatus] = useState('idle');
  const [categories, setCategoryList] = useState([]);
  const [hits, setHits] = useState(0);
  const [offset, setOffset] = useState(0);
  const LS_Context = useContext(localeContext);
  const { query, setQuery } = LS_Context;

  useEffect(() => {
    API.getSectionList().then(setCategoryList);
    if (!query) {
      API.getRecentArticles().then(data => {
        const handleArticles = handleResentArticles(data);
        setRecentArticle(handleArticles);
      });
      return;
    }

    setStatus('pending');
    const abortConroller = new AbortController();

    API.getArticlesByQuery(query, abortConroller)
      .then(data => {
        if (data.meta.hits === 0) {
          toast.error('Nothing was found for your request.');
          setStatus('idle');
          return;
        }
        const handleArticles = handleSearchArticles(data.docs);
        setRecentArticle(handleArticles);
        setStatus('resolved');
        setHits(data.meta.hits);
        setOffset(data.meta.offset);
      })
      .catch(error => {
        setStatus('rejected');
      });

    return () => {
      // setQuery(null);
      abortConroller.abort();
    };
  }, [query, setQuery]);

  const searchByCategory = category => {
    setStatus('pending');

    API.getArticlesByCategory(category)
      .then(data => {
        console.log('from Home 🥰', data);
        // if (data.meta.hits === 0) {
        //   toast.error('Nothing was found for your request.');
        //   setStatus('idle');
        //   return;
        // }
        // const handleArticles = handleSearchArticles(data.docs);
        // setRecentArticle(handleArticles);
        // setStatus('resolved');
        // setHits(data.meta.hits);
        // setOffset(data.meta.offset);
      })
      .catch(error => {
        setStatus('rejected');
      });
  };

  if (recentArticles.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      {status === 'pending' && <Loader />}
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
