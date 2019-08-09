import React from 'react';
import { Router } from '@reach/router';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';
// import Loader from './components/Loader/Loader';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Login exact path="/login" />
        <Login path="/" />

        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          fallbackNavigate="/"
        />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
