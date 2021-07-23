import React, { useState, useEffect } from "react";
import './Contactform.css';
import { RiMailSendFill } from 'react-icons/all'
import "animate.css/animate.min.css";

const ContactForm = () => {
  const [formData, setFormData ] = useState({
    name: "",
    email: "",
    message: ""

  })
  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const [errors, setErrors ] = useState({})
  const validate = (formData) => {
    let formErrors = {}
    if(!formData.name){
      formErrors.name = "Enter Your Name"
    }
    if(!formData.email){
      formErrors.email = "Enter Your Email"
    }
    if(!formData.message){
      formErrors.message = "Message Required"
    }
    return formErrors
  }
  const [isSubmitted, setIsSubmitted ] = useState(false)

  const handleSubmit = e => {
    setErrors(validate(formData))
    setIsSubmitted(true)

    e.preventDefault();
  }
  const encode = (data) => {

    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  useEffect(() =>{
    if(Object.keys(errors).length === 0 && isSubmitted){
      fetch("/",{
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({"form-name": "contact-form", ...formData})
      })
      .then(() => alert("Thank You!"))
      .then(() => setIsSubmitted(false))
      .then(() => setFormData({name: "", email: "", message: ""}))
      .catch(error => alert(error))
    }

  }, [errors, formData, isSubmitted])

  return (  
          
        
    <form onSubmit={handleSubmit} >
    <h3>Hi! <span className="emoji">👋</span> Send Me A Message</h3>
    <p>You can text anything, code reviews, gig collaborations, et cetera, i will respond.</p>
    <div className="inputs">
        <div>
        
        <input 
            type="text" 
            name="name" 
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
        />
        {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
        
        <input
            type="email" 
            name="email" 
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
        />
         {errors.email && <p>{errors.email}</p>}
        </div></div>
        <div>
        
        <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Format: Hi Ojochogwu, i am XYZ and i want to inquire on ------ , Kindly respond to this message."
            required
        />
         {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Send<div className="icons"> <RiMailSendFill/></div> </button>
    </form>      
  );
 }

export default ContactForm;
