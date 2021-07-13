import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

import './App.module.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
