import React from 'react'
import Navpop3 from './navpop3'
import Navpop2 from './navpop2'
import Navpop from './nav pop'
import img from "./images.png"
import Button from '@mui/material/Button';
import  {NavLink} from "react-router-dom"

export default function Navbar2(){
    return(
        <div> 
            <div className= "navbar2-container">
           <div  className="lognavbar2">
        <img src={img} width="50%" height="50%"/></div>
      
          <div className="nav-navbar2">
                <li> <NavLink to="/"><Button variant="contained" >Home</Button></NavLink></li>
                <li> <NavLink to="/about"><Button variant="contained" >About</Button></NavLink></li>
                <li>  <NavLink to="/news"><Button variant="contained" >News</Button></NavLink></li>
                <li><Navpop3/></li>
                <li><Button variant="contained" >Clients</Button></li>
            
            <li><Button variant="contained" >Careers</Button></li>
            <li><Navpop2/></li>
                <li><Navpop/></li>  
            <li><Button variant="contained" >Contactus</Button></li> 
            <li><Button variant="contained" >Blogs</Button></li>
            </div>   
            </div>
            </div>
    )
    
}