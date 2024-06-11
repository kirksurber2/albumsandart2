import { useParams } from 'react-router-dom'

import './productPage.css'
import CoverMaterial from '../../components/coverMaterial/CoverMaterial'

//Images
import Album from '../../assets/images/LeatherAlbums.jpg'
import EditingSection from '../../components/editingOptions/editing'
import AddPages from '../../components/addPageSection/addPages'


export default function ProductPage(props) {
const {id: productId} = useParams()
    return(
        <main>
            <div className='aboveFold'>
                <div className='itemImage'>
                    <img src={Album}></img>
                </div>
                <div className='itemDescription'>
                    <h1>Leather Albums{props.productTitle}</h1>
                    <p>Choose Your Cover</p>
                    <CoverMaterial/>
                    <AddPages/>
                    <EditingSection/>
                </div>
            </div>
        </main>
    )
}