import styled from 'styled-components';
import { textColor, grayColor } from '../../styles/colors';

export const BtnDate = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${textColor};
  cursor: pointer;
`;

export const Item = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid ${grayColor};
`;
