
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import './login.css'
import Navbar from '../../components/navbars/Navbar'



export default function Login() {
    const { login, user } = useContext(UserContext)
    const navigate = useNavigate()
    const [hasAccount, setHasAccount] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleLogin(e) {
        e.preventDefault()
        const credentials ={email, password}
        login(credentials)
        navigate(`/${user.company_id}/workflow`)
        
    } 

    return(
        <main>
            <Navbar/>
            <div className='hero'>
                <div className='leftSide'>
                    <h1>Login to Your Account</h1>
                </div>

            <div className='rightSide'>

        
                <form onSubmit={handleLogin} className='loginBox'>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email" 
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            >

                        </input>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            >
                            
                        </input>
                        <button>Login</button>
                        
                        
                    <Link to='/create-account' className='createAccount'>Create Account</Link>
                </form>
             </div>
             
          </div>
        </main>
    )
}




