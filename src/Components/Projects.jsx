import React from 'react'
import './Projects.css'
import AnimatedSentence from './AnimatedSentence'

function Projects() {
  return (
    <div>
      <AnimatedSentence>
      <div className='projectsParent'>
        <div className='firstProject '>
        <h1>E-Commerce Application (React JS)</h1>
        <ul>
          <li>Developed an e-commerce application using React.js for the frontend and integrated it with Commerce.js for the backend. The application allows users to browse through products, add items to their cart etc.</li>
        </ul>
        <a href="https://github.com/hasnanoushi/reactjs-ecommerce"  className='links'>Github Repository</a><br/>
        <a href="https://reactjs-ecommerce-xbiy.vercel.app/" className='links'>See the deployed Site</a>
        </div>

        <div className='secondProject '>
        <h1>E-Commerce Application (Next JS)</h1>
        <ul>
          <li>Developed an e-commerce application using Next.js for the frontend and integrated it with Commerce.js for the backend. The application allows users to browse through products, search for products, add items to their cart,remove from cart etc.</li>
        </ul>
        <a href="https://github.com/hasnanoushi/next-commerce-js-pages" className='links'>Github Repository</a><br />
        <a href="https://next-commerce-js-pages-ny1q.vercel.app/" className='links'>See the deployed Site</a>
        </div>

        <div className='thirdProject '>
        <h1>Cowin Portal HomePage Clone using CSS,Bootstrap</h1>
        <ul>
          <li>Designed a webpage that mimics the homepage of cowin portal using HTML,CSS and bootstrap.</li>
        </ul>
        <a href="https://github.com/hasnanoushi/bootstrap-cowin" className='links'>Github Repository</a><br />
        <a href="https://bootstrap-cowin-nz51k2vif-hasnas-projects-d0b3ff1d.vercel.app/" className='links'>See the deployed Site</a>
        </div>

        <div className='fourthProject '>
          <h1>Calculator</h1>
          <ul>
            <li>This sample calculator is a basic web application built using HTML, CSS, and JavaScript. It provides a simple user interface for performing arithmetic operations such as addition, subtraction, multiplication, and division.</li>
          </ul>
         <a href="https://github.com/hasnanoushi/calculator" className='links'>Github Repository</a><br/>
         <a href=" https://calculator-ten-gold-48.vercel.app/" className='links'>See the deployed Site</a>
        </div>
       <div className='fifthProject '>
          <h1>Hospital Website</h1>
          <ul>
            <li>A website that mimics a hospital's website using ReactJS</li>
          </ul>
         <a href="https://github.com/hasnanoushi/Hospital-website" className='links'>Github Repository</a><br/>
         <a href=" https://hospital-website-ecru.vercel.app/" className='links'>See the deployed Site</a>
        </div>
<br/>
      </div>
      </AnimatedSentence>
      
    </div>
  )
}

export default Projects