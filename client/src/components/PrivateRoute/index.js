import { Route, Redirect } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({ component: Component, allow, redirectTo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        allow ? <Component {...props} /> : redirectTo && <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
