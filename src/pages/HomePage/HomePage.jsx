import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { requestDrons } from '../../actions/dronsActions';
import Header from '../../components/Header/Header';
import Preview from '../../components/Preview/Preview';

import classes from './HomePage.module.scss';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const dispatch = useDispatch();

  const requestItemsHandler = useCallback(() => {
    dispatch(requestDrons());
  }, [dispatch]);

  useEffect(() => {
    requestItemsHandler();
  }, [requestItemsHandler]);

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <Preview />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
