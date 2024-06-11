'use client'

import { useState, useEffect } from 'react'
import PreLaunchForm from "../../components/Forms/PreLaunchForm.js"
import '../../assets/styles/comingSoon.module.css'

import computer from '../../assets/images/images/computer.png'

import phoneApp from '../../assets/images/images/PhoneApp.png'
import CountdownTimer from "../../components/CountDown/CountdownTimer.js";
import Navbar from '@/components/Navbars/Navbar'


export default function ComingSoon () {
    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [lead, setLead] = useState({
        email: ''
    })
    
    function handleLead () {
       
    }

    

    function handleSubmit (e) {
        e.preventDefault()
        axios.post('/stay-up-to-date/waitlist')
        .then (res => {
            const newUser = res.data
            setUser(newUser)
        })
        .catch(err => console.log(err))
        
    }

    useEffect(() => {
        
    }, [])

    return (
        
        
        <div className='body'>
            
        { !isSubmitted?
            <div className='hero' >
            <div className='leftImageContainer' style={{width: '35%'}}>
                <Image  className='comingSoonImage' alt="Cell Phone with App" src={phoneApp} />
            </div>
            <div className='heroText'>
                    
                <h1>Tracking Clients and Sessions Has Never Been Easier</h1>
                <h4>A CRM without the complication</h4>
                <p>Join our waitlist for the upcoming launch!</p>
                <form onSubmit={handleSubmit} >
                    <input 
                            type="email"
                            placeholder='Email'
                            onChange={e => setEmail(e.target.value)}
                            name='email'
                            value={email}
                            
                            
                            />
                </form>
                
                <button>Join our Waitlist</button>
                <div>
                    <p>Clients info at your finger tips.  Map and drive to your next session, add notes, store family info, sign model releases on the spot, call, email and text.</p>
                        <p>Use pre-set SMS reminders to your clients for your next session or remind them of the upcoming IPS and wall art. or create your own</p>
                </div>
                <CountdownTimer/>
            </div>
                
            </div>
         :
            <div className='thankYou'>
                
                <h1>You're Registered, Interested in a Deal?</h1>
                <p>Pre-Launch Special</p>
                <div className='dealBox'>
                    <div>
                        <button>Buy</button>
                    </div> 
                    <div>   
                    <h5>$19/month</h5>
                    <p>Regularly $24/month</p>
                    </div>
                </div>
                <div className='dealBox'>
                    <div>
                        <button>Buy</button>
                    </div>
                    <div>
                        <h5>$99 for the Year</h5>
                        <p>Regularly $24/month</p>
                        <p>A <strong>$189 VALUE!</strong></p>
                    </div>
                </div>
                <CountdownTimer/>
                <div>

                </div>
            </div>
        }
        <div className='timelineArea'>
            <h2>Timeline</h2>
            <div className='timelineContainer'>
                <div className='timelineBox'>
                    <h4>Pre-Launch</h4>
                    <h6>ShutterFest 2024 (Apr. 2nd)</h6>
                    <p>Session and Workflow Tracking</p>
                    <p>Customizable Workflows</p>
                    <p>Model Release Forms for Signature</p>
                    <p>SMS Reminders</p>
                    <p>Google Calendar Integration</p>
                    <p>Notes</p>
                    <p>Little Johnny's B-day and other family info</p>
                    <p>Status Alerts & Icons</p>
                    <p>Session Mapping for Drive</p>
                </div>
                <div className='timelineBox'>
                    <h4>2024 Features</h4>
                    <h6>Building Now</h6>
                    <p>Client Galleries</p>   
                    <p>Online Sales Tools</p>   
                    <p>Send Invoices</p>   
                    <p>Expense Tracking</p>   
                    <p>Website Form Integration</p>   
                    <p>Client Scoring</p>   
                    <p>Milestone Alerts</p>
                    <p>Cloud Backup for Images</p>
                    <p>Pro Version</p>
                    <p>Contracts</p>
                       
                </div>
                <div className='timelineBox'>
                    <h4>Features to vote on</h4>
                    <p>Offline Sales Tools</p>    
                    <p>AI Integration for ad copy</p>    
                    <p>FB Marketing Integration</p>    
                    <p>Business Analytics</p>    
                    <p>Vendor Integration</p>    
                    <p>Business Card Scanner</p>    
                    <p></p>    
                    <p></p>    
                    <p></p>
                    
                    <div className='featureLink'>
                        <Link href='https://features.photostudioapp.com'>Add Your Suggestion Here</Link>    
                    </div>
                </div>
                
            </div>
        </div>
      </div>

    )
  }
                    
                    