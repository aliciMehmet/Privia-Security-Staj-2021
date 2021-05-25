import React from 'react'
import './testimonial.css'
import Slack from './images/Slack.svg'
import Hubspot from './images/Hubspot.svg'
import Square from './images/Square.svg'
import Servicetitan from './images/Servicetitan.svg'
import Cogniant from './images/Cogniant.svg'
import Grubhub from './images/Grubhub.svg'
import Shopify from './images/Shopify.svg'
import Airbnb from './images/Airbnb.svg'
import User1 from './images/User1.svg'
import User2 from './images/User2.svg'
import Right from './images/Right.svg'

function Testimonial() {
    return (
        <div id="testimonial">
            <div id="brands">
                <img src={Slack} />
                <img src={Hubspot} />
                <img src={Square} />
                <img src={Servicetitan} />
                <img src={Cogniant} />
                <img src={Grubhub} />
            </div>

            <div id="comments">
                <div className="comment">
                   <div  className="comment-brand">
                      <div  className="brand-logo"> <img   src={Shopify} /></div>
                     
                   </div>
                   <div className="comment-text" >
                   I received great customer service from the specialists who helped me. I would recommend to anyone who wants great dashboard that has great quality.
                   </div>
                   <div className="comment-author">
                       <img src={User1} />
                       <div className="author-info">
                           <span className="author-name">Harold Tyler</span>
                           <span className="author-position">Product Designer</span>
                       </div>
                   </div>
                </div>

                <div className="comment">
                   <div className="comment-brand">
                   <div className="brand-logo"> <img src={Airbnb} /></div>
                   </div>
                   <div className="comment-text" >
                   My experience with this platform so far has been great. Everything is easy, from creating visualization, scheduling, collaboration and many more.
                   </div>
                   <div className="comment-author">
                       <img src={User2} />
                       <div className="author-info">
                           <span className="author-name">Ryan Holmes</span>
                           <span className="author-position">Motion design / animator</span>
                       </div>
                   </div>
                </div>
            </div>
            <div className="more-testimonial">
               <a href="#">See All  Testimonial</a>
                <img src={Right} />
                </div>
            
        </div>
    )
}

export default Testimonial
