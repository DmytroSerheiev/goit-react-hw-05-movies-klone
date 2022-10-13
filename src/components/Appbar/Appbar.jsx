import { Container, Header, Link } from './Appbar.styled';
import { Outlet } from 'react-router-dom';

export const Appbar = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movie">Movie</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
