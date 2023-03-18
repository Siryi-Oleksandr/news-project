import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { accentColor, textColor } from 'styles/colors';

export const Header = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  > nav {
    display: flex;
    gap: 69px;
    margin-right: 147px;

    /* @media screen and (min-width: 768px) {
      display: flex;
      gap: 44px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: 102px;
      gap: 69px;
    } */
  }
`;

export const LinkStyled = styled(NavLink)`
  padding: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(25 / 18);

  &.active {
    border-bottom: 1px solid ${accentColor};
  }

  &:hover,
  &:focus {
    color: ${accentColor};
  }
`;

export const LinkLogo = styled(Link)`
  padding: 10px 0;
  margin-right: 102px;
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  display: inline-block;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(44 / 32);
  }

  @media screen and (min-width: 1280px) {
    font-size: 42px;
    line-height: calc(57 / 42);
  }
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  width: 288px;
  padding: 4px 16px;
  font-family: 'Poppins';
  font-size: 14px;
  line-height: calc(24 / 14);
  letter-spacing: 0.02em;
  color: ${textColor};
  border: 1px solid ${textColor};
  border-radius: 20px;
  background: none;
  outline: none;

  &::placeholder {
    font-family: 'Poppins';
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: 0.02em;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  display: inline-block;
  width: 30px;
  height: 30px;
  border: none;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
