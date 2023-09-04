import React from 'react'
import Footer from './footer'
import Navbar2 from './navbar2'
import ContactUs from './contactus'
export default function Elearning(){
    return(
        <div>
        <div className="elear-container">

            <div className="elear"><b>ELEARNING</b></div>
            <Navbar2/>
        </div>
        <div>
            <ContactUs/>
        </div>
        <Footer/>
        </div>
    )

}
    


