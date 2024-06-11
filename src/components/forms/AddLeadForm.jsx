'use client'

import { useState } from 'react'

export default function AddLeadForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [notes, setNotes] = useState('')
    const [ sessionType, setSessionType ] = useState('')
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        if(e.target.value === firstName) {

        }
    }
    function handleErrors(error) {
        setErrors(prev => [...prev, error])
    }

    
    return(
        <div className='container'>
            <h2>Add Lead Information</h2>
            <div>
                <input 
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required={true}
                ></input>
                <input 
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required={true}
                ></input>
                <input 
                    type='tel'
                    placeholder='Phone'
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                ></input>
                <input 
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={(e) => setFirstName(e.target.value)}
                    required={true}
                ></input>
                <input 
                    type='text-area'
                    placeholder='Notes'
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                ></input>
            </div>
        </div>
    )
}