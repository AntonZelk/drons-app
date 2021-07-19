import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDrons } from '../../../actions/dronsActions';

import classes from './BarBtn.module.scss';

const BarBtn = ({ name }) => {
  const dispatch = useDispatch();

  const drons = useSelector((state) => state.drons.drons);
  const selectedBtn = useSelector(
    (state) => state.drons.selectedDrons.selectedBtn
  );

  const onClickHandler = () => {
    dispatch(changeDrons(drons, name));
  };

  return (
    <div
      className={
        selectedBtn === name
          ? classes.activeBtn + ' ' + classes.barBtn
          : classes.barBtn
      }
      onClick={() => {
        onClickHandler();
      }}
    >
      <span className={classes.text}>{name}</span>
    </div>
  );
};

export default BarBtn;
