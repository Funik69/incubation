import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import './auth.css'
const otp = () => {
    const [otp, setOtp] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(" http://localhost:8000/api/v1/auth/verify-email", {
          otp,
          userId,
 });
          if (res && res.data.success) {
            console.log(res.data && res.data.message);
            navigate("/login");
          } else {
            console.log(res.data.message);
          }
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // other than 2xx (e.g., 400, 401, 404).
            console.error('Request failed with status code:', error.response.status);
            console.error('Response data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received (e.g., network error).
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error.
            console.error('Request setup error:', error.message);
          }
        
        }
      };
  
  return (
    <div className="myform" style={{minHeight:"50vh"}}>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
            <input
              type="userid"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Unique Id"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="OTP"
              required
            />
          </div>
      <button type="submit" className="auth-btn">
            Verify
          </button>
      </form>
    </div>
  )
}

export default otp


