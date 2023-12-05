import React , {useState , useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./investform.css";
import { MYURL } from '../../env';

const tokenData = localStorage.getItem("auth");
const val = JSON.parse(tokenData);
const mail = val && val.user ? val.user.email : '';

const investData_initialState = {
  investorName: "",
  companyName: "",
  icity: "",
  istate: "",
  iemail: mail,
  imobile: "",
  investInto: "",
  limit: "",
  linkedin: "",
};

function InvestForm() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    const navigate = useNavigate();
    const [investData, setInvestData] = useState(investData_initialState)
    const [investErrors, setInvestErrors] = useState({
      investorName: "",
      companyName: "",
      icity: "",
      istate: "",
      iemail: mail,
      imobile: "",
      investInto: "",
      limit: "",
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
  
      /*const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(investData.iemail)) {
        newErrors.iemail = "Invalid Email Address";
        isValid = false;
      } else {
        newErrors.iemail = "";
      }*/

      const mobileNumberRegex = /^\d{10}$/;
      if (!mobileNumberRegex.test(investData.imobile)) {
        newErrors.imobile = "Invalid Mobile Number";
        isValid = false;
      } else {
        newErrors.imobile = "";
      }

      if (investData.investInto.trim() === "") {
        newErrors.investInto = "InvestInto is required";
        isValid = false;
      } else {
        newErrors.investInto = "";
      }

      const limitRadioButtons = document.querySelectorAll('input[name="limit"]');
  if (![...limitRadioButtons].some((radio) => radio.checked)) {
    newErrors.limit = "Please select an investment range";
    isValid = false;
  } else {
    newErrors.limit = "";
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
          const response = await axios.post(`${MYURL}api/v1/invest/investdata`, {
            ...investData,
            limit: document.querySelector('input[name="limit"]:checked').value, // Get the value of the checked radio button
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
          navigate('/investthanks');
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
                    <Form.Label className='invformlbl' htmlFor='investorName' id='req'>Investor Name : </Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Enter your name" id='investorName' name='investorName' value={investData.investorName} onChange={handleChange} required/>
                    <div className="error">{investErrors.investorName}</div>
                    <br></br>
                  </div>
                  <div>
                    <Form.Label className='invformlbl' htmlFor='companyName' id='req'>Company Name :  </Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Enter company name" id='companyName' name='companyName' value={investData.companyName} onChange={handleChange} required/>
                    <div className="error">{investErrors.companyName}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <Form.Label className='invformlbl' htmlFor='icity'>City : </Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Enter city" id='icity' name='icity' value={investData.icity} onChange={handleChange} />
                    <div className="error">{investErrors.icity}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <Form.Label className='invformlbl' htmlFor='istate'>State :  </Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Enter state" id='istate' name='istate' value={investData.istate} onChange={handleChange} />
                    <div className="error">{investErrors.istate}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <Form.Label className='invformlbl' htmlFor='iemail' id='req' >Email :  </Form.Label>{" "}
                    <br></br>
                    <Form.Control type="email" placeholder="Enter email" id='iemail' name='iemail' value={investData.iemail} disabled={true} onChange={handleChange} required/>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <Form.Label className='invformlbl' htmlFor='imobile' id='req' >Mobile :  </Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Enter mobile" id='imobile' name='imobile' value={investData.imobile} onChange={handleChange} required/>
                    <div className="error">{investErrors.imobile}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <Form.Label className='invformlbl' htmlFor='investInto' id='req'> Which company you want to invest into :  </Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="Enter Startup Name" id='investInto' name='investInto' value={investData.investInto} onChange={handleChange} required/>
                    <div className="error">{investErrors.investInto}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                  <Form.Label className='invformlbl' htmlFor='limit' id='req'> Please Specify your Investment Range :  </Form.Label>
                    <br></br>
                    <input type="radio" id='limit1' name='limit' value={'Upto 1L'}  onChange={() => setInvestData({ ...investData, limit: true })} required />
                    <label htmlFor="limit1">Upto <b>1 Lakh</b></label><br></br>
                    <input type="radio" id='limit2' name='limit' value={'1-3 L'}  onChange={() => setInvestData({ ...investData, limit: true })} required />
                    <label htmlFor="limit2"><b>1-3 Lakhs</b></label><br></br>
                    <input type="radio" id='limit3' name='limit' value={'More than 3L'}  onChange={() => setInvestData({ ...investData, limit: true })} required />
                    <label htmlFor="limit3">More than <b>3 Lakhs</b></label><br></br>
                    <div className="error">{investErrors.limit}</div>
                    <br></br>
                    <br></br>
                  </div>
                  <div>
                    <Form.Label className='invformlbl' htmlFor='linkedin' id='req'>Linkedin :  </Form.Label>
                    <br></br>
                    <Form.Control type="text" placeholder="https://www.linkedin.com/in/" id='linkedin' name='linkedin' value={investData.linkedin} onChange={handleChange} required/>
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