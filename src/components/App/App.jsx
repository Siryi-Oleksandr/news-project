import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { GlobalStyle } from 'GlobalStyle';

function App() {
  return (
    <Container>
      <h1>My App</h1>
      <GlobalStyle />
    </Container>
  );
}

App.propTypes = {};

export default App;
