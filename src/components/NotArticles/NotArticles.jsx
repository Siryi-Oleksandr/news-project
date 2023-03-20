import defaultImage from '../../images/not-article.png';
import { DefImgWrapper } from './NotArticles.styled';

function NotArticles() {
  return (
    <DefImgWrapper>
      <h1>We haven’t found news from this category</h1>
      <img src={defaultImage} alt="Not found any articles" />
    </DefImgWrapper>
  );
}

export default NotArticles;
