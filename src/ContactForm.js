import React from "react";
import './Contactform.css';
import { RiMailSendFill } from 'react-icons/all'
import "animate.css/animate.min.css";


export default function ContactForm (){

  return (  
          
        
    <form name="contact" method="POST"  data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
    <h3>Hi! <span className="emoji">👋</span> Send Me A Message</h3>
    <p>You can text anything, code reviews, gig collaborations, et cetera, i will respond.</p>
    <div className="inputs">
        <div>
        
        <input 
            type="text" 
            name="name" 
            id="name"
            placeholder="Your name"
            required
        />
       
        </div>
        <div>
        
        <input
            type="email" 
            name="email" 
            id="email"
            placeholder="Your email address"
            required
        />
        
        </div></div>
        <div>
        
        <textarea
            name="message"
            id="message"
            placeholder="Format: Hi Ojochogwu, i am XYZ and i want to inquire on ------ , Kindly respond to this message."
            required
        />
        
        </div>
        
        <button type="submit" >Send<div className="icons"> <RiMailSendFill/></div> </button>
    </form>      
  );
 }



