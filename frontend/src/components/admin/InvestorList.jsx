import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate ,Link} from "react-router-dom";
import { useAuthContext } from '../../context/AuthContext';

const InvestorList = () => {
    const [investor, setInvestor] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const { data } = useAuthContext();
    
      

      const handleSearch = (e) => {
        setSearchQuery(e.target.value);
      };
    
      // Filter mentor data based on search query
      const filteredMentor = data.filter(
        (m) =>
          m.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.email.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      return (
            <div>
              <div className='portCover'>
                <h1>Investor List</h1>
                <input
                  type="text"
                  placeholder="Search by Name/Email"
                  value={searchQuery}
                  onChange={handleSearch}
                  className='search_data'
                />
              </div>
              <div className='pagee'>
                <table className='userTable'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMentor?.map((i) => (
                      <tr key={i._id}>
                        <td>{i.fname} {i.lname}</td>
                        <td>{i.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )    
        }
    

export default InvestorList
