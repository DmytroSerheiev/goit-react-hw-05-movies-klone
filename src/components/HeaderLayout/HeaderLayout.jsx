import { Appbar } from 'components/Appbar/Appbar';
import { Outlet } from 'react-router-dom';

export const HeaderLayout = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};
