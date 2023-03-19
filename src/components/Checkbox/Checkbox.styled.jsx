import styled from 'styled-components';
import { accentColor } from '../../styles/colors';

export const Label = styled.label`
  position: relative;
  display: flex;
  gap: 5px;
  margin-left: auto;
  padding: 1px;
  width: 42px;
  height: 21px;
  border-radius: 10px;
  border: 1px solid ${accentColor};

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const CheckboxView = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: teal;

  transition: transform 250ms ease-in-out, background-color 250ms ease-in-out;
`;

export const Input = styled.input`
  /* visually-hidden */
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + span {
    transform: translateX(108%);
    background-color: orangered;
  }
`;
