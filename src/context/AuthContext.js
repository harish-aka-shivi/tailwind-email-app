import React from 'react';
import { useLocalStorage } from 'react-use';
import { fakeUsers } from '../util/data';

const AuthContext = React.createContext({
  isAuthenticated: '',
  login: () => {},
  logout: () => {},
  userEmail: '',
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', false);
  const [userEmail, setUserEmail] = useLocalStorage('userEmail', '');
  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
  };

  const login = (username, password) => {
    if (fakeUsers[username]) {
      if (
        fakeUsers[username] === password
      ) {
        setIsAuthenticated(true);
        setUserEmail(username);
        return true;
      }
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logout,
        login,
        userEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
