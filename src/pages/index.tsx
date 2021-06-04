import React from 'react'
import Head from 'next/head'

/* STYLED COMPONENTS */
import { Main, Container, Body } from '../styles/pages/home'

/* COMPONENTS */
import Header from '../components/Header'
import Menu from '../components/Menu'

const Home: React.FC = () => {
  return (
    <Main>
      <Head>
        <title>MyLife</title>
      </Head>
      <Container >
        <Header />
        <Body>
          <Menu />
        </Body>
      </Container>
    </Main>
  )
}

export default Home
