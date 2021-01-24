/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Head from 'next/head';
import styled from 'styled-components';
import cookie from 'js-cookie';

import Header from './Header';
import Footer from './Footer';
import defaultOperators from '../constants/defaultOperators';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('https://i.playground.ru/p/bqd5IblL8GAbQxpoKovAgQ.jpeg') center center;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(245, 245, 245, 0.8);
  width: 30vw;
  height: 50vh;
  padding: 1em;
  border-radius: 20px;

  @media(max-width: 768px) {
    width: 50vw;
  }

  @media(max-width: 425px) {
    width: 80vw;
  }
`;

interface IMainLayout {
    children: any
    title?: string | string[]
}

export default function MainLayout({ children, title = 'Brave developers' }: IMainLayout) {
  if (!cookie.getJSON('operators') || cookie.get('operators') === '[]') {
    cookie.set('operators', JSON.stringify(defaultOperators), { expires: 7 });
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="brave developers" />
      </Head>
      <Header />
      <Main>
        <Content>
          {children}
        </Content>
      </Main>
      <Footer />
    </>
  );
}
