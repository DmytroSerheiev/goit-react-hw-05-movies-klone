import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'service/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { Container, Tittle } from './Home.styled';

const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setTrandMovie(data.results));
  }, []);
  // console.log(trandMovie);

  return (
    <Container>
      <Tittle>Trending movie</Tittle>
      <MovieList collection={trandMovie} />
    </Container>
  );
};

export default Home;
