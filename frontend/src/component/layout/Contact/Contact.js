import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    
    <div className="contactContainer">
      <strong className="contact">Contact Us</strong>
      <div>
          
          <strong>Address:</strong>
          <h6>1205 Danmondi,Dhaka Sadar,Bangladesh</h6>
        </div>

        <div >
          <strong>Email:</strong>
          <h6>ariful.bsc.cse@gmail.com</h6>
        </div>

        <div >
          <strong>Call us:</strong>
          <h6>+8801888796740</h6>
        </div>

        <div >
          <strong>Time:</strong>
          <h6>10:00 Am - 10:00 Pm (everyday)</h6>
        </div>
    </div>
  );
};

export default Contact;
