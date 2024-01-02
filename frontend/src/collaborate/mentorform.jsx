import React , {useState , useEffect} from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './mentorform.css';
import { MYURL } from "../../env";

const tokenData = localStorage.getItem("auth");
const val = JSON.parse(tokenData);
const mail = val && val.user ? val.user.email : '';

const mentorData_initialState = {
    mname:"",
    mcity:"",
    mstate:"",
    memail:mail,
    mmobile:"",
    mconame:"",
    myear:"",
    msector:"",
    mlink:"",
  };

function MentorForm() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
    const navigate = useNavigate();
    const [mentorData, setMentorData] = useState(mentorData_initialState)
    const [mentorErrors, setMentorErrors] = useState({
        mname:"",
        mcity:"",
        mstate:"",
        memail:mail,
        mmobile:"",
        mconame:"",
        myear:"",
        msector:"",
        mlink:"",
    });
    
    const validMentorForm = () => {
      let isValid = true;
      const newErrors = { ...mentorErrors };
  
      if (mentorData.mname.trim() === "") {
        newErrors.mname = "Mentor Name is required";
        isValid = false;
      } else {
        newErrors.mname = "";
      }
  
      if (mentorData.mcity.trim() === "") {
        newErrors.mcity = "City is required";
        isValid = false;
      } else {
        newErrors.mcity = "";
      }

      if (mentorData.mstate.trim() === "") {
        newErrors.mstate = "State is required";
        isValid = false;
      } else {
        newErrors.mstate = "";
      }
  
      /*const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(mentorData.memail)) {
        newErrors.memail = "Invalid Email Address";
        isValid = false;
      } else {
        newErrors.memail = "";
      }*/

      const mobileNumberRegex = /^\d{10}$/;
      if (!mobileNumberRegex.test(mentorData.mmobile)) {
        newErrors.mmobile = "Invalid Mobile Number";
        isValid = false;
      } else {
        newErrors.mmobile = "";
      }

      if (mentorData.mconame.trim() === "") {
        newErrors.mconame = "Company Name is required";
        isValid = false;
      } else {
        newErrors.mconame = "";
      }

      if (mentorData.myear.trim() === "") {
        newErrors.myear = "Year of experience is required";
        isValid = false;
      } else {
        newErrors.myear = "";
      }

      if (mentorData.msector.trim() === "") {
        newErrors.msector = "Sector is required";
        isValid = false;
      } else {
        newErrors.msector = "";
      }
  
      const linkedinRegex = /https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9-]+\/?/;
      if (!linkedinRegex.test(mentorData.mlink)) {
        newErrors.mlink = "Linkedin Profile is invalid";
        isValid = false;
      } else {
        newErrors.mlink = "";
      }
  
      setMentorErrors(newErrors);
      return isValid;
    };

    const handleChange = (e) => {
      const { name, value, type, checked, files } = e.target;
      const newValue = type === "checkbox" ? checked : files ? files[0] : value;
  
      setMentorData({
        ...mentorData,
        [name]: newValue,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = validMentorForm();
      if(isValid) {
        try {
            const response = await fetch(`${MYURL}api/v1/mentor/mentordata`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(mentorData),
            });
            if(response.status === 200) {
              setMentorData(mentorData_initialState)
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
          setMentorData(mentorData_initialState);
      }
    };

    return (
        <div>
            <div className='mentformmain'>
                <h2 className='mentformh2'>Innovation and Incubation Hub - A Helping Hand for Startups</h2>
                <h3 className='mentformh3'>Become a Mentor</h3>
                <br></br>
                <br></br>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mentforminfo'>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="mname" id="req">Mentor Name : </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter your name" id='mname' name="mname" value={mentorData.mname} onChange={handleChange} required/>
                        <div className="error">{mentorErrors.mname}</div>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="mcity">City : </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter city" id='mcity' name="mcity" value={mentorData.mcity} onChange={handleChange}/>
                        <div className="error">{mentorErrors.mcity}</div>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="mstate">State :  </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter state" id='mstate' name="mstate" value={mentorData.mstate} onChange={handleChange}/>
                        <div className="error">{mentorErrors.mstate}</div>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="memail" id="req">Email :  </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter email" id='memail' name="memail" value={mentorData.memail} disabled={true} onChange={handleChange} required/>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="mmobile" id="req">Mobile :  </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter mobile" id='mmobile' name="mmobile" value={mentorData.mmobile} onChange={handleChange} required/>
                        <div className="error">{mentorErrors.mmobile}</div>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="mconame" id="req">Previous Mentorship Company Name :  </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter company name" id='mconame' name="mconame" value={mentorData.mconame} onChange={handleChange} required/>
                        <div className="error">{mentorErrors.mconame}</div>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="myear" id="req">Years of Experience :  </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter years" id='myear' name="myear" value={mentorData.myear} onChange={handleChange} required/>
                        <div className="error">{mentorErrors.myear}</div>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="msector" id="req">Sector of Mentorship :  </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="Enter sector" id='msector' name="msector" value={mentorData.msector} onChange={handleChange} required/>
                        <div className="error">{mentorErrors.msector}</div>
                        <br></br>
                    </div>
                    <div>
                        <Form.Label className='mentformlbl' htmlFor="mlink" id="req">Linkedin :  </Form.Label>
                        <br></br>
                        <Form.Control type="text" placeholder="https://www.linkedin.com/in/" id='mlink' name="mlink" value={mentorData.mlink} onChange={handleChange} required/>
                        <div className="error">{mentorErrors.mlink}</div>
                        <br></br>
                    </div>
                    
                    <br></br>
                    <br></br>
                </div><button className='mentformbut'><b>Submit</b></button>
            </form>
        </div>
    );
}
export default MentorForm