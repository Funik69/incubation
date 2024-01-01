import React, { useEffect, useState } from 'react';
import { useMentorContext } from '../../context/MentorContext';
import { Link } from 'react-router-dom'
import './getdata.css';

const MentorRequests = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
  const { data } = useMentorContext();
  const [searchQuery, setSearchQuery] = useState('');

  const containsSearchQuery = (item, query) => {
    const searchFields = [item.mname, item.mcity, item.memail];
    return searchFields.some((field) => field.toLowerCase().includes(query.toLowerCase()));
  };

  const filteredData = data.filter((item) => item.status === 'pending' && containsSearchQuery(item, searchQuery));
  const len = filteredData.length;
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className='portCover'>
        <h1>Application for Mentorship {len}</h1>
        <input
          type="text"
          placeholder="Search by Name, City, or Email"
          value={searchQuery}
          onChange={handleSearch}
          className='search_data'
        />
      </div>
      <div className='showdata'>
        {filteredData.map(item => (
          <div className='cardData' key={item._id}>
            <div className='card-item'><strong>Name:</strong> {item.mname}</div>
            <div className='card-item'><strong>City:</strong> {item.mcity}</div>
            <div className='card-item'><strong>Email :</strong> {item.memail}</div>
            <div className='admin_center'><Link to={`/view_mentor_application/${item._id}`}><u>View Full Proposal</u></Link></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MentorRequests;
