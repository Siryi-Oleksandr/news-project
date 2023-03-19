import { List, Item } from './ArticlesList.styled';
import PropTypes from 'prop-types';
import Article from 'components/Article';

function ArticlesList({ articles, onAddArticle, onDeleteArticle }) {
  return (
    <List>
      {articles.map(article => {
        return (
          <Item key={article.id}>
            <Article
              article={article}
              onAddArticle={onAddArticle}
              onDeleteArticle={onDeleteArticle}
            />
          </Item>
        );
      })}
    </List>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      abstract: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
      media: PropTypes.array,
    })
  ).isRequired,
};

export default ArticlesList;
