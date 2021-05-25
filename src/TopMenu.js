import React from 'react'
import './top-menu.css'
import Logo from './images/Logo.svg'
import Shape from './images/Shape.svg'


function TopMenu() {
    return (
       <div id="top-menu">

        <div id="logo_container"> 
            <img className="shape"  src={Shape} />
            <img id="logo"  src={Logo} />
            
         </div>

         <ul id="top-center">
             <li><a href="#">About</a></li>
             <li><a href="#">Product</a></li>
             <li><a href="#">Pricing</a></li>
             <li><a href="#">Resources</a></li>
             <li><a href="#">Customers</a></li>
             
         </ul>

         <div id="top-right">
             <a href="#">Login</a>
             <div className="button-container"> <button href="#">Start free trial</button> </div>
             
         </div>
         <img className="right-shape"  src={Shape} />
       </div>
           
    )
}

export default TopMenu
