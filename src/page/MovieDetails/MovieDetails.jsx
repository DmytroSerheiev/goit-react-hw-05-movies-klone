import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMoviesByID } from 'service/Api';

export const MovieDetails = () => {
  const [first, setfirst] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesByID(movieId).then(data => setfirst(data));
  }, [movieId]);

  const { title, genres, poster_path, overview } = first;
  console.log(title);
  const base_url = 'https://image.tmdb.org/t/p/';
  const size = 'w500';

  return (
    <div>
      <div className="modal-film__img">
        <div className="modal-film__wrapper">
          <img
            src={`${base_url}${size}${poster_path}`}
            alt={title}
            className="modal-film__poster"
            loading="lazy"
          />
        </div>
      </div>
      <div className="modal-film__description">
        <h2 className="modal-film__title">{title}</h2>
        <h3 className="modal-film__about">About</h3>
        <p className="modal-film__abot-text">{overview}</p>
      </div>
      <Outlet />
    </div>
  );
};
