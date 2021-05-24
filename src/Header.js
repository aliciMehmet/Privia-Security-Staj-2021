import React from 'react'
import TopMenu from './TopMenu'
import './header.css'
import Dashboard from './images/Dashboard.svg'


function Header() {
    return (
        <div id="header">
             <TopMenu />
             <div id="center-area">
             <div id="header-text">
                 <div id="uppertext">Powerfull analytics tools for your business</div>
                 <div id="lowertext">An awesome tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers</div>
             </div>
             
             <div id="trial-buttons">
                <div className="button-container"> <button id="trial_button" href="#">Start free trial</button> </div>
                <div className="button-container"> <button id="demo_button" href="#">View live demo</button> </div>
             </div>

             <div id="graph">
                 <img src={Dashboard} />
             </div>
             </div>
        </div>
    )
}

export default Header
