// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  useEffect(() => {
    const userSession = localStorage.getItem("userSession");
    const adminSession = localStorage.getItem("adminSession");

    if (userSession) {
      const { userData, expiry } = JSON.parse(userSession);
      if (new Date() < new Date(expiry)) {
        setIsUserLogin(true);
        setUser(userData);
      } else {
        localStorage.removeItem("userSession");
      }
    }

    if (adminSession) {
      const { expiry } = JSON.parse(adminSession);
      if (new Date() < new Date(expiry)) {
        setIsAdminLogin(true);
      } else {
        localStorage.removeItem("adminSession");
      }
    }
  }, []);

  const login = (userData) => {
    const expiry = new Date(new Date().getTime() + 5 * 60 * 1000); // 5 minutes from now
    const userSession = {
      userData,
      expiry: expiry.toISOString(),
    };
    localStorage.setItem("userSession", JSON.stringify(userSession));
    setIsUserLogin(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("userSession");
    setIsUserLogin(false);
    setUser(null);
  };

  const adminLogin = () => {
    const expiry = new Date(new Date().getTime() + 5 * 60 * 1000); // 5 minutes from now
    const adminSession = {
      expiry: expiry.toISOString(),
    };
    localStorage.setItem("adminSession", JSON.stringify(adminSession));
    setIsAdminLogin(true);
  };

  const adminLogout = () => {
    localStorage.removeItem("adminSession");
    setIsAdminLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        login,
        logout,
        user,
        isAdminLogin,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
