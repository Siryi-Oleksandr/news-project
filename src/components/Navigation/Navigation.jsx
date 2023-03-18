import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { LinkStyled, Header, LinkLogo } from './Navigation.styled';
import Loader from 'components/Loader';

function Navigation() {
  return (
    <>
      <Header>
        <nav>
          <LinkLogo to="/">News</LinkLogo>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/favorite">Favorite</LinkStyled>
          <LinkStyled to="/read">Read</LinkStyled>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default Navigation;
