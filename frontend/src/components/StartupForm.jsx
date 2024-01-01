import React, { useState , useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "./StartupForm.css";

const tokenData = localStorage.getItem("auth");
const val = JSON.parse(tokenData);
//const mail = val.user.email;
const mail = val && val.user ? val.user.email : '';

const formData_initialState = {
  startupName: "",
  founderName: "",
  mobileNumber: "",
  alternateNumber: "",
  instituteName: "",
  mentorName:"",
  email: mail,
  location: "",
  state: "",
  pinCode: "",
  businessIdea: "",
  businessModelFile: "",
  whyJoinUs: "",
  registered: "",
  development: "",
  successful: "",
  linkedinProfile: "",
  ietDavvRights: false,
  sharewithmentor: false,
  status:"pending",
  
};

function StartupForm() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   startupName: "",
  //   founderName: "",
  //   mobileNumber: "",
  //   alternateNumber: "",
  //   email: "",
  //   location: "",
  //   state: "",
  //   pinCode: "",
  //   businessIdea: "",
  //   businessModelFile: null,
  //   whyJoinUs: "",
  //   registered: "",
  //   development: "",
  //   successful: "",
  //   linkedinProfile: "",
  //   ietDavvRights: false,
  //   sharewithmentor: false,
  // });
  //mentor
  const [mentor, setMentor] = useState([]);
  const [formData, setFormData] = useState(formData_initialState)
  const [loading,setLoading] = useState(false)

  const [formErrors, setFormErrors] = useState({
    startupName: "",
    founderName: "",
    mobileNumber: "",
    alternateNumber: "",
    instituteName: "",
    mentorName:"",
    email: mail,
    location: "",
    state: "",
    pinCode: "",
    businessIdea: "",
    businessModelFile: "",
    whyJoinUs: "",
    registered: "",
    development: "",
    successful: "",
    linkedinProfile: "",
    ietDavvRights: "",
    sharewithmentor: "",
    status:"pending",
    
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (formData.startupName.trim() === "") {
      newErrors.startupName = "Startup Name is required";
      isValid = false;
    } else {
      newErrors.startupName = "";
    }

    if (formData.founderName.trim() === "") {
      newErrors.founderName = "Founder Name is required";
      isValid = false;
    } else {
      newErrors.founderName = "";
    }

    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid Mobile Number";
      isValid = false;
    } else {
      newErrors.mobileNumber = "";
    }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(formData.email)) {
    //   newErrors.email = "Invalid Email Address";
    //   isValid = false;
    // } else {
    //   newErrors.email = "";
    // }

    if (formData.location.trim() === "") {
      newErrors.location = "Location is required";
      isValid = false;
    } else {
      newErrors.location = "";
    }

    if (formData.state.trim() === "") {
      newErrors.state = "State is required";
      isValid = false;
    } else {
      newErrors.state = "";
    }

    const pinCodeRegex = /^\d{6}$/;
    if (!pinCodeRegex.test(formData.pinCode)) {
      newErrors.pinCode = "Invalid Pin Code";
      isValid = false;
    } else {
      newErrors.pinCode = "";
    }

    if (formData.businessIdea.trim() === "") {
      newErrors.businessIdea = "Business Idea is required";
      isValid = false;
    } else {
      newErrors.businessIdea = "";
    }

    if (formData.businessModelFile.trim()==="") {
      newErrors.businessModelFile = "Business Model file is required";
      isValid = false;
    } else {
      newErrors.businessModelFile = "";
    }

    if (formData.whyJoinUs.trim() === "") {
      newErrors.whyJoinUs = "Please provide a reason for joining us";
      isValid = false;
    } else {
      newErrors.whyJoinUs = "";
    }

    if (formData.registered.trim() === "") {
      newErrors.registered = "Please specify if you are registered";
      isValid = false;
    } else {
      newErrors.registered = "";
    }

    if (formData.development.trim() === "") {
      newErrors.development = "Please specify the stage of development";
      isValid = false;
    } else {
      newErrors.development = "";
    }

    if (formData.successful.trim() === "") {
      newErrors.successful = "Please specify how it become successful";
      isValid = false;
    } else {
      newErrors.successful = "";
    }

    const linkedinRegex = /https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9-]+\/?/;
    if (!linkedinRegex.test(formData.linkedinProfile)) {
      newErrors.linkedinProfile = "Linkedin Profile is invalid";
      isValid = false;
    } else {
      newErrors.linkedinProfile = "";
    }

    if (!formData.ietDavvRights) {
      newErrors.ietDavvRights = "You must agree to the IET DAVV rights";
      isValid = false;
    } else {
      newErrors.ietDavvRights = "";
    }

    if (!formData.sharewithmentor) {
      newErrors.sharewithmentor = "You must agree to the sharing";
      isValid = false;
    } else {
      newErrors.sharewithmentor = "";
    }
    

    if (formData.instituteName.trim() === "") {
      newErrors.instituteName = "Institute Name is required";
      isValid = false;
    } else {
      newErrors.instituteName = "";
    }

    if (formData.mentorName.trim() === "") {
      newErrors.mentorName = "Institute Name is required";
      isValid = false;
    } else {
      newErrors.instituteName = "";
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === "checkbox" ? checked : files ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const isValid = validateForm();
    
    if (isValid) {
      try {
        const response = await fetch('http://localhost:8000/api/v1/data/savedata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response && response.status==201) {
          console.log("success");
          console.log(formData);
          navigate('/Thanks');
          const formDataToSend = {
            receiverEmail: formData.email, // Receiver's email from the form
            subject: 'Incubation and Innovation Hub - A helping hand for StartUp',
            message: formData.founderName,};
      
            try {
              const res = await fetch("http://localhost:8000/send-email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataToSend),
              });
      
              if (res.status === 200) {
                // setFormData({
                //   startupName: "",
                //   founderName: "",
                //   mobileNumber: "",
                //   alternateNumber: "",
                //   email: "",
                //   location: "",
                //   state: "",
                //   pinCode: "",
                //   businessIdea: "",
                //   businessModelFile: null,
                //   whyJoinUs: "",
                //   registered: "",
                //   development: "",
                //   successful: "",
                //   linkedinProfile: "",
                //   ietDavvRights: "",
                //   sharewithmentor: "",
                // });
                setLoading(false);
          setFormData(formData_initialState)
                console.log("Email sent successfully");
                // You can add further logic or redirection after successful email sending.
              } 
              else {
                console.error("Error sending email");
                // Handle the error as needed.
              }
            }
             catch (error) {
              console.error("Error sending email: ", error);
            }
          }
        
          else {
            console.log("Use unique Name");
            setLoading(false);
            alert("Use unique Name");
          }
        } 
      
       
    catch (error) {
        console.error('Error:', error);
      }
    
  }
}

//mentor parsing
const getAllMentor = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/api/v1/mentor/get_mentor');
    setMentor(data.mentor);
  } catch (error) {
    console.log(error);
  }
};

// Lifecycle method
useEffect(() => {
  getAllMentor();
}, []);
    

  return (
    <div className="mainCont">
      <div id="cover">
        <h2 className="h12">
          Innovation and Incubation Hub - A helping Hand for Startups
        </h2>
        <h3 className="h13">Apply for Incubation</h3>
        <br></br>
        <br></br>
      </div>
      <div className="RegForm">
        <form onSubmit={handleSubmit}>
          <div className="Userinfo">
            <h4 className="h14">Applicant's Information</h4>
            <div className="c1">
              <div>
                <label className="lbl" htmlFor="startupName" id="req">
                  Startup Name
                </label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter startup name"
                  id="startupName"
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleChange}
                  required
                />
                <div className="error">{formErrors.startupName}</div>
              </div>

              <div>
                <label className="lbl" htmlFor="founderName" id="req">
                  Founder Name
                </label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter full name"
                  id="founderName"
                  name="founderName"
                  value={formData.founderName}
                  onChange={handleChange}
                  required
                />
                <div className="error">{formErrors.founderName}</div>
              </div>
            </div>

            <div className="c2">
              <div>
                <label className="lbl" htmlFor="mobileNumber" id="req">
                  Contact Number
                </label>
                <br></br>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                <div className="error">{formErrors.mobileNumber}</div>
              </div>

              <div>
                <label className="lbl" htmlFor="alternateNumber" id="req">
                  Alternate Number
                </label>
                <br></br>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  id="alternateNumber"
                  name="alternateNumber"
                  value={formData.alternateNumber}
                  onChange={handleChange}
                />
                <div className="error">{formErrors.alternateNumber}</div>
              </div>
            </div>
          
    {/* Choose Institute */}
        <div className="c2">
        <div>
        <label style={{fontSize:'20px'}}  htmlFor="instituteName" id="req">
                 Institute Name
                </label>
                <br></br>
          <select
            id="instituteName"
            name="instituteName"
            value={formData.instituteName}
            onChange={handleChange}
            required
          >
            <option value=""  disabled>
              Select Institute
            </option>
            <option value="IET DAVV" >IET DAVV</option>
            <option value="SCSIT">SCSIT</option>
            <option value="IIPS">IIPS</option>
          </select>
          <div className="error">{formErrors.instituteName}</div>
        </div>
      

    {/* Choose Mentor */}
  
        <div>
          <div><label style={{fontSize:'20px'}} htmlFor="mentorName" id="req">
            Select Mentor
          </label>
          <br></br>
          
          <select
            id="mentorName"
            name="mentorName"
            value={formData.mentorName}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Mentor
            </option>
            {mentor?.map((c) => (
                  <option key={c._id} value={c.mname}>
                    {c.mname}
                  </option>
                ))}
          </select>
          <div className="error">{formErrors.mentorName}</div>
        </div>
      </div>
      </div>



            <div className="c3">
              <div>
                <label className="lbl" htmlFor="email" id="req">
                  Email
                </label>{" "}
                <br></br>
                <input
                  type="email"
                  placeholder="Enter mail address "
                  id="email"
                  name="email"
                  disabled="true"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div>
                <label className="lbl" htmlFor="location" id="req">
                  Location
                </label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter current location"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <div className="error">{formErrors.location}</div>
              </div>
            </div>

            <div className="c4">
              <div>
                <label className="lbl" htmlFor="state" id="req" >
                  State
                </label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter state details"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
                <div className="error">{formErrors.state}</div>
              </div>

              <div>
                <label className="lbl" htmlFor="pinCode" id="req">
                  PIN Code
                </label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter pin code"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  required
                />
                <div className="error">{formErrors.pinCode}</div>
              </div>
            </div>
          </div>

          <h4 className="h14">Startup Proposal</h4>
          <div className="doc">
            <div>
              <label className="lbl" htmlFor="businessIdea" id="req">
                Startup idea summary in 200 words{" "}
              </label>
              <br></br>
              <textarea
                rows={8}
                cols={100}
                id="businessIdea"
                name="businessIdea"
                value={formData.businessIdea}
                onChange={handleChange}
                required
              />
              <div className="error">{formErrors.businessIdea}</div>
            </div>

            <div id="filee">
              <label className="lbl" htmlFor="businessModelFile" id="req">
                Business Model Link
              </label>
              <br></br>
              <input
                type="text"
                placeholder="Enter drive link"
                id="businessModelFile"
                name="businessModelFile"
                onChange={handleChange}
                required
              />
              <div className="error">{formErrors.businessModelFile}</div>
            </div>
          </div>
          <h4 className="h14">Program preferences</h4>
          <div className="ProgramPref">
            <div>
              <label className="lbl" htmlFor="whyJoinUs" id="req">
                Why you want to join us?
              </label>{" "}
              <br></br>
              <textarea
                rows={4}
                cols={60}
                id="whyJoinUs"
                name="whyJoinUs"
                value={formData.whyJoinUs}
                onChange={handleChange}
                required
              />
              <div className="error">{formErrors.whyJoinUs}</div>
            </div>

            <div>
              <label className="lbl" htmlFor="registered" id="req">
                Are you registered with any other incubation?
              </label>
              <br></br>
              <textarea
                rows={4}
                cols={60}
                id="registered"
                name="registered"
                value={formData.registered}
                onChange={handleChange}
                required
              />
              <div className="error">{formErrors.registered}</div>
            </div>

            <div>
              <label className="lbl" htmlFor="development" id="req">
                Stage of development?
              </label>{" "}
              <br></br>
              <textarea
                rows={4}
                cols={60}
                id="development"
                name="development"
                value={formData.development}
                onChange={handleChange}
                required
              />
              <div className="error">{formErrors.development}</div>
            </div>

            <div>
              <label className="lbl" htmlFor="successful" id="req">
                Specify how your startup became successful?
              </label>{" "}
              <br></br>
              <textarea
                rows={4}
                cols={60}
                id="successful"
                name="successful"
                value={formData.successful}
                onChange={handleChange}
                required
              />
              <div className="error">{formErrors.successful}</div>
            </div>
          </div>

          <div>
            <label className="lbl" htmlFor="linkedinProfile" id="req">
              Linkedin Profile
            </label>
            <br></br>
            <input
              placeholder="https://www.linkedin.com/in/"
              type="text"
              id="linkedinProfile"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleChange}
              required
            />
            <div className="error">{formErrors.linkedinProfile}</div>
          </div>
          <br></br>
          <label className="lbl">I confirm/agree to </label>
          <br></br>
          <div>
            <label className="lbl">
              <input
                type="checkbox"
                name="ietDavvRights"
                checked={formData.ietDavvRights}
                onChange={handleChange}
                required
              />
              All rights are reserved with DAVV
            </label>
            <div className="error">{formErrors.ietDavvRights}</div>
          </div>

          <div>
            <label className="lbl">
              <input
                type="checkbox"
                name="sharewithmentor"
                checked={formData.sharewithmentor}
                onChange={handleChange}
                required
              />
              The provided information may be shared with our mentors for
              evaluation and processing of the application.
            </label>
            <div className="error">{formErrors.sharewithmentor}</div>
          </div>

          <div className="btn">
            <button id="btnstyle" type="submit">
              <b>{loading ? "Sending..." : "Submit"}</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default StartupForm;