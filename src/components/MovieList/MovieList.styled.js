import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const List = styled.ul`
  display: grid;
  max-width: 280px;
  justify-content: center;
  grid-auto-rows: auto;
  padding-top: 20px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px 16px;
  max-width: 1200px;
`;

export const MovieBoxCard = styled.li`
  display: flex;
  flex-direction: column;
  // align-items: center;
  border-radius: 6px;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
