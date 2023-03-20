import ArticlesList from 'components/ArticlesList';
import NotArticles from 'components/NotArticles';
import React from 'react';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import localeContext from '../../context/localeContext';

function Read() {
  const LS_Context = useContext(localeContext);
  const { readArticles } = LS_Context;
  const isNotArticles = readArticles.length === 0;

  return (
    <div>
      {isNotArticles ? (
        <NotArticles />
      ) : (
        <ArticlesList articles={readArticles} />
      )}
    </div>
  );
}

Read.propTypes = {};

export default Read;
