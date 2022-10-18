import { MovieCard } from 'components/MovieCard/MovieCard';
import { Link, List, MovieBoxCard } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ collection }) => {
  const location = useLocation();
  const prevURL = location.pathname === '/' ? '/movie/' : '';
  return (
    <>
      <List>
        {collection.map(
          ({ id, title, poster_path, release_date, vote_average }) => (
            <MovieBoxCard key={id}>
              <Link to={`${prevURL}${id}`} state={{ from: location }}>
                <MovieCard
                  title={title}
                  id={id}
                  poster={poster_path}
                  releaseDate={release_date}
                  voteAverage={vote_average}
                />
              </Link>
            </MovieBoxCard>
          )
        )}
      </List>
    </>
  );
};
