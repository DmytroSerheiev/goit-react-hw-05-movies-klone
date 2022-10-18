import PropTypes from 'prop-types';
import { Info, InfoTextBox, Poster, Rate, Tittle } from './MovieCard.styled';

const generatePosterImgLink = poster_path => {
  const basePosterUrl = 'https://image.tmdb.org/t/p/';
  const fileSize = `w300`;

  return `${basePosterUrl}${fileSize}${poster_path}`;
};

export const MovieCard = ({
  id,
  title,
  poster,
  releaseDate,
  voteAverage = 1,
}) => {
  return (
    <>
      <div>
        <Poster
          src={generatePosterImgLink(poster)}
          alt={title}
          loading="lazy"
        />
      </div>
      <InfoTextBox>
        <Tittle>{title.toUpperCase()}</Tittle>
        <Info>
          {new Date(releaseDate).getFullYear()}
          <Rate>{voteAverage.toFixed(1)}</Rate>
        </Info>
      </InfoTextBox>
    </>
  );
};
MovieCard.propTypes = { MovieCard: PropTypes.string };
