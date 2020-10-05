import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'components/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
