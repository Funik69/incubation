import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./investform.css";

const investData_initialState = {
  investorName: "",
  companyName: "",
  icity: "",
  istate: "",
  iemail: "",
  imobile: "",
  investInto: "",
  linkedin: "",
};

function InvestForm() {
    const navigate = useNavigate();
    const [investData, setInvestData] = useState(investData_initialState)
    const [investErrors, setInvestErrors] = useState({
      investorName: "",
      companyName: "",
      icity: "",
      istate: "",
      iemail: "",
      imobile: "",
      investInto: "",
      linkedin: "",
    });
    
    const validInvestForm = () => {
      let isValid = true;
      const newErrors = { ...investErrors };
  
      if (investData.investorName.trim() === "") {
        newErrors.investorName = "Investor Name is required";
        isValid = false;
      } else {
        newErrors.investorName = "";
      }
  
      if (investData.companyName.trim() === "") {
        newErrors.companyName = "Company Name is required";
        isValid = false;
      } else {
        newErrors.companyName = "";
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(investData.iemail)) {
        newErrors.iemail = "Invalid Email Address";
        isValid = false;
      } else {
        newErrors.iemail = "";
      }

      const mobileNumberRegex = /^\d{10}$/;
      if (!mobileNumberRegex.test(investData.imobile)) {
        newErrors.imobile = "Invalid Mobile Number";
        isValid = false;
      } else {
        newErrors.mobile = "";
      }

      if (investData.investInto.trim() === "") {
        newErrors.investInto = "InvestInto is required";
        isValid = false;
      } else {
        newErrors.investInto = "";
      }
  
      const linkedinRegex = /https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9-]+\/?/;
      if (!linkedinRegex.test(investData.linkedin)) {
        newErrors.linkedin = "Linkedin Profile is invalid";
        isValid = false;
      } else {
        newErrors.linkedin = "";
      }
  
      setInvestErrors(newErrors);
      return isValid;
    };

    const handleChange = (e) => {
      const { name, value, type, checked, files } = e.target;
      const newValue = type === "checkbox" ? checked : files ? files[0] : value;
  
      setInvestData({
        ...investData,
        [name]: newValue,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = validInvestForm();
      if(isValid) {
        try {
            const response = await fetch('http://localhost:8000/api/v1/invest/investdata', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(investData),
            });
            if(response.status === 200) {
              setInvestData(investData_initialState)
            }
      
            if (response.ok) {
              console.log('Form data sent successfully');
            } else {
              console.error('Form data failed to send');
            }
          } catch (error) {
            console.error('Error:', error);
          }
          navigate('/Thanks');
          setInvestData(investData_initialState);
      }
    };
    /*
    const handleSubmit = () => {
      navigate('/Thanks');
    }*/
    return (
        <div>
            <div className='invformmain'>
                <h2 className='invformh2'>Innovation and Incubation Hub - A Helping Hand for Startups</h2>
                <h3 className='invformh3'>Become an Investor</h3>
                <br></br>
                <br></br>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='invforminfo'>
                  <div>
                    <label className='invformlbl' htmlFor='investorName' id='req'>Investor Name : </label>
                    <br></br>
                    <input type="text" placeholder="Enter your name" id='investorName' name='investorName' value={investData.investorName} onChange={handleChange} required/>
                    <div className="error">{investErrors.investorName}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <label className='invformlbl' htmlFor='companyName' id='req'>Company Name :  </label>
                    <br></br>
                    <input type="text" placeholder="Enter company name" id='companyName' name='companyName' value={investData.companyName} onChange={handleChange} required/>
                    <div className="error">{investErrors.companyName}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <label className='invformlbl' htmlFor='icity'>City : </label>
                    <br></br>
                    <input type="text" placeholder="Enter city" id='icity' name='icity' value={investData.city} onChange={handleChange} />
                    <div className="error">{investErrors.icity}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <label className='invformlbl' htmlFor='istate'>State :  </label>
                    <br></br>
                    <input type="text" placeholder="Enter state" id='istate' name='istate' value={investData.state} onChange={handleChange} />
                    <div className="error">{investErrors.istate}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <label className='invformlbl' htmlFor='iemail' id='req' >Email :  </label>
                    <br></br>
                    <input type="text" placeholder="Enter email" id='iemail' name='iemail' value={investData.email} onChange={handleChange} required/>
                    <div className="error">{investErrors.iemail}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <label className='invformlbl' htmlFor='imobile' id='req' >Mobile :  </label>
                    <br></br>
                    <input type="text" placeholder="Enter mobile" id='imobile' name='imobile' value={investData.mobile} onChange={handleChange} required/>
                    <div className="error">{investErrors.imobile}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <label className='invformlbl' htmlFor='investInto' id='req'> Which company you want to invest into :  </label>
                    <br></br>
                    <input type="text" placeholder="Enter Startup Name" id='investInto' name='investInto' value={investData.investInto} onChange={handleChange} required/>
                    <div className="error">{investErrors.investInto}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <label className='invformlbl' htmlFor='linkedin' id='req'>Linkedin :  </label>
                    <br></br>
                    <input type="text" placeholder="https://www.linkedin.com/in/" id='linkedin' name='linkedin' value={investData.linkedin} onChange={handleChange} required/>
                    <div className="error">{investErrors.linkedin}</div>
                    <br></br>
                    <br></br>
                  </div>
                    <button className='invformbut' type='submit'><b>Submit</b></button>
                    <br></br>
                    <br></br>
                </div>
            </form>
        </div>
    );
}
export default InvestForm;