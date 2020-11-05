import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthContext, { AuthProvider } from './context/AuthContext';
import AppWithAuth from './App';
import Login from './containers/Login';

function PrivateRoute({ children, ...rest }) {
  const {
    isAuthenticated,
  } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

const RouterApp = () => (
  <AuthProvider>
    <Router>
      <PrivateRoute path="/" exact>
        <AppWithAuth />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  </AuthProvider>
);

export default RouterApp;
