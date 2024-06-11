
import { useState } from 'react'
import './CoverMaterial.css'

//Image Import lush
import BlackTea from '../../assets/images/LeatherCoverMaterial/lush/BlackTea.jpg'
import EarlGrey from '../../assets/images/LeatherCoverMaterial/lush/EarlGrey.jpg'
import English from '../../assets/images/LeatherCoverMaterial/lush/English.jpg'
import Honey from '../../assets/images/LeatherCoverMaterial/lush/Honey.jpg'
import Serenity from '../../assets/images/LeatherCoverMaterial/lush/Serenity.jpg'

//Image Import Premium
import Black from '../../assets/images/LeatherCoverMaterial/Premium/Black.jpg'
import Cloudburst from '../../assets/images/LeatherCoverMaterial/Premium/Cloudburst.jpg'
import Crimson from '../../assets/images/LeatherCoverMaterial/Premium/Crimson.jpg'
import Dover from '../../assets/images/LeatherCoverMaterial/Premium/Dover.jpg'
import Drizzle from '../../assets/images/LeatherCoverMaterial/Premium/Drizzle.jpg'
import Otter from '../../assets/images/LeatherCoverMaterial/Premium/Otter.jpg'
import Redwood from '../../assets/images/LeatherCoverMaterial/Premium/Redwood.jpg'
import Royal from '../../assets/images/LeatherCoverMaterial/Premium/Royal.jpg'
import Spruce from '../../assets/images/LeatherCoverMaterial/Premium/Spruce.jpg'
import White from '../../assets/images/LeatherCoverMaterial/Premium/White.jpg'
//Image Rustic
import RusticChocolate from '../../assets/images/LeatherCoverMaterial/Rustic/RusticChocolate.jpg'
import RusticDenim from '../../assets/images/LeatherCoverMaterial/Rustic/RusticDenim.jpg'
import RusticFennel from '../../assets/images/LeatherCoverMaterial/Rustic/RusticFennel.jpg'
//Image Specialty
import AutumnSaddle from '../../assets/images/LeatherCoverMaterial/Specialty/AutumnSaddle.jpg'
import RusticBrassSaddle from '../../assets/images/LeatherCoverMaterial/Specialty/RusticBrassSaddle.jpg'

export default function CoverMaterial() {

const [isActive, setIsActive] = useState(false)
const [imageColor, setImageColor] = useState('blackTea')
const [imageType, setImageType] = useState("Lush")
const lush = [BlackTea, EarlGrey, English, Honey, Serenity]
const premium =[Black, Cloudburst, Crimson, Dover, Drizzle, Otter, Redwood, Royal, Spruce, White]
const rustic =[RusticChocolate, RusticDenim, RusticFennel]
const specialty = [RusticBrassSaddle, AutumnSaddle]

function handleActive(e) {
    setImageType(e.target.id)
}
function handleColor(e) {
    setImageColor(e.target.id)
}

    return(
        <div className='material'>
            <div className='materialType'>
                <h6 onClick={handleActive} className={imageType === "Lush" && 'active'} id='Lush' >Lush</h6>
                <h6 onClick={handleActive} id='Premium'>Premium</h6>
                <h6 onClick={handleActive} id='Rustic'>Rustic</h6>
                <h6 onClick={handleActive} id='Specialty'>Specialty</h6>
            </div>
            <div className='materialSection'>
                {
                imageType === "Lush"  &&
                <>
                    <div className={`materialSelection` } id='blackTea' onClick={handleColor}>
                        <img src={lush[0]}></img>
                    </div>
                    <div className={`materialSelection` } id='earlGrey' onClick={handleColor}>
                        <img src={lush[1]}></img>
                    </div>
                    <div className={`materialSelection` } id='english' onClick={handleColor}>
                        <img src={lush[2]} ></img>
                    </div>
                    <div className={`materialSelection` } id='honey' onClick={handleColor}>
                        <img src={lush[3]}></img>
                    </div>
                    <div className={`materialSelection` } id='serenity' onClick={handleColor}>
                        <img src={lush[4]}></img>
                    </div>
                </>
                }
                {imageType === "Premium" &&
                    <>
                    <div className={`materialSelection` } id='blackTea'>
                        <img src={premium[0]}></img>
                    </div>
                    <div className={`materialSelection` } id='earlGrey'>
                        <img src={premium[1]}></img>
                    </div>
                    <div className={`materialSelection` } id='english'>
                        <img src={premium[2]} ></img>
                    </div>
                    <div className={`materialSelection` } id='honey'>
                        <img src={premium[3]}></img>
                    </div>
                    <div className={`materialSelection` } id='serenity'>
                        <img src={premium[4]}></img>
                    </div>
                    <div className={`materialSelection` } id='serenity'>
                        <img src={premium[5]}></img>
                    </div>
                    <div className={`materialSelection` } id='serenity'>
                        <img src={premium[6]}></img>
                    </div>
                    <div className={`materialSelection` } id='serenity'>
                        <img src={premium[7]}></img>
                    </div>
                    <div className={`materialSelection` } id='serenity'>
                        <img src={premium[8]}></img>
                    </div>
                    <div className={`materialSelection` } id='serenity'>
                        <img src={premium[9]}></img>
                    </div>
                </>
                }
                {imageType === "Rustic" &&
                    <>
                    <div className={`materialSelection` } id='blackTea'>
                        <img src={rustic[0]}></img>
                    </div>
                    <div className={`materialSelection` } id='earlGrey'>
                        <img src={rustic[1]}></img>
                    </div>
                    <div className={`materialSelection` } id='english'>
                        <img src={rustic[2]} ></img>
                    </div>
                    
                </>
                }
                {imageType === "Specialty" &&
                    <>
                    <div className={`materialSelection` } id='blackTea'>
                        <img src={specialty[0]}></img>
                    </div>
                    <div className={`materialSelection` } id='earlGrey'>
                        <img src={specialty[1]}></img>
                    </div>
                    
                </>
                }
            </div>
        </div>
    )
}