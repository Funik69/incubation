import React, { useState , useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import "./auth.css";

const login = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
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
        console.log(res.data && res.data.message);
        localStorage.setItem("auth", JSON.stringify(res.data));
        alert("login successful");
        navigate(location.state || "/");
      } else {
        if(res && res.status===203){
          console.log("Email not verified")
          navigate("/verify");
        }
        console.log(res.data.message);
        alert(res.data.message);
        
      }
    } catch (error) {
      console.log(error);
      alert("Invalid User mailId");
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <div className="myform">
            <h4 className="title">LOGIN</h4>

            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email "
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
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="auth-btn">
              LOGIN
            </button>
            <div className="mb-3">
              <p
                className="txtlink"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password
              </p>
            </div>
            <p
              className="txtlink"
              onClick={() => {
                navigate("/register");
              }}
            >
              Create Account
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
