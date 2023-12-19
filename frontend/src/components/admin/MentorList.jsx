import React, { useState, useEffect } from 'react';
import './UserList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MYURL } from '../../../env';

const MentorList = () => {
  const [mentor, setMentor] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const getAllMentor = async () => {
    try {
      const { data } = await axios.get(`${MYURL}api/v1/mentor/get_mentor`);
      setMentor(data.mentor);
    } catch (error) {
      console.log(error);
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllMentor();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter mentor data based on search query
  const filteredMentor = mentor.filter(
    (m) =>
      m.mname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.memail.toLowerCase().includes(searchQuery.toLowerCase()) 
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
              <th>Linkedin</th>
            </tr>
          </thead>
          <tbody>
            {filteredMentor.map((i) => (
              <tr key={i._id}>
                <td>{i.mname}</td>
                <td>{i.memail}</td>
                <td>
                  <Link to={i.mlink}>{i.mlink}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MentorList;
