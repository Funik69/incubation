import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  // const val = localStorage.getItem("auth");
  // const myuser = JSON.parse(val);
  // const id = myuser.user.email;
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/auth/getuser`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ data }}>
      {children}
    </AuthContext.Provider>
  );
};
