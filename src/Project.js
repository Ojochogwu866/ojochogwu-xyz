import React from 'react';
import './Project.css'
import Accordion from './Accordion'
import "animate.css/animate.min.css";
import  Logo  from './mylogoimage1.png'

function Project() {
    return (
        
        <div className="project" id="projects">
        <div className="header__logo">
        <img src={Logo} width={200} alt="" />
      </div>
        <Accordion
          title="Amazon Clone"
          content="A simple build of the Amazon frontend built with ReactJS and Firebase for user login 
          authentication. It is a basic and less complex clone because it does not handle much task, 
          only basic functionalities like User Login and add to Cart functions."
          image="https://i.ibb.co/4f3kfTL/amazon.png"
           link="See more on Github" viewlink="View Website"
        />
        <Accordion
          title="AirBnB Clone"
          content="This AirBnB clone is a work i did as part of my ReactJs skill test challenge. 
          Really no added special feature, its simply a basic frontend build of the AirBnB web app. i built it
          with ReactJs."
          image="https://i.ibb.co/Sch3mn0/airbnb.png"
          acc2="See more on Github" viewlink1="View Website"
        />
        <Accordion
          title="FourthStream Capital"
          content="Fourthstream Capital is a Forex investment web app built for Fourthstream LLC, 
          to handle user investments and payouts. Built with HTML&CSS, Javascript. Its so flexible with a scalable 
          user interface system."
          image="https://i.ibb.co/MhPzDS2/fourthstream.png"
          acc3="See more on Github" viewlink2="View Website"
        />
        <Accordion
        title="Ojochogwu's Previous Portfolio"
        content="This is my first portfolio, built with HTML & CSS, then Javascript. its a more static site
        with really no special feature added, just a static site, and fully mobile responsive."
        image="https://i.ibb.co/QCnBXzy/ojocho.png"
        acc4="See more on Github" viewlink3="View Website"
        />
      <Accordion
      title="Hulu Movie App"
      content="Hulu Movie app is a clone of the Hulu App, i built this also as part of my ReactJs skill test
      challenge, i used the imdb api to keep the movie playlist alwayss current with new movie released 
      per playlist. Meanwhile this is also a frontend build of the application, built with ReactJs and 
      IMDB api."
      acc5="See more on Github" viewlink4="View Website"
      image="https://i.ibb.co/g9DNQWK/huluclone.png"
    />
    <Accordion
    title="Robinhood Clone"
    content="Robinhood clone is part of my ReactJs skill test challenge. I built it using an API - Finnhub API to get current 
    stock prices, and firebase to keep selected stock database"
    acc6="See more on Github" viewlink5="View Website"
    image="https://i.ibb.co/ZHL1gcG/robinhood.png"
  />
      </div>
       
    );
}

export default Project
