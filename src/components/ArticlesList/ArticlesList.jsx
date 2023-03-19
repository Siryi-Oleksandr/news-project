import { NavLink, useLocation } from 'react-router-dom';
import { List, Item, ImgWrapper, InfoWrapper } from './ArticlesList.styled';
import PropTypes from 'prop-types';
// import defaultImg from '../../images/movie-pic.jpg';

function ArticlesList({ articles }) {
  return (
    <List>
      {articles.map(
        ({
          id,
          url,
          abstract,
          title,
          section,
          subsection,
          published_date,
          media,
        }) => {
          // const mediaUrl = media[0].media - metadata[2].url;
          // console.log(mediaUrl);
          return (
            <li key={id}>
              <article>
                <div>
                  <img src="" alt="" />
                  <p>{section}</p>
                  <button type="button">Add to favorite</button>
                </div>
              </article>
              <div>
                <h2>{title}</h2>
                <p>{abstract}</p>
              </div>
              <div>
                <span>{published_date}</span>

                <a target="_blank" rel="noreferrer" href={url}>
                  Read more
                </a>
              </div>
            </li>
          );
        }
      )}
    </List>
  );
}

// ArticlesList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       poster_path: PropTypes.string,
//       name: PropTypes.string,
//       original_title: PropTypes.string,
//       vote_average: PropTypes.number,
//       vote_count: PropTypes.number,
//     })
//   ).isRequired,
// };

export default ArticlesList;
