import React from "react";
import "./aboutSection.css";
import bg1 from "./../../../images/bg.png";
import { Typography} from "@material-ui/core";
const About = () => {
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div className="bacground">
            <img src={bg1} alt="bg" />
          </div>
          <div className="aboutSectionContainer2">
          <p>
              The online Electronics shop has been developed to override the problems prevailing in the practicing manual system. This software is supported to eliminate and in some cases reduce the hardships faced by this existing system. Moreover, this system is designed for the particular need of the company to carry out operations in a smooth and effective manner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
