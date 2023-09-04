import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"
import img from "./work.png"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ltkgu4j', 'template_p612nno', form.current, 'kuHWrNTRwU3ESkUYc')
      .then((result) => {
          console.log(result.text);
          console.log("message send")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset ()
  };
        
    
    return(
        <div className="container-contact">
            <div className="contact-img">
            <img src={img} height="80%" width="80%"/></div>
            <div className="contact-details">
          
            <form className="contus-container" ref={form} onSubmit={sendEmail}>
               <div><h6>share your query and message</h6></div>
               
               <input type="text"  palceholder="Enter your name" ></input><br/><br/>
             <input type ="number"  placeholder="Phone number"/><br/><br/>
              <input type="email"  placeholder="enter email"/><br/><br/>
             <textarea type="text" placeholder="Enter Your message"/><br/><br/>
             <div ><button className="botton"> Submit</button></div> 
           </form>
             </div>
            
           </div>
         
      
    )
}
export default Contact