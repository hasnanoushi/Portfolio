import React from 'react'
import './Home.css'

import image from '../Assets/hasn.jpeg';
import TextSpan from './TextSpan';
import { FaDev, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


function Home() {

  const me = `I'm HASNA`.split('')
  const dev = `FRONTEND DEVELOPER`.split('')

  return (
    <div className='home' >
      
      <div className='name-container'>
          <div>
            {me.map((letter, index) => {
              return (
                  <TextSpan key={index}>
                    {letter ===" " ? "\u00A0":letter}
                  </TextSpan>
              
              );
            })}
          </div>

          <div >
            {dev.map((letter, index) => {
              return (
                  <TextSpan key={index}>
                    {letter ===" " ? "\u00A0":letter}
                  </TextSpan>
              
              );
            })}
          </div>
      </div>

      <div className='imgDiv'>
            <div className='imgFit'>
              <img src={image} alt="Image" className='photo' />
            </div>
            <div>
              <ul>

                <li >
                  <a href="https://www.linkedin.com/in/hasna-kkp-121b9b252/">
                  <FaLinkedin />
                  </a>
                
                </li>

                <li>
                  <a href="https://github.com/hasnanoushi">
                  <FaGithub />
                  </a>
                
                </li>

            
         
              </ul>
            </div>
            
      </div>

    </div>
  )
}

export default Home