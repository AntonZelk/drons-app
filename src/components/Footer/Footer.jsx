import React from 'react';
import { NavLink } from 'react-router-dom';

import CartSvg from '../UI/CartSvg/CartSvg';
import FavouriteSvg from '../UI/FavouriteSvg/FavouriteSvg';
import FindSvg from '../UI/FindSvg/FindSvg';
import HomeSvg from '../UI/HomeSvg/HomeSvg';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <NavLink exact to="/" activeClassName={classes.active}>
        <HomeSvg color="#939399" />
      </NavLink>
      <NavLink exact to="/favourite" activeClassName={classes.active}>
        <FavouriteSvg color="#939399" />
      </NavLink>
      <NavLink exact to="/find" activeClassName={classes.active}>
        <FindSvg color="#939399" />
      </NavLink>
      <NavLink exact to="/cart" activeClassName={classes.active}>
        <CartSvg color="#939399" />
      </NavLink>
    </footer>
  );
};

export default Footer;
