import React from 'react'
import Graphic from './images/Analytics.svg'
import './analytics.css'
import ic_Layer from './images/ic_Layer.svg'

function Analytics() {
    return (
        <div id="analytics">
            <div id="analytics-graph">
                <img src={Graphic} />
            </div>
            <div id="analytics-text">
                <div id="analytics-title">Analyze your data with our analyze tools</div>
                <div id="analytics-explanation">Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</div>
                <div id="analytics-features">
                    <div className="feature feature1">
                       
                        <div className="feature-title"><span>Powerful dashboard</span></div>
                        <span className="analytics-feature-text">Combine multiple reports into a single beautiful dashboard.</span>
                    </div>
                    <div className="feature feature2">
                       
                        <div className="feature-title"><span>Always in Sync</span></div>
                        <span className="analytics-feature-text">Don’t worry about the data, always be synchronized</span>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Analytics
