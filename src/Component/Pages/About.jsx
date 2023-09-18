import React from 'react'
import Header from '../layout/Header'
import Aboutright from '../../images/Aboutright.jpg'
import Aboutleft from '../../images/Aboutleft.jpg'
const About = () => {
  return (
    <>
      <div className="All-banner">
        <div className="container">
          <h1> About us </h1>
        </div>
      </div>

      <div className="About-confidece">
        <div className="container">
        <div className="Confidence-about">
            <div className="About-left">
            <h2>RAISE YOUR CONFIDENCE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dapibus fringilla. Nullam libero metus, mattis nec elementum in, porta a lacus. Nunc sed sagittis massa. In hac habitasse platea dictumst. Phasellus elementum justo ipsum, a facilisis urna elementum ut. Quisque quis ex ex. Proin scelerisque hendrerit malesuada. 
              Morbi egestas pretium dui, vitae elementum odio porttitor ac.</p>
            </div>  

            <div className="About-right">
            <img src={Aboutright} alt="Aboutright" /> 
            </div>
          </div>
        </div>
      </div>

      <div className="About-confidece second-about">
        <div className="container">
          <div className="Confidence-about">
            <div className="About-right">
            <img src={Aboutleft} alt="Aboutleft" /> 
            </div>

            <div className="About-left">
            <h2>RAISE YOUR CONFIDENCE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dapibus fringilla. Nullam libero metus, mattis nec elementum in, porta a lacus. Nunc sed sagittis massa. In hac habitasse platea dictumst. Phasellus elementum justo ipsum, a facilisis urna elementum ut. Quisque quis ex ex. Proin scelerisque hendrerit malesuada. 
              Morbi egestas pretium dui, vitae elementum odio porttitor ac.</p>
            </div>  


          </div>
        </div>
      </div>

    </>
  )
}

export default About
