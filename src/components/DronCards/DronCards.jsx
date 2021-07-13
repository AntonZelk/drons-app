import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

import classes from './DronCards.module.scss';

const DronCards = () => {
  const drons = useSelector((state) => state.drons.drons);

  return (
    <div className={classes.dronCards}>
      {drons.map((dron) => (
        <Card dron={dron} key={dron.id} />
      ))}
    </div>
  );
};

export default DronCards;
