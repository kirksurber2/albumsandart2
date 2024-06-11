import './videoSection.css'

export default function VideoSection(props) {

    return(
        <div className="videoSectionArea">
            <div className="videoArea">
                <h1>Video here</h1>
                <video width={1300}>
                    <source ></source>
                </video>
            </div>
            <div className="infoArea">
                <h3>Next Level Albums</h3>
                <p>Enjoy our latest albums, leathers and upgrades</p>
                <button>Contact Us</button>
            </div>
            
        </div>
    )
}