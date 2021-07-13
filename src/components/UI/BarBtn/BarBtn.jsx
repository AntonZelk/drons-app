import React from 'react';

import classes from './BarBtn.module.scss';

const BarBtn = ({ name }) => {
  return (
    <div className={classes.barBtn}>
      <span>{name}</span>
    </div>
  );
};

export default BarBtn;
