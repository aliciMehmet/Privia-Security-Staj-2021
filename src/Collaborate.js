import React from 'react'
import './collaborate.css'
import Collaborate_Image from './images/collaborate.svg'

function Collaborate() {
    return (
        <div id="collaborate">
            <div id="collaborate-img">
                <img src={Collaborate_Image} />
            </div>
            
            <div id="collaborate-right">
                <div id="collaborate-title">Collaborate with your team anytime, anywhere</div>
                <div id="collaborate-text">Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</div>
                <div id="collaborate-elements">
                    <div><span>Organize your data</span></div>
                    <div><span>Always in sync</span></div>
                    <div><span>Work with any team</span></div>
                    <div><span>Embedded analytics</span></div>
                    <div><span>Business analytics</span></div>
                </div>
            </div>
        </div>
    )
}

export default Collaborate
