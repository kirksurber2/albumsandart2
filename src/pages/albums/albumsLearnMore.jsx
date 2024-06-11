import FullPageCard from "../../components/cards/fullPageCard"


//Images Import ****************************
import Album1 from '../../assets/images/LeatherAlbums.jpg'
import Navbar from "../../components/navbars/Navbar"
import Pages from '../../assets/images/product/pages/Core.jpg'
import VideoSection from "../../components/videoSection/videoSection"

export default function AlbumsLearnMore() {

    return(
        <main>
            <Navbar/>
            <div className="hero">
            <FullPageCard 
                image={Album1}
                title='Your Photos, Our Design Team'
                line2='Select Your Album, Upload Your Images, We Edit & Design for You' 
                          
            />
            </div>
            <VideoSection 
                video=''
            
            />
            <div className="section"
                style={{backgroundImage: `url(${Pages})`, backgroundSize: 'cover', }}
            >
                <div>
                    <h2 style={{color: 'white', paddingTop: '45px' }}>Double or Single Page Core</h2>
                </div>
                
                
            </div>
            <div className="section"
                style={{backgroundImage: `url(${Pages})`, backgroundSize: 'cover', }}
            >
                <div>
                    <h2 style={{color: 'white', paddingTop: '45px' }}>Regular or Artisan Materials</h2>
                    <h4>We offer a wide selection of album covers</h4>
                </div>
            </div>
            
            <div className="section"
                style={{backgroundImage: `url(${Pages})`, backgroundSize: 'cover', }}
            >
                <div>
                    <h2 style={{color: 'white', paddingTop: '45px' }}>Leather and Acrylic Albums</h2>
                    <h4>We offer a wide selection of album covers</h4>
                </div>
            </div>
            <div className="section"
                style={{backgroundImage: `url(${Pages})`, backgroundSize: 'cover', }}
            >
                <div>
                    <h2 style={{color: 'white', paddingTop: '45px' }}>Synthetic Albums</h2>
                    <h4>We offer a wide selection of album covers</h4>
                </div>
            </div>
            <div className="section"
                style={{backgroundImage: `url(${Pages})`, backgroundSize: 'cover', }}
            >
                <div>
                    <h2 style={{color: 'white', paddingTop: '45px' }}>Fabric Albums</h2>
                    <h4>We offer a wide selection of album covers</h4>
                </div>
            </div>
            <div className="section"
                style={{backgroundImage: `url(${Pages})`, backgroundSize: 'cover', }}
            >
                <div>
                    <h2 style={{color: 'white', paddingTop: '45px' }}>Album Cover Personalization</h2>
                    <h4>Want something to kick it up a notch?  Try Our Dimensional Lettering or Embossing</h4>
                </div>
            </div>
            <div className="section"
                style={{backgroundImage: `url(${Pages})`, backgroundSize: 'cover', }}
            >
                <div>
                    <h2 style={{color: 'white', paddingTop: '45px' }}>Album Boxes</h2>
                    <h4>Inspired by Luxury Brands, a Customizable Box for Your One-of-a-Kind Album</h4>
                </div>
            </div>


        </main>
    )
}