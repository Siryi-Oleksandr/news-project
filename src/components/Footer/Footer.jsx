import React from 'react';
// import PropTypes from 'prop-types';
import { FooterStyled } from './Footer.styled';

function Footer(props) {
  return (
    <FooterStyled>
      <p>&#169; Produced by Oleksandr Siryi</p>
    </FooterStyled>
  );
}

Footer.propTypes = {};

export default Footer;
