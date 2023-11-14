import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import './UserList.css';
import { Link } from 'react-router-dom';

const UserList = () => {
  const { data } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState('');
  const containsSearchQuery = (i, query) => {
    // Define the fields you want to search in
    const searchFields = [i.fname, i.lname, i.email];
    // Check if any field contains the query
    return searchFields.some((field) => field.toLowerCase().includes(query.toLowerCase()));
  };
  const filteredData = data.filter((i) => i.userType === 'User' && containsSearchQuery(i,searchQuery));

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className='portCover'>
        <h1>User List</h1>
        <input
          type="text"
          placeholder=" Search User"
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
              <th>View Startup</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((i) => (
              <tr key={i._id}>
                <td>{i.fname} {i.lname}</td>
                <td>{i.email}</td>
                {/* <td>{i.createdAt.substring(0, 10)}</td> */}
                <td><Link to={`/viewUserStartup/${i.email}`}><u>View</u></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
