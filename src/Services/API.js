import axios from 'axios';


const KEY_API = '35e0acb18456e1bafb134cbae820a65c';

export const fetchTrendingWeek = axios.get(
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY_API}`,
);

export const fetchCast = movieId =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`,
  );

export const fetchMovieId = movieId =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=en-US`,
  );

export const fetchQueryMovie = (query, page) =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=en-US&${query}&page=${page}&include_adult=false`,
  );

export const fetchReviewsMovie = movieId =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`,
  );
