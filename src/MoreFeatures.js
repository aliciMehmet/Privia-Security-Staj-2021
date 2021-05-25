import React from 'react'
import './morefeatures.css'
import CircleBlue from './images/CircleBlue.svg'
import EasyCustom from './images/EasyCustom.svg'
import Secure from './images/Secure.svg'
import Powerful from './images/Powerful.svg'
import Cloud from './images/Cloud.svg'
import Proven from './images/Proven.svg'
import Satisfaction from './images/Satisfaction.svg'
function MoreFeatures() {
    return (
        <div id="more-features">
            <section id="title">
            We're more than an analytic tool. Explore our features, and satisfy your customers
            </section>
            <div id="features-list">
                <div className="feature">
                    <div className="image" ><img src={EasyCustom} /></div>
                    <span className="title">Easy customization</span>
                    <span className="text">No matter what kind of home you have to share, you can increase your earnings.</span>
                </div>
                <div className="feature">
                    <div className="image"><img src={Secure}/></div>
                    <span className="title">Secure and fast</span>
                    <span className="text">No matter what kind of home you have to share, you can increase your earnings.</span>
                </div>
                <div className="feature">
                    <div className="image"><img src={Powerful}/></div>
                    <span className="title">Powerful dashboard</span>
                    <span className="text">No matter what kind of home you have to share, you can increase your earnings.</span>
                </div>
                <div className="feature">
                    <div className="image"><img src={Cloud}/></div>
                    <span className="title">Cloud upload</span>
                    <span className="text">No matter what kind of home you have to share, you can increase your earnings.</span>
                </div>
                <div className="feature">
                    <div className="image"><img src={Proven}/></div>
                    <span className="title">Proven Technology</span>
                    <span className="text">No matter what kind of home you have to share, you can increase your earnings.</span>
                </div>
                <div className="feature">
                    <div className="image"><img src={Satisfaction}/></div>
                    <span className="title">98.99% satisfaction</span>
                    <span className="text">No matter what kind of home you have to share, you can increase your earnings.</span>
                </div>
            </div>
            
        </div>
    )
}

export default MoreFeatures
