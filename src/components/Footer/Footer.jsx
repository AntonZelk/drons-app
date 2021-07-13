import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src="/img/home.png" alt="home" color="rgba(147, 147, 153, 1)" />
      <img src="/img/favourite.png" alt="favourite" />
      <img src="/img/find.png" alt="find" />
      <img src="/img/cart.png" alt="cart" />
    </footer>
  );
};

export default Footer;
