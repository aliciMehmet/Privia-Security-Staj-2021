import React from 'react'
import './pricing.css'
import Bill from './images/Bill.svg'
import Line from './images/Line.svg'
function Pricing() {
   var options = document.getElementsByClassName('option');
   const clickHandler = (e) =>{
       console.log(e)
    document.getElementById('option1').className ="option"
    console.log(document.getElementById('option1').className)
    document.getElementById('option2').className ="option"
    console.log(document.getElementById('option2').className)
    document.getElementById('option3').className ="option"
    console.log(document.getElementById('option3').className)
    document.getElementById(e).className += ' active'
     
     
   } 
   console.log(options)
    return (
        <div id="pricing">
            <div id="pricing-up">
                <div id="title">Choose the plan that’s right for your business</div>
                <div id="text">30-day free trial, cancel any time. No credit card required.</div>
                <img id="bill-image" src={Bill}/>
            </div>
            <div id="pricing-down">
                <div id="pricing-names">
                    <div id="btn1" onClick={() =>clickHandler('option1')}>Standard</div>
                    <div id="btn2" onClick={() =>clickHandler('option2')}>Essential</div>
                    <div id="btn3" onClick={() =>clickHandler('option3')}>Premium</div>
                </div>
                <div id="option1" className="option active">
                    <div className="amount">$23</div>
                    <div className="option-name">Standard</div>
                    <div className="option-explanation">All the basics for businesses that are just getting started.</div>
                    <div className="line"><img src={Line}/></div>
                    <div className="option-features">
                        <div className="feature">Single project use</div>
                        <div className="feature">Basic dashboard</div>
                        <div className="feature">All components included</div>
                    </div>
                   <div id="trial"><button>Start free trial</button></div>
                </div>

                <div id="option2" className="option" style={{background:'#D1E8FF'}}>
                    <div className="amount">$99</div>
                    <div className="option-name">Essentials</div>
                    <div className="option-explanation">Better for growing businesses that want more customers.</div>
                    <div className="line"><img src={Line}/></div>
                    <div className="option-features">
                        <div className="feature">Unlimited project use</div>
                        <div className="feature">Advanced dashboard</div>
                        <div className="feature">All components included</div>
                        <div className="feature">Advanced insight</div>
                    </div>
                   <div id="trial"><button>Start free trial</button></div>
                </div>

                <div id="option3" className="option" style={{background:'#1E5579'}}>
                    <div className="amount" style={{color:'#FFFFFF'}}>$139</div>
                    <div className="option-name" style={{color:'#FFFFFF'}}>Premium</div>
                    <div className="option-explanation" style={{opacity: 0.72 ,color: '#FFFFFF'}}>All the basics for businesses that are just getting started.</div>
                    <div className="line"><img src={Line}/></div>
                    <div className="option-features">
                        <div className="feature" style={{color:'#FFFFFF'}}>Single project use</div>
                        <div className="feature" style={{color:'#FFFFFF'}}>Basic dashboard</div>
                        <div className="feature" style={{color:'#FFFFFF'}}>All components included</div>
                        <div className="feature" style={{color:'#FFFFFF'}} >Advanced insight</div>
                    </div>
                   <div id="trial"><button>Start free trial</button></div>
                </div>
                

            </div>
        </div>
    )
}

export default Pricing
