import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import './UserList.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const { data } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // const handleDelete = async (e) => {
  //   try {
  //     let answer = window.prompt("Are You Sure want to delete this User ? ");
  //     if (!answer) return;
  //     const { data } = await axios.delete(
  //       `/api/v1/auth/delete_user/`
  //     );
  //     console.log("User Deleted Succfully");
  //     navigate("/userlist");
  //   } catch (error) {
  //     console.log(error);
  //     console.log("Something went wrong");
  //   }
  // };
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

  const handleSubmit=async(id)=>{
    try{
      let answer = window.prompt("Are You Sure want to delete this User ? ");
      if (answer!="Yes" || ans!="yes")
        return;
      
      const data  = await axios.delete(
        `http://localhost:8000/api/v1/auth/delete_user/${id}`
      );
      console.log(data);
      console.log("User Deleted Successfully");
      navigate("/userlist");
    } catch (error) {
      console.log(error);
      console.log("Something went wrong");
    }
  }
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
              <th>Delete Startup</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((i) => (
              <tr key={i._id}>
                <td>{i.fname} {i.lname}</td>
                <td>{i.email}</td>
                {/* <td>{i.createdAt.substring(0, 10)}</td> */}
                <td><Link to={`/viewUserStartup/${i.email}`}><u>View</u></Link></td>
                <td><button className="auth-btn" style={{width:"100px"}} onClick={() => handleSubmit(i._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
