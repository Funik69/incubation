import React, { useState } from 'react';
import './StartupForm.css'
function StartupForm() {
  const [formData, setFormData] = useState({
    startupName: '',
    founderName: '',
    mobileNumber: '',
    alternateNumber: '',
    email: '',
    location: '',
    state:'',
    pinCode: '',
    businessIdea: '',
    businessModelFile: null,
    whyJoinUs: '',
    registered: '',
    development: '',
    successful: '',
    linkedinProfile: '',
    ietDavvRights: false,
    sharewithmentor:false,
  });

  const [formErrors, setFormErrors] = useState({
    startupName: '',
    founderName: '',
    mobileNumber: '',
    alternateNumber: '',
    email: '',
    location: '',
    state: '',
    pinCode: '',
    businessIdea: '',
    businessModelFile: '',
    whyJoinUs: '',
    registered: '',
    development: '',
    successful: '',
    linkedinProfile: '',
    ietDavvRights: '',
    sharewithmentor:'',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (formData.startupName.trim() === '') {
      newErrors.startupName = 'Startup Name is required';
      isValid = false;
    } else {
      newErrors.startupName = '';
    }

    if (formData.founderName.trim() === '') {
      newErrors.founderName = 'Founder Name is required';
      isValid = false;
    } else {
      newErrors.founderName = '';
    }

    const mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Invalid Mobile Number';
      isValid = false;
    } else {
      newErrors.mobileNumber = '';
    }

    if (!mobileNumberRegex.test(formData.alternateNumber)) {
      newErrors.alternateNumber = 'Invalid Mobile Number';
      isValid = false;
    } else {
      newErrors.alternateNumber = '';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid Email Address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.location.trim() === '') {
      newErrors.location = 'Location is required';
      isValid = false;
    } else {
      newErrors.location = '';
    }

    if (formData.state.trim() === '') {
      newErrors.state = 'State is required';
      isValid = false;
    } else {
      newErrors.state = '';
    }

    const pinCodeRegex = /^\d{6}$/;
    if (!pinCodeRegex.test(formData.pinCode)) {
      newErrors.pinCode = 'Invalid Pin Code';
      isValid = false;
    } else {
      newErrors.pinCode = '';
    }

    if (formData.businessIdea.trim() === '') {
      newErrors.businessIdea = 'Business Idea is required';
      isValid = false;
    } else {
      newErrors.businessIdea = '';
    }

    if (!formData.businessModelFile) {
      newErrors.businessModelFile = 'Business Model file is required';
      isValid = false;
    } else {
      newErrors.businessModelFile = '';
    }

    if (formData.whyJoinUs.trim() === '') {
      newErrors.whyJoinUs = 'Please provide a reason for joining us';
      isValid = false;
    } else {
      newErrors.whyJoinUs = '';
    }

    if (formData.registered.trim() === '') {
      newErrors.registered = 'Please specify if you are registered';
      isValid = false;
    } else {
      newErrors.registered = '';
    }

    if (formData.development.trim() === '') {
      newErrors.development = 'Please specify the stage of development';
      isValid = false;
    } else {
      newErrors.development = '';
    }

    if (formData.successful.trim() === '') {
      newErrors.successful = 'Please specify how it become successful';
      isValid = false;
    } else {
      newErrors.successful = '';
    }
    
    const linkedinRegex = /https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9-]+\/?/;
    if (!linkedinRegex.test(formData.linkedinProfile)) {
      newErrors.linkedinProfile = 'Linkedin Profile is invalid';
      isValid = false;
    } else {
      newErrors.linkedinProfile = '';
    }

    if (!formData.ietDavvRights) {
      newErrors.ietDavvRights = 'You must agree to the IET DAVV rights';
      isValid = false;
    } else {
      newErrors.ietDavvRights = '';
    }

    if (!formData.sharewithmentor) {
      newErrors.sharewithmentor = 'You must agree to the sharing';
      isValid = false;
    } else {
      newErrors.sharewithmentor = '';
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'checkbox' ? checked : files ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
    console.log(formData);
    const formDataToSend = {
      receiverEmail: formData.email, // Receiver's email from the form
      subject: 'Incubation and Innovation Hub - A helping hand for StartUp',
      message: `
      Dear ${formData.founderName}, 

      Thank you for registering with IET-DAVV Incubation. We are excited to have you as part of our entrepreneurial community and look forward to supporting your journey towards success.

      Please be informed that our team is currently processing your registration details. You can expect to receive a confirmation email with further instructions and next steps in a week. 
      
      We are committed to providing you with the best possible support and resources to help you succeed.`,
    };
    
    try {
      const response = await fetch('http://localhost:8000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.status === 200) {
        setFormData({
          startupName: '',
          founderName: '',
          mobileNumber: '',
          alternateNumber: '',
          email: '',
          location: '',
          state: '',
          pinCode: '',
          businessIdea: '',
          businessModelFile: '',
          whyJoinUs: '',
          registered: '',
          development: '',
          successful: '',
          linkedinProfile: '',
          ietDavvRights: '',
          sharewithmentor:'',
        });
        console.log('Email sent successfully');
        // You can add further logic or redirection after successful email sending.
      } else {
        console.error('Error sending email');
        // Handle the error as needed.
      }
    } catch (error) {
      console.error('Error sending email: ', error);
    }
  }
  };

  return (<> 
    <div id='cover'> 
         <h2>Innovation and Incubation - A helping Hand for Startups</h2>
         <h3>Apply for Incubation</h3><br></br><br></br>
    </div>
    <div className='RegForm'>
   
      <form onSubmit={handleSubmit}>
      <div className='Userinfo'>
      <h4>Applicant's Information</h4>
      <div className='c1'>
        <div>
          <label htmlFor="startupName">Startup Name*</label><br></br>
          <input
            type="text"
            placeholder='Enter startup name'
            id="startupName"
            name="startupName"
            value={formData.startupName}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.startupName}</div>
        </div>
  
        <div>
          <label htmlFor="founderName">Founder Name*</label><br></br>
          <input
            type="text"
            placeholder='Enter full name'
            id="founderName"
            name="founderName"
            value={formData.founderName}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.founderName}</div>
        </div>
        </div>
         
        <div className='c2'>
        <div>
          <label htmlFor="mobileNumber">Contact Number*</label><br></br>
          <input
            type="tel"
            placeholder='Enter mobile number'
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.mobileNumber}</div>
        </div>

        <div>
          <label htmlFor="alternateNumber">Alternate Number</label><br></br>
          <input
            type="tel"
            placeholder='Enter mobile number'
            id="alternateNumber"
            name="alternateNumber"
            value={formData.alternateNumber}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.alternateNumber}</div>
        </div>
        </div> 
  
        <div className='c3'>
        <div>
          <label htmlFor="email">Email*</label> <br></br>
          <input
            type="email"
            placeholder='Enter mail address '
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.email}</div>
        </div>
  
        <div>
          <label htmlFor="location">Location*</label><br></br>
          <input
            type="text"
            placeholder='Enter current location'
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.location}</div>
        </div>
        </div> 

        <div className='c4'>
        <div>
          <label htmlFor="state">State*</label><br></br>
          <input
            type="text"
            placeholder='Enter state details'
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.state}</div>
        </div>
  
        <div>
          <label htmlFor="pinCode">PIN Code*</label><br></br>
          <input
            type="text"
            placeholder='Enter pin code'
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

      <h4>Startup Proposal</h4>
      <div className='doc'>
        <div >
          <label htmlFor="businessIdea">Startup idea summary in 200 words </label><br></br>
          <textarea rows={8} cols={100}
            id="businessIdea"
            name="businessIdea"
            value={formData.businessIdea}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.businessIdea}</div>
        </div> 
  
        <div id="filee">
          <label htmlFor="businessModelFile">Business Model (PDF)*</label><br></br>
          <input
            type="file"
            id="businessModelFile"
            name="businessModelFile"
            accept=".pdf"
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.businessModelFile}</div>
        </div>
        </div> 

        <h4>Program preferences</h4>
        <div className='ProgramPref'>
        <div>
          <label htmlFor="whyJoinUs">Why you want to join us?</label> <br></br>
          <textarea rows={4} cols={60}
            id="whyJoinUs"
            name="whyJoinUs"
            value={formData.whyJoinUs}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.whyJoinUs}</div>
        </div>
  
        <div>
          <label htmlFor="registered">Are you registered with any other incubation?</label><br></br>
          <textarea rows={4} cols={60}
            id="registered"
            name="registered"
            value={formData.registered}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.registered}</div>
        </div>

        <div>
          <label htmlFor="development">Stage of development?</label> <br></br>
          <textarea rows={4} cols={60}
            id="development"
            name="development"
            value={formData.development}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.development}</div>
        </div>

        <div>
          <label htmlFor="successful">Specify how your startup became successful?</label> <br></br>
          <textarea rows={4} cols={60}
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
          <label htmlFor="linkedinProfile">Linkedin Profile</label><br></br>
          <input
          placeholder='https://www.linkedin.com/in/'
            type="text"
            id="linkedinProfile"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleChange}
            required
          />
          <div className="error">{formErrors.linkedinProfile}</div>
        </div>

   <label>I confirm/agree to </label><br></br>
        <div>
          <label>
            <input
              type="checkbox"
              name="ietDavvRights"
              checked={formData.ietDavvRights}
              onChange={handleChange}
              required
            />
            All rights are reserved with IET DAVV
          </label>
          <div className="error">{formErrors.ietDavvRights}</div>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="sharewithmentor"
              checked={formData.sharewithmentor}
              onChange={handleChange}
              required
            />
            The provided information may be shared with our mentors for evaluation and processing of the application.
          </label>
          <div className="error">{formErrors.sharewithmentor}</div>
        </div>

        <div className='btn'>
          <button id='btnstyle' type="submit">Submit</button>
        </div>
      </form>
    </div>
  </>);
}
  export default StartupForm;