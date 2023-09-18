import React from 'react'
import Progression from '../src/images/progression.svg'
import Workout from '../src/images/workout.svg'
import Nutrition from '../src/images/nutrition.svg'
import Confidence from '../src/images/confidence.svg'
import Vdo from '../src/images/Vdo.jpg'
import Img from '../src/images/img.jpg'
import Imgtwo from '../src/images/img-two.jpg'
import Imgthree from '../src/images/Imgthree.jpg'
const Home = () => {
  return (
    <>
<div className="banner">
        <div className="container">
            <div className="banner-main">
                <h1> DISCIPLINE AND  </h1>
                <h2>  SELF-DEFENSE </h2>
                <div class="button-header"><h6>   GET STARTED   </h6></div>
            </div>
        </div>
      </div>
    
       <div className="banefit">
        <div className="container">
            <div className="banefit-main">
                <div className="banefit-same">
                <img src={Progression} alt="progression" /> 
                    <h2> PROGRESSION </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
                <div className="banefit-same">
                <img src={Workout} alt="Workout" />
                    <h2> PROGRESSION </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
                <div className="banefit-same">
                <img src={Nutrition} alt="Nutrition" />
                    <h2> PROGRESSION </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
                <div className="banefit-same">
                <img src={Confidence} alt="Confidence" /> 
                    <h2> PROGRESSION </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                </div>
            </div>
        </div>
      </div>

      <div className="raise-blog">
        <div className="container">
        <div className="Raise-confidence">
            <div className="raise-text">
            <h2> RAISE YOUR CONFIDENCE </h2>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Suspendisse interdum nulla eu posuere scelerisque. Donec sagittis tempor ante in aliquet.</p>
                 <button class="button">Send Message</button>
            </div>
            <div className="raise-img">
                <img src={Vdo} alt="Vdo" /> 
            </div>
        </div>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-main">
            <div className="gallery-blocks">
            <img src={Img}  /> 
            <a href="#" class="gl-title"><span>ALL AGE GROUPS</span><figure>JUDO class</figure></a>
            </div>
            <div className="gallery-blocks">
            <img src={Imgtwo}  /> 
            <a href="#" class="gl-title"><span>ALL AGE GROUPS</span><figure>JUDO class</figure></a>
            </div>
            <div className="gallery-blocks">
            <img src={Imgthree}  /> 
            <a href="#" class="gl-title"><span>ALL AGE GROUPS</span><figure>JUDO class</figure></a>
            </div>
        </div>
      </div>

      <div className="price">
        <div className="container">
            <div className="price-main">
                <div className="price-blocks">
                    <div className="price-inner">
                        <div className="price-blck">
                        <h2>BEGINNERS</h2>
                        <span>BILLED MONTHLY</span>
                         <hr class="divider" />
                             <figure>$ 90</figure>
                        </div>
                        <div className="price-list">
                        <ul>
                            <li>Mobile-Optimized</li>
                            <li>Best Hosting </li>
                            <li>Free Custom</li>
                            <li>Outstanding</li>
                            <li>Happy Customers</li>
                            </ul>
                            <button class="button">Purchase plan</button>
                        </div>
                    </div>
                </div>
                <div className="price-blocks">
                    <div className="price-inner">
                        <div className="price-blck">
                        <h2>BEGINNERS</h2>
                        <span>BILLED MONTHLY</span>
                         <hr class="divider" />
                             <figure>$ 90</figure>
                        </div>
                        <div className="price-list">
                        <ul>
                            <li>Mobile-Optimized</li>
                            <li>Best Hosting </li>
                            <li>Free Custom</li>
                            <li>Outstanding</li>
                            <li>Happy Customers</li>
                            </ul>
                            <button class="button">Purchase plan</button>
                        </div>
                    </div>
                </div>
                <div className="price-blocks">
                    <div className="price-inner">
                        <div className="price-blck">
                        <h2>BEGINNERS</h2>
                        <span>BILLED MONTHLY</span>
                         <hr class="divider" />
                             <figure>$ 90</figure>
                        </div>
                        <div className="price-list">
                        <ul>
                            <li>Mobile-Optimized</li>
                            <li>Best Hosting </li>
                            <li>Free Custom</li>
                            <li>Outstanding</li>
                            <li>Happy Customers</li>
                            </ul>
                            <button class="button">Purchase plan</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
      </div>



    </>
  )
}

export default Home
