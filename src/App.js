import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { requestDrons } from './actions/dronsActions';

import HomePage from './pages/HomePage/HomePage';
import FavouritePage from './pages/FavouritePage/FavouritePage';
import DronDetailPage from './pages/DronDetailPage/DronDetailPage';
import FindPage from './pages/FindPage/FindPage';
import CartPage from './pages/CartPage/CartPage';

import './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  const requestItemsHandler = useCallback(() => {
    dispatch(requestDrons());
  }, [dispatch]);

  useEffect(() => {
    requestItemsHandler();
  }, [requestItemsHandler]);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/favourite" exact component={FavouritePage} />
          <Route path="/find" exact component={FindPage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/dron/:id" component={DronDetailPage} />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
