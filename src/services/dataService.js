import defaultImage from '../images/not-article.png';

const baseImageUrl = 'https://static01.nyt.com/';

export function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

export function handleDate(articles) {
  const allDates = articles.map(({ readDate }) => readDate);

  const uniqueDates = allDates.filter(
    (date, index, array) => array.indexOf(date) === index
  );

  return uniqueDates;
}

export function handleSearchArticles(articles) {
  const handleArticles = articles.map(
    ({ abstract, headline, news_desk, web_url, _id, pub_date, multimedia }) => {
      const handleArticleImageUrl =
        multimedia[0]?.url || multimedia[1]?.url || multimedia[2]?.url;
      return {
        abstract,
        id: _id,
        title: headline.main || headline.print_headline,
        url: web_url,
        section: news_desk,
        published_date: pub_date.split('T')[0].split('-').join('/'),
        mediaUrl: handleArticleImageUrl
          ? baseImageUrl + handleArticleImageUrl
          : defaultImage,
      };
    }
  );

  return handleArticles;
}

export function handleResentArticles(articles) {
  const handleArticles = articles.map(
    ({ id, url, abstract, title, section, published_date, media }) => {
      const imageUrl =
        media.length !== 0 && media
          ? media[0]['media-metadata'][2 ?? 1 ?? 0]?.url ||
            media[0]['media-metadata'][1 ?? 0]?.url ||
            media[0]['media-metadata'][0]?.url
          : defaultImage;

      return {
        abstract,
        id,
        title,
        url,
        section,
        published_date: published_date.split('-').join('/'),
        mediaUrl: imageUrl,
      };
    }
  );

  return handleArticles;
}

export function handleArticlesByCategory(articles) {
  const handleArticles = articles.map(
    ({
      abstract,
      title,
      byline,
      section,
      url,
      published_date,
      uri,
      multimedia,
    }) => {
      const imageUrl =
        multimedia && multimedia.length !== 0
          ? multimedia[3]?.url ||
            multimedia[2]?.url ||
            multimedia[1]?.url ||
            multimedia[0]?.url
          : defaultImage;
      return {
        abstract,
        id: uri ?? published_date,
        title: title || byline,
        url,
        section,
        published_date: published_date.split('T')[0].split('-').join('/'),
        mediaUrl: imageUrl,
      };
    }
  );

  return handleArticles;
}
