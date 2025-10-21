// // 'use client';
// // import { createContext, useContext, useState } from "react";

// // const AuthContext = createContext();

// // export function AuthProvider({ children }) {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   return (
// //     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // export const useAuth = () => useContext(AuthContext);
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   // Load user from localStorage when app starts
//   useEffect(() => {
//     const user = localStorage.getItem("currentUser");
//     if (user) setCurrentUser(JSON.parse(user));
//   }, []);

//   // Save user to localStorage whenever it changes
//   useEffect(() => {
//     if (currentUser) {
//       localStorage.setItem("currentUser", JSON.stringify(currentUser));
//     } else {
//       localStorage.removeItem("currentUser");
//     }
//   }, [currentUser]);

//   const login = (userData) => {
//     setCurrentUser(userData);
//   };

//   const logout = () => {
//     setCurrentUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
'use client';  // <<< MUST BE FIRST LINE
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) setCurrentUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const login = (userData) => setCurrentUser(userData);
  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
