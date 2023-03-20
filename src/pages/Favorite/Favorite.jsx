import ArticlesList from 'components/ArticlesList';
import NotArticles from 'components/NotArticles';
import React from 'react';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import localeContext from '../../context/localeContext';

function Favorite() {
  const LS_Context = useContext(localeContext);
  const { favoriteArticles } = LS_Context;
  const isNotArticles = favoriteArticles.length === 0;

  return (
    <div>
      {isNotArticles ? (
        <NotArticles />
      ) : (
        <ArticlesList articles={favoriteArticles} />
      )}
    </div>
  );
}

Favorite.propTypes = {};

export default Favorite;
