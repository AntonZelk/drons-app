import React from 'react';
import BurgerSVG from '../BurgerSVG/BurgerSVG';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={classes.row}>
        <h1>Quadrojoy</h1>
        <div className={classes.burgerMenu}>
          <BurgerSVG width="22" viewBox="0 0 22 4" d="M1.66663 2H20.3333" />
          <BurgerSVG width="18" viewBox="0 0 18 4" d="M2 2L16 2" />
          <BurgerSVG width="12" viewBox="0 0 12 4" d="M2 2L10 2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
