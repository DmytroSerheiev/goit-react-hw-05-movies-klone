import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';

const Home = lazy(() => import('../page/Home/Home'));
const Movie = lazy(() => import('../page/Movie/Movie'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
