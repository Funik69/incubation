import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const InvestorContext = createContext();

export const useInvestorContext = () => {
  const context = useContext(InvestorContext);
  if (!context) {
    throw new Error('useMentorContext must be used within a MentorProvider');
  }
  return context;
};

export const InvestorProvider = ({ children }) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/invest/get_investor')
      .then((response) => {
        const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <InvestorContext.Provider value={{ data }}>
      {children}
    </InvestorContext.Provider>
  );
};
