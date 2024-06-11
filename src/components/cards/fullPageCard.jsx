import './fullPageCard.css'
import { Link } from 'react-router-dom'

export default function FullPageCard(props) {

    return (
        <div 
            className="fullPageCard"
            style={{backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', 
                 }} 
        >
            
            <div className='titleArea'>

            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            <h6>{props.line2}</h6>
            </div>
            
            <div className="buttonArea">
                <button id='button1'>Order Now</button>
                <Link to={'/albums/learn-more'}>
                    <button id='button2'>Learn More</button>
                </Link>
                
            </div>
        </div>
    )
}