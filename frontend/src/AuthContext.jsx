// AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Your login logic here
    setIsUserLogin(true);
    setUser(userData);
  };

  const logout = () => {
    // Your logout logic here
    setIsUserLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLogin, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
