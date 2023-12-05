import React ,{useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { MYURL } from '../../env';

const verify = () => {
const [email,setEmail]=useState();
const navigate = useNavigate();


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${MYURL}api/v1/auth/reverify`, {
        email
  });
      if (res && res.status===201) {
        navigate("/otp");
        console.log("mail sent")
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className='myForm'><h4 className="title">Verify Account</h4></div>
      <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              value={email}
              id="exampleInputPassword1"
              placeholder="Enter Mail"
              onChange={(e) => setEmail(e.target.value)}
              required
          />
          
      <button type="submit" className="auth-btn">
            Verify
          </button>
      </form>
    </div>

  )
}

export default verify
