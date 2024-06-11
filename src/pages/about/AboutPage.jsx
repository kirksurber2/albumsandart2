import Navbar from '../../components/navbars/Navbar'

import './about.css'
import kirkSurberHeadshot from '../../assets/images/KSheadshot.jpg'
import { MdTimelapse } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";


export const metadata = {
    title: 'Photo Studio App',
    keywords: 'Photo Studio App, About Page',
    description: 'Photo Studio App is a Client Management tool or CRM for photographers to navigate the business of photography without the need for multiple costs just for tools you should have in 1 application'
}

export default function About () {

   
    return (
        <div className='body'>
            <Navbar/>
            <div className='hero'>
                <h1>Why Choose Photo Studio App?</h1>
                <p>Your time needs to be spent marketing or shooting, not playing with apps.</p> 
                <br/>
                <a href="/Pricing">
                    <button>Let's get started</button>
                </a>
                <div className='box'>
                    <div className='featureSection'>
                        
                        <MdTimelapse size={30} className='iconImage'/>
                        
                        <h5>Save Time</h5>
                        <p>As photographers, time is money, info you need now.</p>
                    </div>
                    <div className='featureSection'>
                        <FaLayerGroup className='iconImage' size={30}/>
                        <h5>Keep it together</h5>
                        <p>Building out so you don't need 17 apps in your suite</p>
                    </div>
                    <div className='featureSection'>
                        <BsLightningChargeFill className='iconImage'  size={30}/>
                        <h5>Find it fast</h5>
                        <p>Sessions, IPS or edits should be on top, why dig through a mix?</p>
                    </div>
                </div>
                <div className='whoWeAre'>
                    <p className='whoWeAreTitle'>We're Photographers Too!</p>
                    <div className='team'>
                        <div className='teamPhoto'>
                            <img></img>
                            <h4>We're currently building our Team!</h4>
                        </div>
                        <div className='teamDescription'>
                            <p>As a photographer myself, some of the biggest issues I had was having to dig into my client management (CRM) to find my next session coming up.  </p>
                            <br/>
                            <p>Having shot weddings, headshots, seniors and families, keeping track of everything was vital and couldn't find it easily.  We all have a million items to accomplish.  Dealing with an app shouldn't be difficult. </p>
                        </div>
                    </div>
                </div>
                <div className='missionArea'>
                    <div className='mission'>
                        <p className='whoWeAreTitle'>Mission</p>
                        
                        <div className='missionDescription'>
                            <p>Make an app for photographers who run sessions, sales, and need time to market their business, not worry about what widget to use.</p>
                            <br/>
                            <p><strong>Simple, easy to use, intuitive</strong></p>
                        </div>
                    </div>
                    <div className='mission'>
                        <p className='whoWeAreTitle'>Goals</p>
                        
                        <div className='missionDescription'>
                            <p>Our mission is to make an app for photographers who run sessions, sales, and need time to market their business, not worry about what widget to use.</p>
                            <br/>
                            <p><strong>Simple, easy to use, intuitive</strong></p>
                        </div>
                    </div>
                    <div className='mission'>
                        <p className='whoWeAreTitle'>Education</p>
                        
                        <div className='missionDescription'>
                            <p>The Veteran in me is a trainer at heart so expect to have educational videos, conferences and meetups along the way.  From shooting to running ad campaigns, it's coming. </p>
                            <br/>
                            <p><strong>Never stop learning</strong></p>
                        </div>
                    </div>
                </div>
                <div className='ownerArea'>
                    <p className='whoWeAreTitle'>Veteran Owned, Dog Lover, Dad</p>
                    <div className='owner'>
                        <div className='ownerPhoto'>
                            <img alt='Owner Photo' src={kirkSurberHeadshot}></img>
                        </div>
                        <div className='ownerDescription'>
                            <p>I have built this app to help me with my own photography business.  I got tired of using applications to run my business.  CRM's or Client Management tools were a pain and often so generalized I needed something for photographers.  So Photo Studio App was born. </p>
                            
                            
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

