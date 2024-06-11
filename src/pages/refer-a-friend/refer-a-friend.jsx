import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './refer.css'
import axios from 'axios'
import logo from '../../assets/images/logo-black-500.png'

export default function ReferAFriendPage() {
    const navigate = useNavigate()
    const [referral, setReferral] = useState({
        email: "", referralEmail: "", referralPhone: ""
    })
    const [address, setAddress] = useState('')
    const [errors, setErrors] = useState('')
    function handleChange(e) {
        setReferral(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    function handleReferralSubmit(e) {
        e.preventDefault()
        if(address !== "") {
            navigate('/')
        }
        const res =  axios.post('http://localhost:9000/marketing/referral',referral)
        .then(res => console.log(res))
        setReferral({email:'', referralEmail: '', referralPhone: ''})
        .catch(error => console.log(error))
        
        navigate('/')
        
       
    }

    return(
        <div className='main'>
            <img src={logo}/>
            <h1>Get a FREE Month!</h1>
            <div >
                <div className='steps box'>
                    
                        <h2>Refer a Friend Program</h2>
                        <p>If they sign up with referral code and monthly or annual subscription at anytime during our pre-launch</p>
                        <h3>You <u>BOTH</u> Get a <u>FREE MONTH!</u></h3>
                    
                </div>
            <form onSubmit={handleReferralSubmit}>
                <input 
                    type='email'
                    placeholder='Friends Email'
                    name='referralEmail'
                    value={referral.referralEmail}
                    required={true}
                    onChange={handleChange}
                
                ></input>
                <input 
                    type='tel'
                    placeholder='Friends Phone (verification only)'
                    name='referralPhone'
                    value={referral.referralPhone}
                    required={true}
                    onChange={handleChange}
                
                ></input>
                <input 
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    value={referral.email}
                    required={true}
                    onChange={handleChange}
                
                ></input>
                <input 
                    type='text'
                    placeholder='Address'
                    name='Address'
                    value={address}
                    hidden={true}
                    onChange={(e) => setAddress(e.target.value)}
                
                ></input>
                <button>Submit</button>
            </form>
              {errors !== "" &&
                <p>{errors}</p>
              }
                
            </div>
        </div>
    )
}