import React from 'react'
import MaterialCard from './materialcard'
import MaterialCard1 from './materialcard1'
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom"
import img from "./images.png"
import Navbar2 from './navbar2'
import Hrmscss from './hrms.css'
import ContactUs from './contactus'
import Footer from './footer'
export default function Hrms(){
    return(
        <div>
            <h6>hrms</h6>


<Navbar2/>

<div className="hrms-container">

<h4>HUMAN RESOURCE MANAGEMENT SYSTEM</h4>
</div>
<div className="hrms2"><img src={img}/></div>

<div className="hrms3"><b>WORK ON WEB</b></div>
<div className="hrmsbutton" >
<NavLink to="/hrms"><Button variant="contained"> Get It On WEBSITE </Button></NavLink>
   
   


    </div><br/><br/>

    <div className="doctor-container2">
               
               <p className="d"> <h6>About Hrms</h6>A human resources management system or human resources information system is a form of human resources software that combines a number of systems and processes to ensure the easy management of human resources, business processes and data</p>
                     <span><ContactUs/> </span>
                     
                     
           </div><br/>
           <div> 
                <ol className="doc">
                    
                    <h6>Features</h6>
                    <li>Employee management</li>
<li>Attendance
</li>
<li>Training</li>
<li>
Task scheduling
</li>
<li>Leave management</li>
<li>Payroll</li>
<li>
Report

</li>
<li>Account signup with social login i.e. Gmail and Facebook</li>





</ol>
                
                    </div>
                    <div className="doctor-container2">
               
               <p className="d"> <h6>What The Project Means For us</h6>Finding a HRMS that fits your needs can be fast and easy! We take the pain out of your search by doing all of the heavy lifting for you and providing you with a short list of highly compatible solutions
               <div className="hrms4"><NavLink to="/hrms"><Button variant="contained"> Done </Button></NavLink>
               <NavLink to="/hrms"><Button variant="contained"> Enquiry </Button></NavLink></div>
               
               </p>
                    
              
                     
           </div><br/><br/>
    <div> <h6>OUR PRODUCTS</h6> </div>
    <div className="hrmscard">
    
    <MaterialCard title= 'good2' />
    <MaterialCard1/>
    
    </div><br/><br/>
<Footer/>
           
        </div>
        
    )
}