import React, { useEffect } from 'react'
import './Header.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import  Logo  from './mylogoimage1.png'

function Header() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, 
      
      [])
    return (
        <div className="header" >
        <div className="header__logo">
        <img src={Logo} width={200} alt="" />
      </div>
            <div className="header__props" data-aos="fade-in">
              <p>Ojochogwu</p>
              <h4>Frontend Developer.</h4>
              
            </div>
        </div>
    )
}

export default Header;
