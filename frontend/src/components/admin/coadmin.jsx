import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './coadmin.css';
import { MYURL } from '../../../env';

function Coadmin() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [perm, setPerm] = useState({
    one: '0',
    two: '0',
    three: '0',
    four: '0',
    five:'0',
    six:'0',
    seven:'0',
    eight:'0',
    nine:'0',
    ten:'0',
    eleven:'0',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${MYURL}api/v1/auth/user/${email}`);
      
      if (response.data.success) {
        const userData = response.data.user;
        setUser(userData);

        const updateUserResponse = await axios.post(`${MYURL}api/v1/auth/update-user-type`, {
        email: userData.email,
        perm:perm,
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
  const handleRadioChange = (question, value) => {
    setPerm((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };
  return (
    <div className='coform'>
      <form onSubmit={handleSubmit}>
        <div className='coadminform'>
          <label className='emaillab'><b>Email of Co-admin : </b></label>
          <input type='text' value={email} placeholder='Enter Email of Co-admin' onChange={(e) => setEmail(e.target.value)} className='emailinp' /><br></br><br></br>

          <label className='emaillab'>Want to grant the user access to Startups applications?</label><br></br>
          <label><input type='radio' value={'0'} name='one'  defaultChecked onChange={() => handleRadioChange('one','0')} />None</label>
          <label><input type='radio' value={'1'} name='one' onChange={() => handleRadioChange('one','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='one' onChange={() => handleRadioChange('one','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user access to Accepted startups?</label><br></br>
          <label><input type='radio' value={'0'} name='two'  defaultChecked onChange={() => handleRadioChange('two','0')}/>None</label>
          <label><input type='radio' value={'1'} name='two' onChange={() => handleRadioChange('two','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='two' onChange={() => handleRadioChange('two','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user access to Un-registered startups?</label><br></br>
          <label><input type='radio' value={'0'} name='three' defaultChecked onChange={() => handleRadioChange('three','0')}/>None</label>
          <label><input type='radio' value={'1'} name='three' onChange={() => handleRadioChange('three','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='three' onChange={() => handleRadioChange('three','2')}/>Read/Write</label>
          <br></br>
          <br></br>
          
          <label className='emaillab'>Want to grant the user to access Startup founder profile?</label><br></br>
          <label><input type='radio' value={'0'} name='four' defaultChecked onChange={() => handleRadioChange('four','0')} />None</label>
          <label><input type='radio' value={'1'} name='four' onChange={() => handleRadioChange('four','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='four' onChange={() => handleRadioChange('four','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user to create event?</label><br></br>
          <label><input type='radio' value={'0'} name='five' defaultChecked onChange={() => handleRadioChange('five','0')}  />None</label>
          <label><input type='radio' value={'1'} name='five' onChange={() => handleRadioChange('five','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='five' onChange={() => handleRadioChange('five','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user to make announcements?</label><br></br>
          <label><input type='radio' value={'0'} name='six' defaultChecked onChange={() => handleRadioChange('six','0')} />None</label>
          <label><input type='radio' value={'1'} name='six' onChange={() => handleRadioChange('six','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='six' onChange={() => handleRadioChange('six','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user access to Mentor list?</label><br></br>
          <label><input type='radio' value={'0'} name='seven'  defaultChecked onChange={() => handleRadioChange('seven','0')}/>None</label>
          <label><input type='radio' value={'1'} name='seven' onChange={() => handleRadioChange('seven','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='seven' onChange={() => handleRadioChange('seven','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user access to Investor list?</label><br></br>
          <label><input type='radio' value={'0'} name='eight' defaultChecked onChange={() => handleRadioChange('eight','0')}/>None</label>
          <label><input type='radio' value={'1'} name='eight' onChange={() => handleRadioChange('eight','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='eight' onChange={() => handleRadioChange('eight','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user access to Mentor proposal?</label><br></br>
          <label><input type='radio' value={'0'} name='nine' defaultChecked onChange={() => handleRadioChange('nine','0')}/>None</label>
          <label><input type='radio' value={'1'} name='nine' onChange={() => handleRadioChange('nine','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='nine' onChange={() => handleRadioChange('nine','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to grant the user access to Investor proposal? </label><br></br>
          <label><input type='radio' value={'0'} name='ten' defaultChecked onChange={() => handleRadioChange('ten','0')}/>None</label>
          <label><input type='radio' value={'1'} name='ten' onChange={() => handleRadioChange('ten','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='ten' onChange={() => handleRadioChange('ten','2')}/>Read/Write</label>
          <br></br>
          <br></br>

          <label className='emaillab'>Want to allow the user to Make co-admin?</label><br></br>
          <label><input type='radio' value={'0'} name='eleven' defaultChecked onChange={() => handleRadioChange('eleven','0')}/>None</label>
          <label><input type='radio' value={'1'} name='eleven' onChange={() => handleRadioChange('eleven','1')}/>Read</label>
          <label><input type='radio' value={'2'} name='eleven' onChange={() => handleRadioChange('eleven','2')}/>Read/Write</label>
          <br></br>
          <br></br>
          

          <button type='submit' className='coadminbut'><b>Make Co-admin</b></button>
        </div>
      </form>
    </div>
  );
}

export default Coadmin;
