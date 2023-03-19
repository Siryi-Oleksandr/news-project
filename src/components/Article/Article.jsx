import React from 'react';
import PropTypes from 'prop-types';
import {
  ArtCategory,
  ArtDate,
  ArtDescription,
  ArtMoreInfoLink,
  ArtMoreInfoWrapper,
  ArtTitle,
  BtnAddToFavorite,
  ImgWrapper,
  InfoWrapper,
} from './Article.styled';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { accentColor } from '../../styles/colors';
import { useState } from 'react';

const LS_KEY_FAVORITE_ARTICLES = 'favorite_articles';

function checkFavoriteArticle(id) {
  const savedArticles = JSON.parse(
    window.localStorage.getItem(LS_KEY_FAVORITE_ARTICLES)
  );
  if (savedArticles) {
    return savedArticles.some(article => article.id === id);
  }
  return false;
}

function Article({ article, onAddArticle, onDeleteArticle }) {
  const { id, url, abstract, title, section, published_date, media } = article;

  const [isFavoriteArticle, setIsFavoriteArticle] = useState(() =>
    checkFavoriteArticle(id)
  );

  const handleAddToFavorite = () => {
    onAddArticle(article);
    setIsFavoriteArticle(true);
  };

  const handleDeleteFromFavorite = () => {
    onDeleteArticle(id);
    setIsFavoriteArticle(false);
  };

  const imageUrl = media[0]['media-metadata'][2 ?? 1 ?? 0].url;

  return (
    <article>
      <ImgWrapper>
        <img src={imageUrl} alt={title} />
        <ArtCategory>{section}</ArtCategory>
        {!isFavoriteArticle ? (
          <BtnAddToFavorite type="button" onClick={handleAddToFavorite}>
            Add to favorite
            <AiOutlineHeart size="1.5em" />
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
          Read more
        </ArtMoreInfoLink>
      </ArtMoreInfoWrapper>
    </article>
  );
}

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
