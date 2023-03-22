import styled from 'styled-components';
import { categoryBtnColor, whiteColor } from '../../styles/colors';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CategoryBtn = styled.button`
  padding: 8px 24px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  line-height: calc(16 / 12);
  text-align: center;
  border: 1px solid ${categoryBtnColor};
  border-radius: 15px;
  cursor: pointer;
  color: ${categoryBtnColor};
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: ${categoryBtnColor};
    color: ${whiteColor};
  }
`;

export const ItemOther = styled.li`
  position: relative;
`;
