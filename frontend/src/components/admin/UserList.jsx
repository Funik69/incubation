import React, { useState , useEffect} from 'react';
import { useAuthContext } from '../../context/AuthContext';
import './UserList.css';
import { Link , useNavigate} from 'react-router-dom';

const UserList = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
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
  const navigate = useNavigate();
  return (
    <>
      <div className='portCover'>
        <h1>User List</h1>
        <input
          type="text"
          placeholder=" Search User by name/email"
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
              <th>Verified</th>
              <th>View Startup</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((i) => (
              <tr key={i._id}>
                <td>{i.fname} {i.lname}</td>
                <td>{i.email}</td>
                <td>{i.verified==1?'Yes':'No'}</td>
                {/* <td>{i.createdAt.substring(0, 10)}</td> */}
                <td>{/*<Link to={`/viewUserStartup/${i.email}`}><u>View</u></Link>*/}<button onClick={() => navigate('/viewUserStartup/${i.email' , {replace: true})}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
