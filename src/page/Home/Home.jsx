import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { Container, Tittle } from './Home.styled';

const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies(page).then(data => setTrandMovie(data.results));
  }, [page]);
  const handleNextPage = () => {
    setPage(page + 1);
  };
  // console.log(trandMovie);

  return (
    <Container>
      <button onClick={handleNextPage}>NextPage</button>
      <Tittle>Trending movie</Tittle>
      <MovieList collection={trandMovie} />
    </Container>
  );
};

export default Home;
