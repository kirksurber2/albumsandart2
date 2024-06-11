import { Link } from "react-router-dom";



export default function WallArtPage() {

    return (
        <main>
            <h1>Taking Your Images and Creating a Home Design</h1>
            <p>Have images that need to be on a wall?</p>
            <div className="wallArtHelp">
                <h2>Have us Help You Design Your Wall or Home</h2>
            </div>
            <div className="wallArtSteps">
                <h2>Photograph Your Wall</h2>
            </div>
            <div className="wallArtSteps">
                <h2>Select an Image You Want Mounted</h2>
            </div>
            <div className="wallArtSteps">
                <h2>Choose Your Size or Schedule a Consultation</h2>
                <Link>Need Help?</Link>
            </div>
        </main>
    )
}