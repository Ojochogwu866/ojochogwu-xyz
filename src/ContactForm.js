import React from "react";
import './Contactform.css';
import { RiMailSendFill } from 'react-icons/all'
import "animate.css/animate.min.css";

const encode = (data) => {

  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Send"
    };   
  } 
  // render() {}

  render() {
    const { name, email, message } = this.state;
    return (  
          
        
        <form onSubmit={this.handleSubmit} >
        <h3>Hi! <span className="emoji">👋</span> Send Me A Message</h3>
        <p>You can text anything, code reviews, gig collaborations, et cetera, i will respond.</p>
        <div className="inputs">
            <div>
            
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={this.handleChange}
                placeholder="Your name"
                required
            />
            </div>
            <div>
            
            <input
                type="email" 
                name="email" 
                value={email} 
                onChange={this.handleChange}
                placeholder="Your email address"
                required
            />
            </div></div>
            <div>
            
            <textarea
                name="message" 
                value={message} 
                onChange={this.handleChange}
                id="message"
                placeholder="Format: Hi Ojochogwu, i am XYZ and i want to inquire on ------ , Kindly respond to this message."
                required
            />
            </div>
            <button type="submit">Send<div className="icons"> <RiMailSendFill/></div> </button>
        </form>      
    );
}
handleSubmit = e => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

  e.preventDefault();
};

handleChange = e => this.setState({ [e.target.name]: e.target.value });

 }
 
export default ContactForm;
