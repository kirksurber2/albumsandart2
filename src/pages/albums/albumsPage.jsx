import { Link } from "react-router-dom"
import ProductCard from '../../components/cards/productCard'
import FullPageCard from '../../components/cards/fullPageCard'
import Navbar from "../../components/navbars/Navbar"

// IMPORT IMAGES ************************
import Album1 from '../../assets/images/LeatherAlbums.jpg'
import Express from '../../assets/images/Press/PhotoCoverBook_004.jpg'
import Economy from '../../assets/images/Economy/EconomyAlbum_005.jpg'
import Gallery from '../../assets/images/Gallery/GalleryAlbums_Fabric_005.jpg'
import GalleryFaux from '../../assets/images/Gallery/GalleryAlbums_Faux_004.jpg'

// MAIN *************************************************
export default function AlbumsPage() {

    return(
        <div>
            <Navbar/>
            <h6 style={{backgroundColor: '#3c3c3c', color: 'white', padding: '7px'}}>All of our albums start with 30 pages and basic album design is included</h6>
            <FullPageCard 
                image={Express}
                title='Express'
                price='$499'  
                          
            />
            <FullPageCard 
                image={Economy}
                title='Economy Albums'
                price='$699'  
                          
            />
            <FullPageCard 
                image={GalleryFaux}
                title='Express Albums'
                price='$999'  
                          
            />
            <FullPageCard 
                image={Album1}
                title='The Lux (Our Full Custom Lineup)'
                price='$1999'  
                          
            />
           
        </div>
    )
}