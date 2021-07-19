import React from 'react';

import ButtonBar from '../ButtonBar/ButtonBar';
import DronCards from '../DronCards/DronCards';

import classes from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <ButtonBar />
      <h2 className={classes.title}>All Quadcopters</h2>
      <DronCards />
    </section>
  );
};

export default Gallery;
