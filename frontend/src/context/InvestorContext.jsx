import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MYURL } from '../../env';
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
      .get(`${MYURL}api/v1/invest/get_investor`)
      .then((response) => {
        const sortedData = response.data;
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
