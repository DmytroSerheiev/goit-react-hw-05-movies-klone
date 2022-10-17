import { Box } from 'components/common/Box';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { getMoviesByID } from 'service/Api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId) {
      getMoviesByID(movieId).then(data => setMovie(data));
    }
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/movie';
  const {
    title,
    genres = [],
    poster_path,
    overview,
    vote_average = 1,
    release_date = '',
  } = movie;
  const base_url = 'https://image.tmdb.org/t/p/';
  const size = 'w300';
  const genresList = genres.map(genre => genre.name).join(', ');
  const releaseYear = release_date.split('-').slice(0, 1).join('');
  return (
    <>
      <Link to={backLinkHref}>Back to </Link>
      <Box display="flex" p={4}>
        <div className="modal-film__img">
          <img
            src={poster_path && `${base_url}${size}${poster_path}`}
            alt={title}
            className="modal-film__poster"
            loading="lazy"
          />
        </div>
        <Box p={2} className="modal-film__description">
          <h2 className="modal-film__title">
            {title}({releaseYear})
          </h2>
          <p>User Score {vote_average.toFixed(1) * 10}%</p>
          <h3 className="modal-film__about">About</h3>
          <p className="modal-film__abot-text">{overview}</p>
          <h3 className="modal-film__about">Genres</h3>
          <p className="modal-film__abot-text">{genresList}</p>
        </Box>
      </Box>
      <p>Additional Information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
