import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AlertContext = createContext();

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlertContext must be used within a AlertProvider');
  }
  return context;
};

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/auth/getinformed')
      .then((response) => {
        setAlert(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <AlertContext.Provider value={{ alert }}>
      {children}
    </AlertContext.Provider>
  );
};
