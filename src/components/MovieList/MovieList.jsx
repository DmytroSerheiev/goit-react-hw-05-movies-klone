import { MovieCard } from 'components/MovieCard/MovieCard';
import { Link } from './MovieList.styled';

export const MovieList = ({ collection }) => {
  return (
    <ul>
      {collection.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`}>
            <MovieCard title={movie.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
