import React from 'react';
import { useUser } from '../../context/UserContext';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  let auth = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
