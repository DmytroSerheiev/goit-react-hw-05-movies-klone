import styled from 'styled-components';

export const Poster = styled.img`
  width: 100%;
  height: 474px;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const InfoTextBox = styled.div`
  padding-top: 12px;
  padding-left: 12px;
`;

export const Tittle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0.04em;
`;

export const Info = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.04em;
`;

export const Rate = styled.span`
  background-color: orange;
  padding: 3px 12px;
  color: #000;
  border-radius: 5px;
`;
