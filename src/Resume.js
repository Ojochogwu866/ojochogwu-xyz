import React from 'react'
import './Resume.css'
import { ImLinkedin,  AiFillGithub, AiFillTwitterCircle } from 'react-icons/all'
import { Link } from 'react-router-dom'
import MyPDF from './files/ojo.resume.pdf'
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
              <li>Solidity</li>
              <li>HTML & (S)CSS</li>
              <li>Javascript</li>
              <li>VueJs</li>
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
             <p className="abt">Dickson is a Software Engineer, basically focused on Ux Engineering, bridging the gap between design and Engineering.
             He has excellence in skill overtime of working with several firms in the ecosystem. He is passionate on demystifying cool and complex stuffs in javascript. His blockchain programming skill is top notch as he is able to combine his innovative ideas with relevant skill and transform them to real time realities. Open source and technical writting are major areas he is motivated about and putting in necessary energy to make a mark.</p>
              <hr/>
             </div>
            

             <div className="experience">
             <h3>Work Experience</h3>

              <div className="exp_1">
               <h3>Frontend Developer - Fourthstreamcapital (Contract) </h3>
               <h4>December 2020 - April 2021</h4>
              <li>Worked as a frontend developer With fourthsttream, did full implementation of the products design and user experience.</li>
              
               </div>
              </div>
              <div className="experience">

              <div className="exp_1">
               <h3>Frontend Developer - Vinca </h3>
               <h4>September 2021 - December 2021</h4>
              <li>Frontend developer @clinikli, i handled the entire Ui component of the web, skillfully aligning with best practices for optimized user experience. </li>       
               </div>
               <div className="experience">
              <div className="exp_1">
               <h3>Frontend Developer - Sonvisage </h3>
               <h4>September 2021 - March 2022</h4>
              <li>Involved in handling a major component of the User interface.</li>
              <li>Inplementing best features for smooth user experience</li>  
               </div>
               <div className="exp_1">
               <h3>Frontend Developer - Clinikli </h3>
               <h4>November 2021 - June 2022</h4>
              <li>Ui design and implementation, was involved in handling a major crop of the user interface, coupled with optimization for best user experience. </li>
               </div>
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
