
import './PreLaunchForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function PreLaunchForm(props) {
    const navigate = useNavigate()

    const [user, setUser] = useState ({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        tag:{title: "Pre-Launch waitlist"}, 
        test: ""
        
    }
    )
    function handleFormChange(e) {
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}))
        
    }
    function handleSubmit (e)  {
        e.preventDefault(user)
        if(user.test !== "") {
            navigate('/')
        }
        const res =  axios.post('http://localhost:9000/marketing/waitlist', user)
        .then(res => {
            const {user} = res.data
            setUser({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                tag: ""
            })
            navigate('/Pre-Launch-Special')

        })
        
        
        
        console.log(user)
    } 


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="firstName"
                placeholder='First Name'
                onChange={handleFormChange}
                value={user.firstName}>

                </input>
                <input 
                type="text"
                name="lastName"
                placeholder='Last Name'
                onChange={handleFormChange}
                value={user.lastName}>

                </input>
                <input 
                type="tel"
                name="phone"
                placeholder='Phone'
                onChange={handleFormChange}
                value={user.phone}>

                </input>
                <input 
                type="email"
                name="email"
                placeholder='Email'
                onChange={handleFormChange}
                value={user.email}>

                </input>
                <input 
                type="text"
                name="tag"
                placeholder='tag'
                onChange={handleFormChange}
                value={user.tag}
                hidden={true}
                
                >
                </input>
                <input 
                type="text"
                name="test"
                placeholder='test'
                onChange={handleFormChange}
                value={user.test}
                hidden={true}
                >
                </input>
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PreLaunchForm