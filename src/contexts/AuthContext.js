import React, { useState } from 'react';
import { element } from 'prop-types';

export const AuthContext = React.createContext({
  isAuthenticated: false
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const contextValues = {
    isAuthenticated,
    setIsAuthenticated
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: element.isRequired
};

export const AuthConsumer = AuthContext.Consumer;
