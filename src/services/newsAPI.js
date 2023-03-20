import axios from 'axios';
import toast from 'react-hot-toast';

//  API_KEY = 'FkwbJGfP14XWxusZUCJoMcZVAjJAXmz6'

const KEY = 'api-key=FkwbJGfP14XWxusZUCJoMcZVAjJAXmz6';
// const KEY = 'api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV';
// const BASE_URL = 'https://api.nytimes.com/svc';
const MOST_POPULAR_NEWS = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?${KEY}`;

const agent = axios.create({
  baseURL: 'https://api.nytimes.com/svc',
  params: { api_key: 'FkwbJGfP14XWxusZUCJoMcZVAjJAXmz6' },
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

export async function getMoviesByQuery(query, controller) {
  try {
    const movies = await agent.get('search/movie', {
      params: {
        query,
        signal: controller.signal,
      },
    });

    return movies?.data?.results;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

export async function getTrendingMovies() {
  try {
    const movies = await agent.get('trending/movie/day', {
      params: {
        language: 'en-US',
      },
    });
    if (movies.status === 204) {
      throw new Error('no movies');
    }
    return movies?.data?.results;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

export async function getMoviesDetailsById(id, controller) {
  try {
    const movie = await agent.get(`movie/${id}`, {
      params: {
        signal: controller.signal,
      },
    });

    return movie?.data;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

export async function getMovieCast(id, controller) {
  try {
    const actors = await agent.get(`movie/${id}/credits`, {
      params: {
        signal: controller.signal,
      },
    });

    return actors?.data?.cast;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

export async function getMovieReviews(id, controller) {
  try {
    const reviews = await agent.get(`movie/${id}/reviews`, {
      params: {
        signal: controller.signal,
      },
    });

    return reviews?.data?.results;
  } catch (error) {
    toast.error('Something went wrong 😥!');
    console.error(error);
  }
}
