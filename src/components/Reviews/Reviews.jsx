import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsByID } from 'service/Api';

export const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieReviewsByID(movieId).then(data => setReview(data.results));
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(({ author, content }) => (
            <li>
              <h3>Author:{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Reviews not found</h2>
      )}
    </div>
  );
};
