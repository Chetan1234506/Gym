import React from 'react'
import Portimg1 from '../../images/Portimg1.jpg'
import Portimg2 from '../../images/Portimg2.jpg'
import Portimg3 from '../../images/Portimg3.jpg'
import Portimg4 from '../../images/Portimg4.jpg'
import Portimg5 from '../../images/Portimg5.jpg'
import Portimg6 from '../../images/Portimg6.jpg'
import Portimg7 from '../../images/Portimg7.jpg'
import Portimg8 from '../../images/Portimg8.jpg'
const Portfolio = () => {
  return (
    <>
     <div className="All-banner">
        <div className="container">
          <h1> Portfolio </h1>
        </div>
      </div>

      <div className="portfolio">
        <div className="container">
          <div className="portfolio-main">
            <div className="port-img">
            <img src={Portimg1} alt="Portimg1" /> 
            <div className="port-overlay">
              <a href="#"> Work Harder </a>
            </div>
            </div>
            <div className="port-img">
            <img src={Portimg2} alt="Portimg2" /> 
            <div className="port-overlay">
              <a href="#"> Motivation </a>
            </div>
            </div>
            <div className="port-img">
            <img src={Portimg3} alt="Portimg3" /> 
            <div className="port-overlay">
              <a href="#"> Training Tips  </a>
            </div>
            </div>
            <div className="port-img">
            <img src={Portimg4} alt="Portimg4" /> 
            <div className="port-overlay">
              <a href="#"> Workout  </a>
            </div>
            </div>
            <div className="port-img">
            <img src={Portimg5} alt="Portimg5" /> 
            <div className="port-overlay">
              <a href="#"> Now  </a>
            </div>
            </div>
            <div className="port-img">
            <img src={Portimg6} alt="Portimg6" /> 
            <div className="port-overlay">
              <a href="#"> Start  </a>
            </div>
            </div>
            <div className="port-img">
            <img src={Portimg7} alt="Portimg7" /> 
            <div className="port-overlay">
              <a href="#"> Running  </a>
            </div>
            </div>
            <div className="port-img">
            <img src={Portimg8} alt="Portimg8" /> 
            <div className="port-overlay">
              <a href="#"> Low Treats   </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
