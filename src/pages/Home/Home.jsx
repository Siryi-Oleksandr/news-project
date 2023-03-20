import ArticlesList from 'components/ArticlesList';
import Loader from 'components/Loader';
import React, { useState, useEffect } from 'react';

import * as API from '../../services/newsAPI';

function Home() {
  const [recentArticles, setRecentArticle] = useState([]);

  useEffect(() => {
    // if (!query) {
    //   return;
    // }
    // setStatus('pending');
    // const abortConroller = new AbortController();
    API.getRecentArticles().then(setRecentArticle);
    // API.getMoviesByQuery(query, abortConroller)
    //   .then(data => {
    //     setMovies(data);
    //     setStatus('resolved');
    //   })
    //   .catch(error => {
    //     setStatus('rejected');
    //     setError(error);
    //   });
  }, []);

  if (recentArticles.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <ArticlesList articles={recentArticles} />
    </div>
  );
}

Home.propTypes = {};

export default Home;
