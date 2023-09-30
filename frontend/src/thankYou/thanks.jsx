import React, { useState } from 'react';
import './thanks.css';
function Thanks() {
return (
    <div className='ttop'>
    <div className='tmain'> 
        <h1 className='thead'>Congratulations !!</h1>
        <p className='tpara1'>You have successfully submitted the Registration Form.</p>
        <p className='tpara'>Thank You for showing your interest in our Incubation Center. We'll make sure that you would receive the best guidance and support.<br />We hope to connect and collaborate with you soon. You will receive further notification via the registered mail which you provided.</p>
        <p className='tparaend'>Till then, keep learning and keep exploring...</p>
        <br />
        <br />
        <h5 className='tpara'>You can close this tab now.</h5>
    </div>
    </div>
    );
}
export default Thanks;