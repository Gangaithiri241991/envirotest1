import React from 'react'
import img from './doctor_click.png'
import ContactUs from './contactus';
import Navbar2 from './navbar2'
import Style from './style.css';
import Elevator from './elevator'
import Footer from './footer'
import Button from '@mui/material/Button';
export default function Doctor(){
    return(
        <div>
            doctor
            <Navbar2/>
            <div className="container-doctor">
              
            <img src={img}/>
            </div>
            <div className="headingdoc">
                <p><b>Doctor Click Away</b></p>
                </div>
                <h5>Works on Web</h5>
            
            <section>
            <div className="doc-heading">About Doctor Click Away</div>
                <div className="doctor-container2">
               
                    <p className="d">Doctor Click Away has a group of highly skilled and famous doctors with the aim to
                         provide next generation medical solutions. One of the main ways Doctor Click Away 
                         seeks to reduce health care costs is by engaging doctors, hospitals and other health
                          care providers to form networks that coordinate patient care. Doctor click away 
                          provides video call facility to connect with doctors and it has a vital feature 
                          called Virtual Blood Bank through which you can ask other users to donate blood.</p>
                          <span><ContactUs/> </span>
                          
                          
                </div><br/>
               
                <div> 
                <ol className="doc">
                    
                    <h6>Features</h6>
                    <li>Appointment booking</li>
<li>Video Call with doctor</li>
<li>Online storage and retrieval of health history</li>
<li>
Consult online with doctor
</li>
<li>Location based Doctor Search</li>
<li>Daily Health Tips</li>
<li>
Virtual blood bank
</li>
<li>Account signup with social login i.e. Gmail and Facebook</li>





</ol>
                
                    </div>
                    <div className="doc">
                        <h6>What The Project Means For us</h6>
                        <p>The purpose of Doctor Click Away is to reduce the communication gap between patients and doctors in a way that they can communicate to each other from anywhere, anytime</p>
                    <p>We aim to cover more cities and towns across the globe in the next few years and have more doctors from across specialties on the Doctor Click Away platform for online consultation</p>
                   <Button className="doctor-button">Enquiry</Button>
                   
                    </div>
            </section>
            <Footer/>
            </div>
            
        
    )
}