import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'components/Login';
import Home from 'components/Home';
import PrivateRoute from './PrivateRoute';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} isAuth={isAuth} />
      <PrivateRoute
        allow={isAuth}
        path="/contacts"
        exact
        component={Home}
        redirectTo="/"
      />
      {/* <Route exact path="/contacts" component={() => <Home />} /> */}
    </Switch>
  );
}

export default App;
