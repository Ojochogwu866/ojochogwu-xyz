import React, { useEffect } from 'react'
import './main.css';
import Header from './Header';
import ContactForm from './ContactForm';
import { IoSettingsOutline, BsArrowRight } from 'react-icons/all';
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css";


function Main() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, 
  
  [])
    return (
        <div className="main">
             <div className="header">
        <Header />
        </div>
          
        <div className="main__about" data-aos="fade-up">
        <h3>About  <span><IoSettingsOutline/></span>
        </h3>
        <div className="about1">
        <div className="details">
              <p>Interested in building scalable frontend solutions, products, by using my frontend 
              skills, and also providing possible enhancements to already
              existing products by applying my knowledge of UI design priciples, and UX engineering experience. </p>
              <p  className="about-2">Primarily focused on web and mobile frontend related oppurtunities majorly in Javascript, I hope to work and learn from great teams,
               work with  them in implementing real-time products, concretely other than abstract
               formats. Skilled in HTML & CSS, Javascript(ES6+), Reactjs (Native), VueJs,
               NodeJs, bootstrap and others outlined on my resume.</p>
        </div>
        <div className="about__img">
        <img src="https://i.ibb.co/gmdgscd/DSC-3156-2.jpg" alt="" />
           <div className="image__effect">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div>
           </div>


        </div>
        </div>
      </div>

      
      <div className="exp" data-aos="fade-up" data-aos-duration="500" id="experience">
      
      <h3>Experience</h3>
      <div className="exp-det">
      <p>Worked as a freelance frontend developer on a few occasions - close to a year now, i have had a few colaborations 
      over time to work with other developers, and independent contracts as well. I focus on 
      scalability and put in maximum effort to build products with optimum user experience and meet up
      with expected output. I'm the guy with a few robust experiences in implementing the practices i have 
      gained expertise with. I am committed to building efficient product, package and projects
      that are of best format. </p>
     
       </div>
   </div>

      <div className="exp-sec"  data-aos="fade-up" data-aos-duration="500">
      <div className="work">
       <div className="projects">
         <p className="p-1">A few things i have worked on</p>
         <Link to="/project" className="button">See HERE <div className="icons"> <BsArrowRight/></div> </Link>
       </div>

      
       <div className="articles">
          <p>You can read my articles here also</p>
          <a href="https://hashnode.com/@ODDev" className="button">See HERE <div className="icons"> <BsArrowRight/></div> </a>

            </div>
           </div>
          </div>

          <div className="contact">
            <ContactForm id="contact"/>
          </div>
         
        </div>
    )
}

export default Main
