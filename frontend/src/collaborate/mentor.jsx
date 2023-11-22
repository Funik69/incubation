import React , {useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';
import './mentor.css';
import mentor1 from '../img/mentor1.jpg';
import { useNavigate } from 'react-router-dom';
function Mentor() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const name = localStorage.getItem('auth');
    const Helper = () => {
        if(name) {
            navigate('/mentorform');
        }
        else {
            alert('Please login to continue');
            navigate('/login');
        }
    }
    const navigate = useNavigate();
    return (
        <div>
            <div className='menthere'>
                
                <div className='mentdohere'>
                <TypeAnimation
                    sequence={["Mentor",1000," Mentors",1000,]}
                    speed={50}
                    repeat={4}
                    style={{ fontSize: '70px', fontWeight: '800', color: '#0d0254'}}
                    className='mentanimation'
                />
                </div>
                
                <div className='mentmain'>
                    <div className='mentinfo'>
                        <h2 className='menttopic'>"A mentor is someone who allows you to see the hope inside yourself." </h2>
                        <p className='mentpara'>Incubation Center, IET DAVV, established in 2017, is one of the supportive business and technology incubators promoting startups and social enterprises of every possible domain. We onboard startups and support innovators instrumental in contributing towards our vision to make India a global hub.</p>
                    </div>
                    <img src={mentor1} height='300px' width='500px' className='mentimg'></img>
                    
                </div>
                <div>
                    <div className='mterms'>
                    <h2>** Terms and conditions</h2>
                    <ol>
                    <li>At Institute of Engineering and Technology, DAVV, we assure you that the data provided by you will be kept secure and safe. But the information which you will be providing can be shared with our administration in order to examine and move forward with your candidature.</li>
                    <li>You should agree to the rules and regulations of Incubation Centre, IET-DAVV and must adhere to them. </li>
                    <li>If any discrepancies will be found in the data provided by you, IET-DAVV Incubation Center has total rights to cancel your registration so it will be your sole responsibility to provided correct and accurate information.</li>
                    </ol>
                    </div>
                    <div>
                    <label className="mcheck">
                        <input type="checkbox" name="mrights"  checked onClick={() => alert("Please agree to our terms and conditions inorder to continue")} required/>
                            I agree to the terms and conditions.
                    </label>
                    </div>
                </div>
                <button className='mentbut'onClick={Helper}> <b>Agree and Continue</b></button>
            </div>
        </div>
    );
}
export default Mentor;