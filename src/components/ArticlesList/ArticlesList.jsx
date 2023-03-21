import { List, Item } from './ArticlesList.styled';
import PropTypes from 'prop-types';
import Article from 'components/Article';

function ArticlesList({ articles }) {
  return (
    <List>
      {articles.map(article => {
        return (
          <Item key={article.id}>
            <Article article={article} />
          </Item>
        );
      })}
    </List>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesList;
