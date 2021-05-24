import React from 'react'
import './features.css'
import Right from './images/Right.svg'

function Features() {
    return (
        <div id="features">
            <div id="features-upper">
                <div id="upper-title">Our solution for your business</div>
                <div id="upper-text">We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</div>
            </div>
            <div id="features-down">
                <div id="features-down-elements">
                    <div className="features-element">
                        <div className="features-element-title">Analyze your data</div>
                        <div className="features-element-text">Create reports with an easy to use drag-and-drop designer.</div>
                        <div className="learn-more"><a href="#">Learn More <img src={Right} /></a></div>
                    </div>
                    <div className="features-element">
                        <div className="features-element-title">Collaborate securely</div>
                        <div className="features-element-text">Share/publish your reports with your colleagues.</div>
                        <div className="learn-more"><a href="#">Learn More <img src={Right} /></a></div>
                    </div>
                    <div className="features-element">
                        <div className="features-element-title">Embedded analytics</div>
                        <div className="features-element-text">Get a powerful analytics tool in your own brand name.</div>
                        <div className="learn-more"><a href="#">Learn More <img src={Right} /></a></div>
                    </div>
                    <div className="features-element">
                        <div className="features-element-title">Easy and Intuitive</div>
                        <div className="features-element-text">Easily converse with your data using everyday language.</div>
                        <div className="learn-more"><a href="#">Learn More <img src={Right} /></a></div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Features
