import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const userKey = '6fe1e9d5fbaeb01db6cc1b91ad7172fe';

export const getTrendingMovies = async (page = 1) => {
  try {
    const url = `3/trending/movie/day?api_key=${userKey}&page=${page}`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchMovies = async (searchQuery, page = 1) => {
  try {
    const url = `3/search/movie?api_key=${userKey}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getMoviesByID = async movieID => {
  try {
    const url = `3/movie/${movieID}?api_key=${userKey}&language=en-US`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCastByID = async movieID => {
  try {
    const url = `3/movie/${movieID}/credits?api_key=${userKey}&language=en-US`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviewsByID = async movieID => {
  try {
    const url = `3/movie/${movieID}/reviews?api_key=${userKey}&language=en-US`;

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
