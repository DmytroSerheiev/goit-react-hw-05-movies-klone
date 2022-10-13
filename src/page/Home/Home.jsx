import { Link } from './Home.styled';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/Api';

export const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setTrandMovie(data.results));
  }, []);
  console.log(trandMovie);

  return (
    <div>
      <h1>Trending movie</h1>
      <ul>
        {trandMovie.map(movie => (
          <li key={movie.id}>
            <Link to={`movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
