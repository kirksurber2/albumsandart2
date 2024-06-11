
import './albumsOrder.css'
import EconomyPhoto from '../../assets/images/Press/PhotoCoverBook_004.jpg'
import GalleryAlbum from '../../assets/images/Gallery/GalleryAlbums_Faux_004.jpg'
import GalleryAlbumFabric from '../../assets/images/Gallery/GalleryAlbums_Fabric_005.jpg'
import LuxAlbum from '../../assets/images/LeatherAlbums.jpg'
export default function AlbumsOrder() {

    return(
        <main>
            <h1>Select Your Album Type</h1>
            <h3>(Initial Album Design Included)</h3>
            <div className="albumSelection">
                <div className="albumType"
                    style={{backgroundImage: `url(${EconomyPhoto})`}}
                >
                    <div className='title'>
                        <h2>Economy</h2>
                        <h4>Starting at $299</h4>
                    </div>
                
                </div>
                <div className="albumType"
                    style={{backgroundImage: `url(${GalleryAlbumFabric})`}}
                >
                    <div className='title'>
                        <h2>Fabric</h2>
                        <h4>Starting at $499</h4>
                    </div>
                
                </div>
                <div className="albumType"
                    style={{backgroundImage: `url(${GalleryAlbum})`}}
                >
                    <div className='title'>
                        <h2>Gallery</h2>
                        <h4>Starting at $699</h4>
                    </div>
                </div>
                <div className="albumType"
                    style={{backgroundImage: `url(${LuxAlbum})`}}
                >
                    <div className='title'>
                        <h2>Lux</h2>
                        <h4>Starting at $1999</h4>
                    </div>
                </div>
            </div>
        </main>
    )
}