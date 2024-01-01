import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
const ProgramRegistration = () => {
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyCkd6vC8Qk_SVwwhZXML5Dbrm8PCioyArXaaIZLPRcwfzCLWUhoCLW363lgFamP_Vm/exec"
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate();

    const getCurrentDate = () => {
        const now = new Date();
        return `${now.toLocaleDateString()}`;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formData = new FormData(formRef.current);
        // Adding submission date to the form data
        formData.append('Date', getCurrentDate());
        fetch(scriptUrl, {
          method: 'POST',
          body: formData,
        })
          .then((res) => {
            console.log('SUCCESSFULLY SUBMITTED');
            setLoading(false);
            navigate('/programs');
          })
          .catch((err) => console.log(err));
      };
    

  return (
    <>
        <div className="form-container">
        <form  ref={formRef} onSubmit={handleSubmit} name="google-sheet">
        <div className="input-style">
            <label htmlFor='name'>Name</label><br></br>
            <input type="text" className="form-control"  name="Name" placeholder='Name' required />
        </div>  
        <div className="input-style">
            <label htmlFor='name'>Email</label><br></br>
            <input type="email" className="form-control"  name="email" placeholder='Email' required />
        </div>
        <div className="input-style">
            <label htmlFor='name'>Phone No</label><br></br>
            <input type="text" className="form-control"  name="contact no" placeholder='Contact no' required/>
        </div>
        <div className="input-style">
            <label htmlFor='name'>Branch</label><br></br>
            <input type="text" className="form-control"  name="branch" placeholder='Branch'  required/>
        </div>
        <div className="input-style">
            <label htmlFor='name'>Year</label><br></br>
            <input type="text" className="form-control"  name="year" placeholder='Year of Study' required />
        </div>
        <div className="input-style">
            <label htmlFor='name'>College</label><br></br>
            <input type="text" className="form-control"  name="college" placeholder='College' required/>
        </div>
        <div className="input-style">
            <input type="submit" className="auth-btn" value={loading ? "sending..." : "SEND MESSAGE"} />
        </div> 
        </form>
        </div>
    </>  
  )
}

export default ProgramRegistration