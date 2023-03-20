import ArticlesList from 'components/ArticlesList';
import NotArticles from 'components/NotArticles';
import React from 'react';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import localeContext from '../../context/localeContext';

function Favorite({ favoriteArticles, onAddArticle, onDeleteArticle }) {
  const isNotArticles = favoriteArticles.length === 0;
  const ctx = useContext(localeContext);
  console.log(ctx);

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
