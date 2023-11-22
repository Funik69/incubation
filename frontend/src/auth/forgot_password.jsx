import React , { useState , useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const forgot_password = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
const [email,setEmail]=useState();
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(" http://localhost:8000/api/v1/auth/forgot_password", {
      email,
});
    if (res && res.data.success) {
      navigate("/login" , {replace: true});
      alert("Mail sent to Update Password")
      console.log(res.data.message)
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
      <div><h4 className="title">Forgot Password</h4></div>
            <input
              type="email"
              className="form-control"
              value={email}
              id="exampleInputPassword1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
      <button type="submit" className="auth-btn">
            Send Reset Link
          </button>
      </form>
    </div>
  )
}

export default forgot_password
