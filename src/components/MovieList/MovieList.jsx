import { MovieCard } from 'components/MovieCard/MovieCard';
import { Link } from './MovieList.styled';
export const MovieList = ({ collection, query }) => {
  // const linkURL = !query ? 'movie/' : '';
  return (
    <>
      {/* {query ? <h2>Movie by "{query}"</h2> : null} */}
      <ul>
        {collection.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>
              <MovieCard title={movie.title} id={movie.id} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
