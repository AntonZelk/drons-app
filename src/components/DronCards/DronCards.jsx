import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Card from '../Card/Card';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

import classes from './DronCards.module.scss';

const DronCards = () => {
  const selectedDrons = useSelector((state) => state.drons.selectedDrons.drons);
  const isLoading = useSelector((state) => state.drons.isLoading);
  const isError = useSelector((state) => state.drons.isError);

  return (
    <React.Fragment>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className={classes.dronCards}>
          {selectedDrons.map((dron) => (
            <NavLink to={`/dron/${dron.id}`} key={dron.id}>
              <Card dron={dron} key={dron.id} />
            </NavLink>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default DronCards;
