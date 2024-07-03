import React from "react";
import "./About.css";
import AnimatedSentence from "./AnimatedSentence";

function About() {
  return (
    <div className="about">
      <div>
        <AnimatedSentence>
          <p className="aboutsentence" style={{marginBottom:0}}>
          "I am a dedicated front-end developer proficient in React and Next.js, driven to craft engaging web experiences with a focus on performance and usability."
          </p><br/><br/>
        </AnimatedSentence>
        <AnimatedSentence>
          <br/><br/>
          <p className="aboutsentence" style={{marginBottom:0}}>
          Mail:hasnanoushi66@gmail.com<br/>
          Mob:+91 9746230887(India)
          </p>
        </AnimatedSentence>
      </div>
    </div>
  );
}

export default About;
