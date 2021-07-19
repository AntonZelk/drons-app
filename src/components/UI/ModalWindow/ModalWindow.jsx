import React from 'react';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../../actions/dronsActions';
import classes from './ModalWindow.module.scss';

const ModalWindow = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.container}>
      <div className={classes.background}></div>
      <div className={classes.modalWindow}>
        <img src="/img/modal.png" alt="car" className={classes.img} />
        <p className={classes.text}>Ваш заказ принят</p>
        <button
          className={classes.btn}
          onClick={() => dispatch(changeModal(false))}
        >
          Ок
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
