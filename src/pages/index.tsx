import React from 'react'
import Head from 'next/head'

/* STYLED COMPONENTS */
import { Main, Container } from '../styles/pages/home'

/* COMPONENTS */
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Main>
      <Head>
        <title>MyLife</title>
      </Head>
      <Container >
        <Header />
      </Container>
    </Main>
  )
}

export default Home
