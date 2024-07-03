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
          </p>
        </AnimatedSentence>
      </div>
    </div>
  );
}

export default About;
