import React, { createContext, useState, useContext, useEffect } from 'react';

// Tạo một Context mới
const AuthContext = createContext();

// Tạo một Provider cho Context
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedIsLoggedIn = localStorage.getItem('isLoggedIn');
    return savedIsLoggedIn === 'true' || false;
  });

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

const logout = () => {
  setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  sessionStorage.clear(); 
  localStorage.clear();
  window.location.href = '/login';

};

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Tạo một custom hook để sử dụng trong các component
export const useAuth = () => useContext(AuthContext);
