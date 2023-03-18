import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import PropTypes from 'prop-types';
import { Container } from './App.styled';
import GlobalStyle from 'GlobalStyle';
import Navigation from 'components/Navigation';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('pages/Home'));
const Read = lazy(() => import('pages/Read'));
const Favorite = lazy(() => import('pages/Favorite'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/read" element={<Read />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 2500 }} />
    </Container>
  );
}

App.propTypes = {};

export default App;
