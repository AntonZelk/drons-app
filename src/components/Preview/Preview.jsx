import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Preview.module.scss';

const Preview = () => {
  const previewDron = useSelector((state) => state.drons.preview);

  return (
    <section className={classes.preview}>
      <div className={classes.row}>
        {previewDron ? (
          <React.Fragment>
            <div className={classes.blockText}>
              <p className={classes.text}>Need for Speed</p>
              <h3 className={classes.name}>{previewDron.name}</h3>
              <p className={classes.price}>{previewDron.price} $</p>
            </div>
            <div className={classes.img}>
              <img src={previewDron.urlImg} alt="preview" />
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </section>
  );
};

export default Preview;
