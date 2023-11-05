import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import './UserList.css'
const UserList = () => {
    const {data} = useAuthContext();
    const filteredData = data.filter((i)=>i.userType =='User');
  return (
    <>
        <div className='portCover'>
        <h1>User List</h1>
        </div>
        <div>
            {
                filteredData.map(i=>(
                    <div className='showdata' key={i._id}>
                        <ul className='ulist'>
                            <li className='leftside'>
                                <h2>Name : {i.fname} {i.lname}</h2>
                            </li>
                            <li className='leftside'>
                                <h2>Email : {i.email}</h2>
                            </li>
                            <li className='leftside'>
                                <h2>Registerd on : {i.createdAt.substring(0,10)}</h2>
                            </li>
                        </ul>
                        
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default UserList