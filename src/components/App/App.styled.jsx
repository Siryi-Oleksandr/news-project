import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 15px 15px;

  max-width: 1280px;
  border-radius: 8px;
  transition: background-color 250ms ease-in-out;

  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
