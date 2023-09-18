import React from 'react'
import progression from '../../images/progression.svg'
import workout from '../../images/workout.svg'
import nutrition from '../../images/nutrition.svg'
import confidence from '../../images/confidence.svg'
const Blog = () => {
  return (
    <>
    <div className="All-banner">
        <div className="container">
          <h1> service </h1>
        </div>
      </div>

      <div className="service">
        <div className="container">
          <div className="Service-main">
            <div className="service-blocks">
            <div className="img-block">
            <img src={progression} alt="progression" /> 
            </div>
                    <h2> PROGRESSION </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
            <div className="service-blocks">
            <div className="img-block">
            <img src={workout} alt="workout" /> 
            </div>
                    <h2> workout</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
            <div className="service-blocks">
            <div className="img-block">
            <img src={nutrition} alt="nutrition" /> 
            </div>
                    <h2> nutrition </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
            <div className="service-blocks">
            <div className="img-block">
            <img src={confidence} alt="confidence" /> 
            </div>
                    <h2>confidence </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
