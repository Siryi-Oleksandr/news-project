import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const LinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const LinkLogo = styled(Link)`
  margin-right: 102px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: calc(57 / 42);

  color: #111321;
`;
