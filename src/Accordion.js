import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  
  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />

        
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
      <div className="acc_1">
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
          
          />
          <a href="https://github.com/Ojochogwu866/amazon-clone-front-end">{props.link} </a>
          <a href="https://github.com/Ojochogwu866/AIRBNB-CLONE">{props.acc2} </a>
          <a href="https://github.com/Ojochogwu866/">{props.acc3} </a>
          <a href="https://github.com/Ojochogwu866/Hulu-Mv-App-Clone">{props.acc4} </a>
          <a href="https://github.com/Ojochogwu866/Portofolioc">{props.acc5} </a>
          <a href="https://github.com/Ojochogwu866/robinhood-clone">{props.acc6} </a>

          <a href="/project" target="_blank">{props.viewlink} </a>
          <a href="/project" target="_blank">{props.viewlink1} </a>
          <a href="https://fourthstreamcapital.com">{props.viewlink2} </a>
          <a href="/project" target="_blank">{props.viewlink3} </a>
          <a href="/project" target="_blank">{props.viewlink4} </a>
          <a href="/project" target="_blank">{props.viewlink5} </a>
        </div>
       
        <div className="accordion__image">
         <img src={props.image}  alt="" />
        </div>
      </div>
    </div>

  );
}
export default Accordion;
