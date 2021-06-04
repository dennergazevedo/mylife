import React, { useState } from 'react';

/* STYLED COMPONENTS */
import {
  Container,
  Profile,
  Photo,
  Info,
  RoutesList,
  Title,
  Route,
  Help,
  Docs,
} from './styles';

/* ICONS */
import {
  HiChartSquareBar,
  HiUser,
  HiAcademicCap,
  HiBookOpen,
  HiUserAdd,
  HiCreditCard,
  HiBriefcase,
} from 'react-icons/hi';

import { FaBitcoin } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

const Menu: React.FC = () => {

  const [menu, setMenu] = useState(1);

  return (
    <Container>
      <Profile>
        <Photo src="https://i.imgur.com/7hpaFa7.png" alt="profile-photo" />
        <Info>
          <h1>Denner Azevedo</h1>
          <p>Administrator</p>
        </Info>
      </Profile>
      <RoutesList>
        <Title>General</Title>

        <Route className={menu === 1 ? 'active' : 'inactive'} onClick={() => setMenu(1)}>
          <HiChartSquareBar className="icon" />
          <span>Dashboard</span>
        </Route>

        <Route className={menu === 2 ? 'active' : 'inactive'} onClick={() => setMenu(2)}>
          <FiTarget className="icon" />
          <span>Goals</span>
        </Route>

        <Route className={menu === 3 ? 'active' : 'inactive'} onClick={() => setMenu(3)}>
          <HiUser className="icon" />
          <span>Account</span>
        </Route>

        <Title className="titleSpace">Study</Title>

        <Route className={menu === 4 ? 'active' : 'inactive'} onClick={() => setMenu(4)}>
          <HiAcademicCap className="icon" />
          <span>Graduation</span>
        </Route>

        <Route className={menu === 5 ? 'active' : 'inactive'} onClick={() => setMenu(5)}>
          <HiBookOpen className="icon" />
          <span>Courses</span>
        </Route>

        <Route className={menu === 6 ? 'active' : 'inactive'} onClick={() => setMenu(6)}>
          <HiUserAdd className="icon" />
          <span>Personal</span>
        </Route>

        <Title className="titleSpace">Finance</Title>

        <Route className={menu === 7 ? 'active' : 'inactive'} onClick={() => setMenu(7)}>
          <HiBriefcase className="icon" />
          <span>General</span>
        </Route>

        <Route className={menu === 8 ? 'active' : 'inactive'} onClick={() => setMenu(8)}>
          <HiCreditCard className="icon" />
          <span>Credit Card</span>
        </Route>

        <Route className={menu === 9 ? 'active' : 'inactive'} onClick={() => setMenu(9)}>
          <FaBitcoin className="icon" />
          <span>Investments</span>
        </Route>
      </RoutesList>
      <Help>
        <h1>Need Help?</h1>
        <p>Check our docs</p>
        <Docs>Documentation</Docs>
      </Help>
    </Container>
  );
}

export default Menu;
