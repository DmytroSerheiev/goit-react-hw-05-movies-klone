import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      <div>Movie Details</div>
      <Outlet />
    </div>
  );
};
