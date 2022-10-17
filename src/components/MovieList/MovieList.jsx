import { MovieCard } from 'components/MovieCard/MovieCard';
import { Link } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ collection }) => {
  const location = useLocation();
  console.log(location.pathname);
  const prevURL = location.pathname === '/' ? '/movie/' : '';
  return (
    <>
      <ul>
        {collection.map(movie => (
          <li key={movie.id}>
            <Link to={`${prevURL}${movie.id}`} state={{ from: location }}>
              <MovieCard title={movie.title} id={movie.id} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
