import ArticlesList from 'components/ArticlesList';
import React from 'react';
// import PropTypes from 'prop-types';

function Favorite({ favoriteArticles }) {
  return (
    <div>
      <ArticlesList articles={favoriteArticles} />
    </div>
  );
}

Favorite.propTypes = {};

export default Favorite;
