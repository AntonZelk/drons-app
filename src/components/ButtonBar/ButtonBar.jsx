import React from 'react';

import BarBtn from '../UI/BarBtn/BarBtn';

import classes from './ButtonBar.module.scss';

const ButtonBar = () => {
  return (
    <div className={classes.buttonBar}>
      <BarBtn name="All" />
      <BarBtn name="Cheap" />
      <BarBtn name="Best" />
      <BarBtn name="Fast" />
    </div>
  );
};

export default ButtonBar;
