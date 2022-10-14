import { Container, Header, Link } from './Appbar.styled';

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
    </Container>
  );
};
