"use client";
import Cookies from "js-cookie";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the token exists on component mount
  useEffect(() => {
    checkAuth();
  }, []);

  const setAuthenticated = (value) => {
    setIsAuthenticated(value);
  };

  const checkAuth = () => {
    const token = Cookies.get("authToken");

    if (token) {
      console.log("Token exists. Setting authenticated to true.");
      setAuthenticated(true);
    } else {
      console.log("Token does not exist. Setting authenticated to false.");
      setAuthenticated(false);
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    setAuthenticated(false);    
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};