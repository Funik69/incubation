import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate,useLocation } from "react-router-dom";
import './auth.css'

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(" http://localhost:8000/api/v1/auth/login", {
        email,
        password,
  
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        localStorage.setItem('auth',JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
          
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            LOGIN
          </button>
          <div className="mb-3">
          <p onClick={() => {
                navigate("/forgot-password");
              }}>Forgot Password</p>
          </div>
          <p onClick={() => {
                navigate("/register");
              }}>Create Account</p>
        </form>
      </div>
    </div>
  )
}

export default login

