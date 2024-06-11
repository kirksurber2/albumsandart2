import { Outlet, useLocation } from "react-router-dom"

import Navbar from "../components/navbars/Navbar"



export default function RootLayout () {
    const location = useLocation()
    console.log(location)
    return(
        <>
        {location.pathname !== '/Pre-Launch-Special'  || location.pathname !== '/Pre-Launch-Special/share' || location.pathname !== '/Pre-Launch-Special/refer-a-friend' &&
        
            <aside>
            <Navbar />
            </aside>
        }
       
            <main style={{marginTop: '100px'}}>
                <Outlet />
            </main>
                
        </>
    )
}