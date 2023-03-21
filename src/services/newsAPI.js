import axios from 'axios';
import toast from 'react-hot-toast';

const KEY = 'api-key=FkwbJGfP14XWxusZUCJoMcZVAjJAXmz6';

// const BASE_URL = 'https://api.nytimes.com/svc';
const MOST_POPULAR_NEWS = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;

const agent = axios.create({
  baseURL: 'https://api.nytimes.com/svc',
  params: { 'api-key': 'FkwbJGfP14XWxusZUCJoMcZVAjJAXmz6' },
});

export async function getRecentArticles() {
  try {
    const articles = await axios.get(MOST_POPULAR_NEWS);

    return articles?.data?.results;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

export async function getArticlesByQuery(query, controller) {
  // https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&api-key=yourkey
  try {
    const articles = await agent.get('/search/v2/articlesearch.json', {
      params: {
        q: query,
        signal: controller.signal,
      },
    });

    return articles?.data?.response;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

export async function getSectionList() {
  // https://api.nytimes.com/svc/news/v3/content/section-list.json
  try {
    const sectionList = await agent.get('/news/v3/content/section-list.json');

    return sectionList?.data?.results;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

// Searh by category
// https://api.nytimes.com/svc/topstories/v2/{section}.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=yourkey

//  Search by date
// https://api.nytimes.com/svc/archive/v1/{year}/{month}/{day}.json?api-key=yourkey
//  example https://api.nytimes.com/svc/archive/v1/2023/03/20.json?api-key=yourkey
