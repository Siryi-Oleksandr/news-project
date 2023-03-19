import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  width: 100%;

  &:not(:last-child) {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;
