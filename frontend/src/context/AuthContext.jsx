import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MYURL } from '../../env';

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [data, setData] = useState([]);
  // const val = localStorage.getItem("auth");
  // const myuser = JSON.parse(val);
  // const id = myuser.user.email;
  useEffect(() => {
    axios
      .get(`${MYURL}api/v1/auth/getuser`)
      .then((response) => {
        const sortedData = response.data.sort((a, b) => {
          // Assuming fname and lname are strings
          const nameA = `${a.fname} ${a.lname}`.toLowerCase();
          const nameB = `${b.fname} ${b.lname}`.toLowerCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setData(sortedData);
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
