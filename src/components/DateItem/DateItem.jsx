import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import localeContext from '../../context/localeContext';

import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ArticlesList from 'components/ArticlesList';
import { BtnDate, Item } from './DateItem.styled';

function DateItem({ date }) {
  const [showArticles, setShowArticles] = useState(true);
  const LS_Context = useContext(localeContext);
  const { readArticles } = LS_Context;

  const filteredArticlesByDate = date => {
    const result = readArticles.filter(({ readDate }) => readDate === date);
    return result;
  };

  return (
    <Item>
      {showArticles ? (
        <>
          <BtnDate type="button" onClick={() => setShowArticles(false)}>
            {date}
            <FiChevronUp size="1.5em" />
          </BtnDate>
          <ArticlesList articles={filteredArticlesByDate(date)} />
        </>
      ) : (
        <BtnDate type="button" onClick={() => setShowArticles(true)}>
          {date}
          <FiChevronDown size="1.5em" />
        </BtnDate>
      )}
    </Item>
  );
}

DateItem.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateItem;
