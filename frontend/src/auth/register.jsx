import React ,{useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import './auth.css'
import { MYURL } from '../../env';

const register = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    
      e.preventDefault();
    try {
      const res = await axios.post(`${MYURL}api/v1/auth/register`, {
        fname,
        lname,
        email,
        password,
  

      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/otp" );
      } else {
        alert(res.data.message);
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
    <div>
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
   
        <div className='myform'>
          <h4 className="title">REGISTER</h4>
  
         
        <div className="mb-3">
            <input
              type="text"
              onChange={(e) => setFname(e.target.value)}
              className="form-control"
              id="fname"
              placeholder="First Name"
              autoComplete='off'
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onChange={(e) => setLname(e.target.value)}
              className="form-control"
              id="lname"
              placeholder="Last Name"
              autoComplete='off'
              required
              
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email "
              autoComplete='off'
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
              autoComplete='off'
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            REGISTER
          </button>

          <p className="txtlink" onClick={() => {
                navigate("/login" , {replace: true});
              }}>Sign In</p>
          </div>  
        </form>
      </div>
    </div>
  )
}

export default register
