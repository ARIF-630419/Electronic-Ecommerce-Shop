import React from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import  { useRef } from "react";
const Contact = () => {
  const form = useRef(null)
  const handleSubmit = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_z31ujqj', 'template_zbiqelp', form.current, 'w15iQbZy-fBTknB8a')
      .then((result) => {
        alert("Thanks for your report we will reply it in very soon...");
       
      }, (error) => {
        alert("Message Not Send...");
      });
      
  }
  return (
    
    <div className="contactContainer">
      <strong className="contact">Contact Us</strong>
      <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0",
               }} ref={form}
               onSubmit={handleSubmit}
               >
                   <input type="text" placeholder='Write your Name ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }} 
                   name='name'
                   />
                    <input type="text" placeholder='Write a Subject ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='subject'
                   />
                   <input type="email" placeholder='write your Email ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name="email"
                   />
                   <textarea cols="30" rows="5" required placeholder='write your message ...'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                }}
                name='message'
                   ></textarea>
                   
                   <button 
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"#3BB77E",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Submit</button>
               </form>
    </div>
  );
};

export default Contact;
