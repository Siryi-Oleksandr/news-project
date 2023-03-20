import defaultImage from '../../images/not-article.png';
import { DefImgWrapper } from './NotArticles.styled';

function NotArticles() {
  return (
    <DefImgWrapper>
      <h1>You don't have any articles in this chapter</h1>
      <img src={defaultImage} alt="Not found any articles" />
    </DefImgWrapper>
  );
}

export default NotArticles;
