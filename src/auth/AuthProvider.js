import React, { createContext, useContext } from 'react';
import { useAuthInfo, useLogoutFunction } from '@propelauth/react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const authInfo = useAuthInfo();
  const logout = useLogoutFunction();

  const session = authInfo.isLoggedIn ? authInfo.user : null;

  return (
    <AuthContext.Provider value={{ session, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
