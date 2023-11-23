import React, { useState , useEffect } from 'react';
import './investThanks.css';
import Handshake from '../img/handshake.png';
import Tickimg from '../img/tickimg.png';
function InvestThanks() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
return (
    <div className='itop'>
    <div className='imain'> 
    <div className='ihead'>
        <h1 className='imainhead'> Kudos !!</h1>
        <img className='ihandshake' src={Handshake} alt='Submitted Image'/>
    </div>
        <p className='ipara1'><img className='itickimg' src={Tickimg} alt='submit'/> You have successfully submitted the Investor Registration Form.</p>
        <p className='ipara'>Thank You for showing your interest in collaborating with our Incubation Center.Your support and guidance will help the rising startups to reach great heights. We are excited to connect and collaborate with you soon.You will be further notified about the status of your registration after discussing with the administration. All such communication will be done via e-mail id which you have provided.<br></br><br></br>
        <b>Have a Nice Day...</b></p>
        <br />
        <br />
        <h5 className='ipara'>Its safe to close this tab now.</h5>
    </div>
    </div>
    );
}
export default InvestThanks;