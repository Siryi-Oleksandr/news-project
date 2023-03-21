import React, { useState, useContext } from 'react';
import localeContext from '../../context/localeContext';
import PropTypes from 'prop-types';
import {
  ArtCategory,
  ArtDate,
  ArtDescription,
  ArtMoreInfoLink,
  ArtMoreInfoWrapper,
  ArtTitle,
  BtnAddToFavorite,
  BtnReadMore,
  ImgWrapper,
  InfoWrapper,
} from './Article.styled';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { accentColor } from '../../styles/colors';
import defaultImage from '../../images/not-article.png';

const LS_KEY_FAVORITE_ARTICLES = 'favorite_articles';

function Article({ article }) {
  const { id, url, abstract, title, section, published_date, media } = article;

  // get locale storage context with methods
  const LS_Context = useContext(localeContext);
  const { addToFavoriteArticle, deleteArticle, addToReadArticle } = LS_Context;

  // useStates
  const [isFavoriteArticle, setIsFavoriteArticle] = useState(() =>
    checkFavoriteArticle(id)
  );

  //   Read logic (now nowhere used)
  // const [isReadArticle, setIsReadArticle] = useState(() =>
  //   checkReadArticle(readArticles, id)
  // );

  // Functions

  const handleAddToFavorite = () => {
    addToFavoriteArticle(article);
    setIsFavoriteArticle(true);
  };

  const handleDeleteFromFavorite = () => {
    deleteArticle(id);
    setIsFavoriteArticle(false);
  };
  // TODO  Read logic
  const handleAddToRead = () => {
    addToReadArticle(article);
  };

  const imageUrl =
    media.length !== 0 && media
      ? media[0]['media-metadata'][2 ?? 1 ?? 0]?.url ||
        media[0]['media-metadata'][1 ?? 0]?.url ||
        media[0]['media-metadata'][0]?.url
      : defaultImage;

  return (
    <article>
      <ImgWrapper>
        <img src={imageUrl} alt={title} />
        <ArtCategory>{section}</ArtCategory>

        {!isFavoriteArticle ? (
          <BtnAddToFavorite type="button" onClick={handleAddToFavorite}>
            Add to favorite
            <AiOutlineHeart size="1.5em" fill={accentColor} />
          </BtnAddToFavorite>
        ) : (
          <BtnAddToFavorite type="button" onClick={handleDeleteFromFavorite}>
            Remove from favorite
            <AiFillHeart size="1.5em" fill={accentColor} />
          </BtnAddToFavorite>
        )}
      </ImgWrapper>

      <InfoWrapper>
        <ArtTitle>{title}</ArtTitle>
        <ArtDescription>{abstract}</ArtDescription>
      </InfoWrapper>
      <ArtMoreInfoWrapper>
        <ArtDate>{published_date}</ArtDate>

        <ArtMoreInfoLink target="_blank" rel="noreferrer" href={url}>
          <BtnReadMore type="button" onClick={handleAddToRead}>
            Read more
          </BtnReadMore>
        </ArtMoreInfoLink>
      </ArtMoreInfoWrapper>
    </article>
  );
}

// Helpers functions
function checkFavoriteArticle(id) {
  const savedArticles = JSON.parse(
    window.localStorage.getItem(LS_KEY_FAVORITE_ARTICLES)
  );
  if (savedArticles) {
    return savedArticles.some(article => article.id === id);
  }
  return false;
}

// function checkReadArticle(articles, articleId) {
//   const isUnique = articles.some(article => article.id !== articleId);
//   return isUnique;
// }

Article.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    published_date: PropTypes.string.isRequired,
    media: PropTypes.array,
  }).isRequired,
};

export default Article;
