import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const MentorContext = createContext();

export const useMentorContext = () => {
  const context = useContext(MentorContext);
  if (!context) {
    throw new Error('useMentorContext must be used within a MentorProvider');
  }
  return context;
};

export const MentorProvider = ({ children }) => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/v1/mentor/get_mentor')
      .then((response) => {
        const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData(sortedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <MentorContext.Provider value={{ data }}>
      {children}
    </MentorContext.Provider>
  );
};
