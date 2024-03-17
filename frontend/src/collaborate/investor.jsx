import React , {useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';
import './investor.css';
import meetingimg from '../img/meeting3.jpg';
import { useNavigate } from 'react-router-dom';
function Investor() {
    const name = localStorage.getItem('auth');
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const Mover = () => {
        if(name) {
            navigate('/investform');
        }
        else {
            alert('Please login to continue');
            navigate('/login');
        }
    }
    return (
        <div>
            <div className='herehere2'>
                
                <div className='dohereneed'>
                <TypeAnimation
                    sequence={["Investor",1000," Investors",1000,]}
                    speed={50}
                    repeat={4}
                    style={{ fontSize: '60px', fontWeight: '800', color: '#0d0254'}}
                    className='animationhere'
                />
                </div>
                
                <div className='maininvest'>
                    <div>
                        <h2 className='topichere'>"An investment in knowledge pays the best interest." </h2>
                        <p className='paraherein'>Incubation Center, IET DAVV, established in 2017, is one of the supportive business and technology incubators promoting startups and social enterprises of every possible domain. We onboard startups and support innovators instrumental in contributing towards our vision to make India a global hub.</p>
                    </div>
                    <img src={meetingimg} height='300px' width='500px' className='investhereimg' alt='Investor_Image'></img>
                    
                </div>
                <div>
                <div className='iterms'>
                    <h2>Terms and conditions</h2>
                    <ol>
                    <li>At Institute of Engineering and Technology, DAVV, we assure you that the data provided by you will be kept secure and safe. But the information which you will be providing can be shared with our administration in order to examine and move forward with your candidature.</li>
                    <li>You should agree to the rules and regulations of Incubation Centre, IET-DAVV and must adhere to them. </li>
                    <li>If any discrepancies will be found in the data provided by you, IET-DAVV Incubation Center has total rights to cancel your registration so it will be your sole responsibility to provided correct and accurate information.</li>
                    </ol>
                    </div>
                    <div>
                    <label className="icheck">
                        <input type="checkbox" name="mrights"  defaultChecked onClick={() => alert("Please agree to our terms and conditions inorder to continue")} required/>
                            I agree to the terms and conditions.
                    </label>
                    </div>
                </div>
                <button className='becomebut'onClick={Mover}> <b>Agree and Continue</b></button>
            </div>
        </div>
    );
}
export default Investor;