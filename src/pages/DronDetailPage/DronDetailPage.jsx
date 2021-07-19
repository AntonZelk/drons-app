import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import { changeModal, setCurrentDron } from '../../actions/dronsActions';

import ModalWindow from '../../components/UI/ModalWindow/ModalWindow';

import classes from './DronDetailPage.module.scss';

const DronDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const drons = useSelector((state) => state.drons.drons);
  const currentDron = useSelector((state) => state.drons.currentDron);
  const openModal = useSelector((state) => state.drons.openModal);

  const setCurrentItemHandler = useCallback(() => {
    dispatch(setCurrentDron(drons, params.id));
  }, [dispatch, params, drons]);

  useEffect(() => {
    setCurrentItemHandler();
  }, [setCurrentItemHandler]);

  return (
    <React.Fragment>
      {openModal ? <ModalWindow /> : null}
      <div className={classes.container}>
        <main className={classes.main}>
          <div className={classes.row}>
            <NavLink to={`/`}>
              <div className={classes.back}>
                <img src="/img/back.png" alt="back" />
              </div>
            </NavLink>
            {currentDron !== undefined ? (
              <div className={classes.dron}>
                <div className={classes.img}>
                  <img src={currentDron.detailImg} alt={currentDron.name} />
                </div>
                <p className={classes.description}>Ordinary quadcopter</p>
                <h2 className={classes.name}>{currentDron.name}</h2>
                <p className={classes.price}>{currentDron.price} $</p>
                <p className={classes.text}>{currentDron.text}</p>

                <input
                  type="text"
                  placeholder="Имя"
                  id="name"
                  className={classes.inpName}
                  autoComplete="off"
                />
                <NumberFormat
                  allowEmptyFormatting
                  mask="_"
                  format="+375 (##)###-##-##"
                  className={classes.fhone}
                />
                <button
                  className={classes.btn}
                  onClick={() => dispatch(changeModal(true))}
                >
                  Заказать
                </button>
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default DronDetailPage;
