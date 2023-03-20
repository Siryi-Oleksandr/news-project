import ArticlesList from 'components/ArticlesList';
import NotArticles from 'components/NotArticles';
import React from 'react';
// import PropTypes from 'prop-types';

function Favorite({ favoriteArticles, onAddArticle, onDeleteArticle }) {
  const isNotArticles = favoriteArticles.length === 0;
  return (
    <div>
      {isNotArticles ? (
        <NotArticles />
      ) : (
        <ArticlesList
          articles={favoriteArticles}
          onAddArticle={onAddArticle}
          onDeleteArticle={onDeleteArticle}
        />
      )}
    </div>
  );
}

Favorite.propTypes = {};

export default Favorite;
