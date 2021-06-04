import React from 'react'
import Head from 'next/head'

/* STYLED COMPONENTS */
import { Container } from '../styles/pages/home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>MyLife</title>
      </Head>
      <main >
        <h1>
          Hello MyLife
        </h1>
      </main>
    </Container>
  )
}

export default Home
