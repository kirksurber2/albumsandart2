import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../components/Header'
import FullPageCard from '../../components/cards/fullPageCard'
import PreLaunchForm from '../../components/forms/PreLaunchForm'
import './home.css'
import ReactPlayer from 'react-player/lazy'
import Album1 from '../../assets/images/LeatherAlbums.jpg'
import Wedding from '../../assets/images/Estates.jpg'
import Wedding2 from '../../assets/images/Meridian.jpg'
import Wedding3 from '../../assets/images/Wedding-Photography.jpg'

import { FaLongArrowAltRight } from "react-icons/fa";


export default function HomePage() {

    return (
        <>
        <Header/>
        <main>
            <div className='processSection'>
                <p className='process'>Select Album</p>
                <FaLongArrowAltRight className='arrowIcon'/>
                <p className='process'>Select Upgrades</p>
                <FaLongArrowAltRight  className='arrowIcon'/>
                <p className='process'>Order</p>
                <FaLongArrowAltRight  className='arrowIcon'/>
                <p className='process'>Upload Images</p>
                <FaLongArrowAltRight  className='arrowIcon'/>
                <p className='process'>We Edit, Design, Ship</p>
            </div>
            <div className='questionTitle'>
                <h2>Don't know what to do with your photos?  We have you covered!</h2>
            </div>
            <FullPageCard 
                image={Album1}
                title='Albums'
                line2='Album Design Included'
                price='From:  $499'
                learnMore='/albums/learn-more'  
                          
            />
            <FullPageCard 
                image={Wedding2}
                title='Editing'
                line2='Add Some Beauty Edits, Spot Removal or Our Unique Lux Edit'
                price='From:  $9' 
                _id=''           
            />
            <FullPageCard 
                image={Wedding}
                title='Wall Art, Prints and More!'
                line2='Metals, Acrylics, Pre-Framed Options'
                price='From:  $299' 
                _id=''           
            />
            <FullPageCard 
                image={Wedding2}
                title='Image Boxes'
                line2='(Coming Soon!)'
                price='From:  $299'
                _id=''            
            />
            
      
            </main>
                
    </>
                
          
        

    


        
    )
}