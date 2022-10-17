import { Home } from 'page/Home/Home';
import { Movie } from 'page/Movie/Movie';
import { MovieDetails } from 'page/MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
