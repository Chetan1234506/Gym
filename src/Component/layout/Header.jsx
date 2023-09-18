import React from 'react'
import Logo from '../../images/logo.cfcea54356ca8cd23e78a5cfe2bf7adb.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
     <div className="Header">
     <div className="container">
            <div className="header-row">
                <div className="logo">
                      <img src={Logo} alt="Logo" />
                </div>
              
                <div className=" navbar navbar-expand-lg nav-bar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"> <i class="fa-solid fa-bars"></i> </span>
                </button>
                <div className="mobile-nav-bar">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul> 
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/portfolio'> portfolio</Link></li>
                    <li><Link to='/service'>service</Link></li>
                    <li><Link to='/contact-us'>contact us</Link></li>
                    <li className='button-headerex'><Link to='/'>Get started</Link></li>
                      
                    </ul>
                    </div>
                    </div>
                    </div>
                
                <div className="button-header">
                  <h6>   GET STARTED   </h6>  
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Header
