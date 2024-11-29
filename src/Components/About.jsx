import React from "react";
import "./About.css";
import AnimatedSentence from "./AnimatedSentence";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function About() {
  return (
    <div className="about">
      <div>
        <AnimatedSentence>
          <p className="aboutsentence" style={{ marginBottom: 0 }}>
            "I am a dedicated front-end developer proficient in React and
            Next.js, driven to craft engaging web experiences with a focus on
            performance and usability."
          </p>
          <br />
          <br />
        </AnimatedSentence>
        <AnimatedSentence>
          <br />
          <br />
          <p className="aboutsentence" style={{ marginBottom: 0 }}>
            <MdMail />
            hasnanoushi66@gmail.com
            <br />
            <FaPhoneAlt />
            +919746230887
          </p>
        </AnimatedSentence>
      </div>
    </div>
  );
}

export default About;
