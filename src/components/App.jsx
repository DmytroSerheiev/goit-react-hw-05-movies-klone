import { Home } from 'page/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<div></div>}></Route>
        </Route>
      </Routes>
    </>
  );
};
