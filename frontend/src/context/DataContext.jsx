import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/data/getdata')
      .then((response) => {
        const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
