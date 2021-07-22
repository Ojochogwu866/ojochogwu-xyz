import React from 'react'
import './Footer.css'
import { ImLinkedin,  AiFillGithub, AiFillTwitterCircle, AiFillCodepenCircle, RiTelegramFill } from 'react-icons/all'


function Footer() {
  
    return (
        <div className="Contact_me">
           <div className="footer__elements">
           
              <hr /> <div className="icons">
              <a data-v-670b333e="" href="https://www.linkdin.com/in/ojochogwu-d-0838a312b" aria-label="Ojochogwu On LinkdIn"
              target="_blank" rel="noreferrer noopener"><ImLinkedin/></a> 
              <a data-v-670b333e="" href="https://twitter.com/ojochogwu_d?s=9"
              aria-label="Ojochogwu On Twitter" target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle  /></a> 
              <a data-v-670b333e="" href="https://github.com/Ojochogwu866" aria-label="Ojochogwu On Github"
              target="_blank" rel="noreferrer noopener"><AiFillGithub /> </a>
              <a data-v-670b333e="" href="https://ojochogwu.xyz/codepen.io/Ojochogwu01/pen/[slug]"
              aria-label="Ojochogwu On Codepen"
              target="_blank" rel="noreferrer noopener"><AiFillCodepenCircle /></a> 
              <a data-v-670b333e="" href="https://t.me/odxyzz"
              aria-label="Ojochogwu On Telegram"
              target="_blank" rel="noreferrer noopener"><RiTelegramFill /></a></div><hr />
             </div>
             <div className="f-text">
             <p>Designed and Built by Ojochogwu Dickson</p></div>
            
        </div>
    )
}

export default Footer
