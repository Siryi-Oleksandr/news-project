import styled from 'styled-components';
import { whiteColor, grayColor, accentColor } from '../../styles/colors';

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;

  > img {
    object-fit: cover;
    min-width: 288px;
    height: 395px;
    border-radius: 4px;
  }
`;

export const ArtCategory = styled.p`
  position: absolute;
  display: flex;
  min-width: 96px;
  height: auto;
  padding: 4px 14px;
  margin: 0;
  left: 0px;
  top: 40px;
  background: rgba(68, 64, 247, 0.7);
  border-radius: 0px 4px 4px 0px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  justify-content: center;

  color: ${whiteColor};
`;

export const BtnAddToFavorite = styled.button`
  position: absolute;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  min-height: 10px;
  margin: 0;
  padding: 6px 12px 6px 12px;
  right: 12px;
  bottom: 12px;

  background: ${whiteColor};
  border-radius: 20px;

  font-weight: 500;
  font-size: 12px;
  line-height: calc(16 / 12);
  text-align: left;
  cursor: pointer;

  /* transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
`;

export const InfoWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;

  flex-direction: column;
`;

export const ArtTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 32px;
  font-weight: 700;
  line-height: calc(44 / 32);
  letter-spacing: -0.01em;
`;

export const ArtDescription = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);
`;

export const ArtDate = styled.span`
  font-size: 14px;
  line-height: calc(19 / 14);
  text-align: right;

  color: ${grayColor};
`;

export const ArtMoreInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ArtMoreInfoLink = styled.a`
  font-size: 18px;
  line-height: calc(24 / 18);

  color: ${accentColor};
`;

export const BtnReadMore = styled.button`
  text-decoration: underline;
  cursor: pointer;
  color: ${accentColor};
  background-color: transparent;
  border: none;
  outline: none;
`;
