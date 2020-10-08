import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from 'components/Login';
import Home from 'components/Home';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/contacts" component={Home} />

    </Switch>
  );
}

export default App;
