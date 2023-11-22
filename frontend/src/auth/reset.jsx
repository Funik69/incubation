import React , { useState , useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
const reset = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
const [password,setPassword]=useState();
const navigate = useNavigate();
const {id,token}=useParams();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(` http://localhost:8000/api/v1/auth/reset-password/${id}/${token}`, {
      password
});
    if (res && res.data.Status=="Success") {
      navigate("/login" , {replace: true});
      console.log("password changed")
    } else {
      console.log(res.data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div style={{minHeight:"50vh"}} className="fgtstyle">
      <form onSubmit={handleSubmit} >
      <div className="mb-3">
      <div><h4 className="title">Reset Password</h4></div>
            <input
              type="password"
              autoComplete='off'
              className="form-control"
              value={password}
              id="exampleInputPassword1"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
      <button type="submit" className="auth-btn">
            Set Password
          </button>
      </form>
    </div>
  )
}

export default reset