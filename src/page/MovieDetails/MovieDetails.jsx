import { Box } from 'components/common/Box';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMoviesByID } from 'service/Api';

export const MovieDetails = () => {
  const [first, setfirst] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMoviesByID(movieId).then(data => setfirst(data));
    }
  }, [movieId]);

  const { title, genres = [], poster_path, overview, vote_average = 1 } = first;
  console.log(title);
  const base_url = 'https://image.tmdb.org/t/p/';
  const size = 'w300';
  const genresList = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <Box display="flex" p={4}>
        <div className="modal-film__img">
          <img
            src={`${base_url}${size}${poster_path}`}
            alt={title}
            className="modal-film__poster"
            loading="lazy"
          />
        </div>
        <Box p={2} className="modal-film__description">
          <h2 className="modal-film__title">{title}</h2>
          <p>User Score {vote_average.toFixed(1) * 10}%</p>
          <h3 className="modal-film__about">About</h3>
          <p className="modal-film__abot-text">{overview}</p>
          <h3 className="modal-film__about">Genres</h3>
          <p className="modal-film__abot-text">{genresList}</p>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};
