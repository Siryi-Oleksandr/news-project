import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FcSearch } from 'react-icons/fc';

import {
  LinkStyled,
  Header,
  LinkLogo,
  SearchBtn,
  Input,
  Form,
} from './SharedLayout.styled';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import Checkbox from 'components/Checkbox/Checkbox';
import { useContext } from 'react';
import localeContext from '../../context/localeContext';

function SharedLayout({ toggleTheme }) {
  const LS_Context = useContext(localeContext);
  const { handleSubmit } = LS_Context;

  return (
    <>
      <Header>
        <LinkLogo to="/">News</LinkLogo>
        <nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/favorite">Favorite</LinkStyled>
          <LinkStyled to="/read">Read</LinkStyled>
        </nav>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="query" placeholder="Search" />
          <SearchBtn type="submit">
            <FcSearch size="1.5em" />
          </SearchBtn>
        </Form>
        <Checkbox toggleTheme={toggleTheme} />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default SharedLayout;
