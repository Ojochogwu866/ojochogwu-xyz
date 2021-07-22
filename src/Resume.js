import React from 'react'
import './Resume.css'
import { ImLinkedin,  AiFillGithub, AiFillTwitterCircle } from 'react-icons/all'
import { Link } from 'react-router-dom'
import MyPDF from './files/Ojochogwu.resume.pdf'
import { FaFileDownload } from 'react-icons/all'


function Resume() {
  return (

        <div className="Resume" id="resume">
        <div className="socials"><a href="https://www.linkdin.com/in/ojochogwu-d-0838a312b"><ImLinkedin/></a> 
        <a href="https://twitter.com/ojochogwu_d?s=9"><AiFillTwitterCircle /></a> <a href="https://github.com/Ojochogwu866"><AiFillGithub /> </a>
         
         </div>
         <div className="resume__body">
         
           <div className="resume_side">
           
            <p>Ojochogwu Dickson <br/> Abuja, Nigeria</p>
            <div className="skillspan">
              <div className="skill">
              <h4>Skill and Expertise</h4>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>React Native</li>
              <li>HTML & (S)CSS</li>
              <li>Javascript</li>
              <li>Asp.Net</li>
              <li>NextJS</li>
            </div>
            <div className="skill1">
             <h4>Others: </h4>
             <li>UX Design</li>
             <li>PWAs</li>
             <li>Design Systems</li>
             <li>Responsive Web Design</li>
            </div>
            </div>
           </div>

           <div className="resume_col-2">

           <div className="resume__header">
            <h1>Ojochogwu Dickson</h1>
            <h4>Frontend Developer, Technical Writter and UX Engineer</h4>
            
          </div>

            <div className="resume__about">
             <p className="abt">Experienced frontend developer with focus on building scalable and
              optimized products that meet the cutting edge market requirements. I am focused
              on contributing my best to companies and individuals i have worked with, and hope to 
              work with. </p>
              <hr/>
             </div>
            

             <div className="experience">
             <h3>Experience</h3>
             <p>I have worked on a few projects in collaboration, and a full project myself, 
             here is a brief look into the latest project i worked on aside my personal development 
             projects which are on my github</p>

              <div className="exp_1">
               <h3>Fourthstream Capital — Frontend Developer (Contract) </h3>
               <h4>November 2020 - April 2021</h4>
              <p>This project was a Forex Investment web app, i worked with another
              developer who was primarily a backend developer on this.</p>
              <li>Was in charge of the design systems and pattern</li>
              <li> Worked Principally as the frontend developer</li>
              <li>Worked closely with the backend dev to implement necessary units, to bring about uniformity 
              in the app.</li>
              <li>Deliveverd a fast and scalable, optimized app to the clients based on their request</li>
              
               </div>
              </div>
             </div>
             
          </div>
          <div className="res">
          <Link style={{ textDecoration: 'none'}} to={MyPDF} target="_blank" download><span>DOWNLOAD
          <FaFileDownload /></span></Link>      
         </div>
          
          
        </div>
     
  )
}

export default Resume