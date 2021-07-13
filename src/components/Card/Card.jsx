import React from 'react';

import classes from './Card.module.scss';

const Card = ({ dron }) => {
  return (
    <div className={classes.card}>
      <div className={classes.row}>
        <img src={dron.urlImg} alt="dron" />
        <h3 className={classes.name}>{dron.name}</h3>
        <div className={classes.info}>
          <span className={classes.price}>{dron.price} $</span>
          <div className={classes.rating}>
            <img src="/img/star.png" alt="star" />
            <span className={classes.ratingNum}>{dron.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
