import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: ${p => p.theme.fontWeights.heading};

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const List = styled.ul`
  display: grid;
  max-width: 960px;
  grid-gap: 32px 16px;
  justify-content: center;
  grid-auto-rows: auto;
  padding-top: ${p => p.theme.space[3]};
  padding-bottom: ${p => p.theme.space[4]};
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(3, 1fr);
`;

export const MovieBoxCard = styled.li`
  display: flex;
  flex-direction: column;
  // align-items: center;
  border-radius: 6px;
  border: 1px solid #000;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
