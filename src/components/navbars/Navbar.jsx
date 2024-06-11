
import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo-black-500.png'
import  './Navbar.css'
import { LuUserCircle2, LuMenu } from "react-icons/lu";
import { FaGoogle, FaRegBell, FaShoppingCart } from 'react-icons/fa'
import { UserContext } from '../../context/UserProvider';


 export default function Navbar () {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [ providers, setProviders ] = useState(null)
    const [hoverExpand, setHoverExpand] = useState(false)

const mouseHover = e => {
    e.target.classList.add('NavbarHover')
}
  useEffect(() => {
    const setAuthProviders = async () => {
        const res = await setProviders();
        setProviders(res)
        
    }
    setAuthProviders()
    
}, [])

// Have ID for each link create hover.  If hover ID = true then allow product versions to show on expanded Navbar

    return (
        
        <div className='navbar' >    
            <a href='/' >
                <img src={logo} width={125} alt='logo image' />
            </a>
           
            

            <Link  to='/albums' id='AlbumsLink'>Albums</Link>
            <Link  to='/editing'>Editing</Link>
            <Link  to='/wall-art'>Wall Art</Link>
            <Link  to='/image-box'>Image Box</Link>
            <Link  to='/about'>About</Link>
            <Link  to='/cart'><FaShoppingCart />Cart</Link>
            <Link  to='/login'>Login/Create</Link>
            
            <button hidden={true}>
                <FaGoogle size={20} className='icon'/>
                Google Signin
            </button>
            
            
                <div>
                    {providers &&
                    Object.values(providers).map((provider, index) => (

                    <button onClick={() => signIn(provider.id)} key={index}>
                        {provider.id === "google" &&
                        <>
                        <FaGoogle style={{marginRight: 10}}/>
                        <span>Google Login</span>
                        </>
                        }
                        {provider.id === 'credentials' &&
                        <span>Email</span>
                        }
                    </button>            
                    )) 
                    }
                </div>
            
           
            
            
        </div>
        
    )
}

