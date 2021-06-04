import React from 'react'

/* STYLED COMPONENTS */
import {
  Container,
  Section
} from './styles'

/* ASSETS */
import logo from '../../assets/Logo.svg'

const Header: React.FC = () => {
  return (
    <Container>
      <Section>
        <img src={logo} alt='logo' />
      </Section>
    </Container>
  );
}

export default Header;
