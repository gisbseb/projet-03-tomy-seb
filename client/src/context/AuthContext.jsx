import React, { createContext, useContext, useState } from "react";
import useFetch from "../hook/useFetch";
import { LOGIN_URL } from "../utils/url";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async ({ userData }) => {
    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      console.log(res);
    } catch (err) {}
  };

  return (
    <AuthContext.Provider
      value={{
        isAdmin,

        handleLogin,

        isLoggedIn,
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
