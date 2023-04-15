import { Searchbar } from 'components/SearchBar/SearchBar';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'service/Api';
import { MovieList } from 'components/MovieList/MovieList';
import { Container } from './Movie.styled';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('query') ?? '';
  const [moviesCollection, setmoviesCollection] = useState([]);

  useEffect(() => {
    if (q) {
      getSearchMovies(q).then(data => setmoviesCollection(data.results));
    }
  }, [q]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <Container>
      <Searchbar onSubmit={q => updateQueryString(q)} />

      <MovieList collection={moviesCollection} />
      <Outlet />
    </Container>
  );
};
export default Movie;
