import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/Api';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setTrandMovie(data.results));
  }, []);
  // console.log(trandMovie);

  return (
    <div>
      <h1>Trending movie</h1>
      <MovieList collection={trandMovie} />
    </div>
  );
};
