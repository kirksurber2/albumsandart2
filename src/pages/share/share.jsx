
import { useState, useEffect } from 'react'
import './share.css'
import logo from '../../assets/images/logo-black-500.png'


//ICONS *****************************
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function SharePage() {
const {photogs, setPhotogs} = useState(5000)

    return(
        <div className='main'>
                <img  src={logo}/>

            <div className='display box'>
                <h1>Thank you!</h1>
                <div className='photogs'>
                    <p>There are</p>
                    <h1>5000{photogs}</h1>
                    <h2 style={{margin: '10px'}}>Photographers</h2>
                    <p>in line...</p>
                </div>
                <div>
                    <h2>Share and Get</h2>
                    <h2>BUMPED UP!</h2>
                </div>
                <div className='description'>
                    <h3> Like, Follow and Share Photo Studio App on IG & Tik Tok(@photo_studio_app). </h3>
                    <p> Each Like, Follow and Share will move you up on the launch date! We'll be testing and releasing our app out to our customers to make sure we have a solid start!</p>

                </div>
                    <Link to='/Pre-Launch-Special/refer-a-friend'>Want a Free Month?</Link>
                <div className='shareButtons'></div>
            </div>
        </div>
    )
}