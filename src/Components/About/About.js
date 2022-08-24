import React from "react";
import AboutMessages from "../AboutMessages/AboutMessages";
import "./About.css";

const About = () => {
  return (
    <div className="about " id="About">
      <div className="about-container  " >
          <div className="about-info-heading gradientText">
            <h1>Your diet is always our priority</h1>
          </div>
          <div className="about-info-body">
            <button type="submit" >Learn More</button>
          </div>
      </div>
      <div className="about-info-message-container gradientText">
          <AboutMessages
            title="Who are We?"
            text="lorem30lorem30lm30 .Lorem30 lorem30lorr em30lorem
            30lorem30lorem30lorem30lorrem3"
          />
          <AboutMessages
            title="Mission"
            text="lorem30lorem30lorem 30lorem 30lor em30lorem 30lorem3"
          />
          <AboutMessages 
            title="Vision" 
            text="lorem30lorem30lorem 30lorem somwedhjg gvdstteay ywqefay." 
          />
      </div>
    </div>
  );
};

export default About;
