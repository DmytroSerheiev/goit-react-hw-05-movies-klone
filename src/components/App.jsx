import { Home } from 'page/Home/Home';
import { Movie } from 'page/Movie/Movie';
import { MovieDetails } from 'page/MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />}>
            <Route path=":movieId" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
