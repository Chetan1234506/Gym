import React from 'react'
import Logo from '../../images/logo.cfcea54356ca8cd23e78a5cfe2bf7adb.svg'
const Footer = () => {
  return (
    <>
      <div className="footer">
    <div className="container">
        <div className="footer-main">
            <div className="footer-logo">
            <img src={Logo} alt="logo" /> 
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla eu posuere scelerisque. </p>
            </div>
            <div className="footer-location">
                <h6> Locations </h6>
                <p>251 Lorem ipsum dolor <br/> Brooklyn, BXY 92101</p>
            </div>
            <div className="footer-location">
                <h6> Locations </h6>
                <p> Monday - Friday : 07:00 - 21:00 <br/> Saturday : 07:00 - 16:00 <br/> Sunday Closed </p>

            </div>
        </div>
        <div className="copy-right">
          <p> © 2023 All Rights Reserved </p>
        </div>
    </div>
   </div>
    </>
  )
}

export default Footer
