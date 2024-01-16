import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import { LOGIN_URL } from "../utils/url";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = async (userData) => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
        credentials: "include",
      });

      const responseData = await response.json();
      setCurrentUser(responseData.user);
      setIsAdmin(responseData.user.isAdmin);
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        handleLogin,
        isLoggedIn,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useAuth };
