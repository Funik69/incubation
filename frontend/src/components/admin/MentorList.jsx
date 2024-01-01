import React, { useState, useEffect } from 'react';
import './UserList.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MentorList = () => {
  const [mentor, setMentor] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { data } = useAuthContext();

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter mentor data based on search query
  const filteredMentor = data.filter(
    (m) =>
      (m.lname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()) ) &&  m.userType === 'mentor'
  );

  return (
    <div>
      <div className="portCover">
        <h1>Mentor List</h1>
        <input
          type="text"
          placeholder="Name/Email"
          value={searchQuery}
          onChange={handleSearch}
          className="search_data"
        />
      </div>
      <div className="pagee">
        <table className="userTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredMentor.map((i) => (
              <tr key={i._id}>
                <td>{i.fname} {i.lname}</td>
                <td>{i.email}</td>
        
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MentorList;
