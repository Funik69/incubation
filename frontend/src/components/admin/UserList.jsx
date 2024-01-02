import React, { useState , useEffect} from 'react';
import { useAuthContext } from '../../context/AuthContext';
import './UserList.css';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { MYURL } from '../../../env';
import { MdDelete } from "react-icons/md";

const UserList = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  const tokenDatad = localStorage.getItem("auth");
  const valt = JSON.parse(tokenDatad)
  //const mail=val.user.email;
  const mails = valt && valt.user ? valt.user.email : '';
  console.log(mails);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${MYURL}api/v1/auth/user/${mails}`);
        const adminStatus = response.data.user.userType === 'Admin';
        setIsAdmin(adminStatus);

        // ... (existing code)
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error accordingly, e.g., redirect to login page or display an error message
      }
    };

    fetchData();
  }, []);
  const { data } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState('');
  

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
      let answer = window.prompt("Enter Anything to delete User");
      if (!answer){
        return;
      }
      
    const data  = await axios.delete(
        `${MYURL}api/v1/auth/delete_user/${id}`
      );
      console.log(data);
      console.log("User Deleted Successfully");
      navigate("/userlist");
    } catch (error) {
      console.log(error);
      console.log("Something went wrong");
    }
  }
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
              {isAdmin && <th>Delete Startup</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((i) => (
              <tr key={i._id}>
                <td>{i.fname} {i.lname}</td>
                <td>{i.email}</td>
                <td>{i.verified==1?'Yes':'No'}</td>
                <td><Link to={`/viewUserStartup/${i.email}`}><u>View</u></Link></td>
                {isAdmin && <td>
  <button class="delete-button" onClick={() => handleSubmit(i._id)}>
    <MdDelete class="delete-icon" />
  </button>
</td>
}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
