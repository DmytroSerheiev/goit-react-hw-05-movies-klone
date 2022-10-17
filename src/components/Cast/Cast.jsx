import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastByID } from 'service/Api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieCastByID(movieId).then(data => setCast(data.cast));
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const base_url = 'https://image.tmdb.org/t/p/';
  const size = 'w200';

  return (
    <div>
      <ul>
        {cast.map(({ profile_path, name }) => (
          <li>
            <img
              src={`${base_url}${size}${profile_path}`}
              alt={name}
              loading="lazy"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
