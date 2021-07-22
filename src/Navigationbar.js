import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Link } from 'react-scroll';

const MenuLabel = styled.label`
  background-color: transparent;
  border-radius: 50%;
  height: 4rem;
  left: 83%;
  width: 3rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  top: 40px;
  position: fixed;
  @media (max-width: 768px){
    left: 70%;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
  
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "rgb(9, 10, 51)")};
  width: 1.5rem;
  height: 2px;
  font-weight: bold;
  display: inline-block;
  transition: all 0.3s;
  &::before,
  &::after{
    content: "";
    background-color: rgb(9, 10, 51);
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0px;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.6rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.6rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.6rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "0.6rem")};
  }
  
`;

const Navigation = styled.nav`
  height: 350px;
  position: fixed;
  top: 0;
  right: 0px;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;

  @media (max-width: 768px){
    right: -30px;
    top: 0;
  }
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  transition: 0.3s ease transform;
  transform: translate(-50%, -50%);
  text-align: end;
  background: #f0f0f0;
  height: 100%;
  width: 80%;
  max-width: 300px;
  top: 260px;
  right: -120px;
  padding-top: 40px;
  hr{
    height: 0px;
    border: 0px solid #0b1c35;
    border-bottom: 1px solid #0b1c35;
    margin-top: 15px;
    padding-bottom: 10px;
  }
 ul{
   padding: 10px;
   margin-top: 20px;

   h4{
     font-size: 16px;
     opacity: 0.3;
     padding-bottom: 5px;
   }
 li{
   list-style: none;
   padding: 10px;
   display: inline-block;
   
   a{
    text-decoration: none;
    color:rgb(9, 10, 51);
    transition: 0.5s;

    span{
      position: relative;
      display: block;
      transition: 0.5s;
    }
    span:nth-child(1)::before{
      content: '';
      position: absolute;
      top: calc( 50% - 10px );
      right: 0;
      width: 50%;
      height: 100%;
      background: #9e59aa;
      transform-origin: left;
      transform: scaleX(0);
      transition: 0.5s;
      z-index: -1; 
      opacity: 0.8;
    }
    &:hover span:nth-child(1)::before {
      transform: scaleX(1);
    }  
   }
`;

const ItemLink = styled(NavLink)`
  display: block;
  background-size: 50%;
  transition: all 0.4s;
  display: inline-block;
  padding: 1rem 1rem;
  font-size: 16px;
  color: #080130;
  text-transform: none;
  font-family: 'Encode Sans SC', sans-serif;
  text-decoration: none;
  outline: none;

  span{
    position: relative;
    display: block;
    transition: 0.5s;
  }
  span:nth-child(1)::before{
    content: '';
    position: absolute;
    top: calc( 50% - 10px );
    right: 0;
    width: 20%;
    height: 100%;
    background:  #9e59aa;
    transform-origin: right;
    transform: scaleX(0);
    transition: 0.5s;
    z-index: -1; 
    opacity: 0.8;
  }
  &:hover span:nth-child(1)::before {
    transform: scaleX(1);
  }  
   }
 
`;

function Navigationbar() {

 

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click} >&nbsp;</NavBackground>
      <Navigation clicked={click}>
        <List>
          <li>
          <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          ><ItemLink onClick={handleClick} to="/project">
              <span>Work</span>
            </ItemLink></Link>
          </li>
          <li id="Contact_me">
          <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          ><ItemLink onClick={handleClick} to="contact">
          <span>Contact</span>
            </ItemLink></Link>
          </li>
          <li>
          <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          ><ItemLink onClick={handleClick} to="resume">
          <span>Resume</span>
            </ItemLink></Link>
          </li>

          <hr/>
          <ul>
          <h4>SAY HELLO TO ME</h4>
          <li><a data-v-670b333e="" href="https://github.com/Ojochogwu866" aria-label="Ojochogwu On Github"
          target="_blank" rel="noreferrer noopener"><span>GH</span></a></li>
          <li><a data-v-670b333e="" href="https://www.linkdin.com/in/ojochogwu-d-0838a312b" aria-label="Ojochogwu On LinkedIn"
          target="_blank" rel="noreferrer noopener"><span>LN</span></a></li>
          <li><a data-v-670b333e="" href="https://twitter.com/ojochogwu_d?s=9" aria-label="Ojochogwu On Twitter"
          target="_blank" rel="noreferrer noopener"><span>TW</span></a></li>
          <li><a data-v-670b333e="" href="https://t.me/odxyzz" aria-label="Ojochogwu On Telegram"
          target="_blank" rel="noreferrer noopener"><span>TG</span></a></li>
          </ul>
         
        </List>
      </Navigation>
    </>
  );
}

export default Navigationbar;