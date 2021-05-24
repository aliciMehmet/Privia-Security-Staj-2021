import React from 'react'
import './footer.css'
import Logo from './images/Logo.svg'
import Face_Logo from './images/Face.svg'
import Linkedin from './images/Linkedin.svg'
import Twitter from './images/Twitter.svg'
import Reserved from './images/2021.svg'

function Footer() {
    return (
        <div id="footer"> 
            <div id="social-links">
              <div id="social-link-logo"><img src={Logo}/></div>
              <div id="media-links">
                  <div id="twitter-link"><img src={Twitter}/></div>
                  <div id="facebook-link"><img src={Face_Logo}/></div>
                  <div id="linkedin-link"><img src={Linkedin}/></div>
              </div>
              <div><img src={Reserved}/></div>
            </div>

            <div id="other-links">
                <div className="column">
                    <span><a href="#">Product</a></span>
                    <div><a href="#">Landingpage</a></div>
                    <div><a href="#">Features</a></div>
                    <div><a href="#">Documentation</a></div>
                    <div><a href="#">Referral Program</a></div>
                    <div><a href="#">Pricing</a></div>
                    
                </div>
                <div className="column">
                    <span><a href="#">Services</a></span>
                    <div><a href="#">Documentation</a></div>
                    <div><a href="#">Design</a></div>
                    <div><a href="#">Themes</a></div>
                    <div><a href="#">Illustrations</a></div>
                    <div><a href="#">UI Kit</a></div>
                    
                </div>
                <div className="column">
                    <span><a href="#">Company</a></span>
                    <div><a href="#">About</a></div>
                    <div><a href="#">Terms</a></div>
                    <div><a href="#">Privacy Policy</a></div>
                    <div><a href="#">Careers</a></div>
                    
                </div>
                <div className="column">
                    <span><a href="#">More</a></span>
                    <div><a href="#">Documentation</a></div>
                    <div><a href="#">License</a></div>
                    <div><a href="#">Changelog</a></div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Footer
