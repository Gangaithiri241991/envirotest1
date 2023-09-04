import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const ContactUs = () => {
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

  return (
      
    <div className="container-contact">
    
      <div className="contact-details">
      
    <form className="contus-container" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea type="text" placeholder="Enter Your message"/>
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
   
  );
};
export default ContactUs