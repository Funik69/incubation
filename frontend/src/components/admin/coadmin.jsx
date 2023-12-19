import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './coadmin.css';

function Coadmin() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8000/api/v1/auth/user/${email}`);
      
      if (response.data.success) {
        const userData = response.data.user;
        setUser(userData);

        const updateUserResponse = await axios.post(`http://localhost:8000/api/v1/auth/update-user-type`, {
        email: userData.email,
        userType: 'coadmin',
      });
        console.log('User found:', userData);
        if (updateUserResponse.data.success) {
            console.log('User updated successfully');
            setEmail('');
            alert('Successfully made co-admin');
          } else {
            console.log('Error updating user:', updateUserResponse.data.message);
          }
      } else {
        setError('User not found');
        setUser(null);
      }
    } catch (error) {
      console.error('Error searching for user:', error);
      setError('Error searching for user');
      setUser(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='coadminform'>
          <label className='emaillab'><b>Email of Co-admin : </b></label>
          <input type='text' value={email} placeholder='Enter Email of Co-admin' onChange={(e) => setEmail(e.target.value)} className='emailinp' />
          <br></br>
          <br></br>
          <button type='submit' className='coadminbut'><b>Make Co-admin</b></button>
        </div>
      </form>
    </div>
  );
}

export default Coadmin;
