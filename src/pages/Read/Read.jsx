import NotArticles from 'components/NotArticles';
import React from 'react';
import { useContext } from 'react';
import localeContext from '../../context/localeContext';
import DateList from 'components/DateList';

function Read() {
  const LS_Context = useContext(localeContext);
  const { readArticles } = LS_Context;
  const isNotArticles = readArticles.length === 0;

  return <div>{isNotArticles ? <NotArticles /> : <DateList />}</div>;
}

Read.propTypes = {};

export default Read;
