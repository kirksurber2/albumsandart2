
import { useState, useRef, useEffect, useContext } from 'react'

import { UserContext } from '../../context/UserProvider'
import './createAccount.css'
import {useNavigate } from 'react-router-dom'

import Navbar from '../../components/navbars/Navbar'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Navigate } from 'react-router-dom'

const passREGEX = /^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*].*[!@#$%^&*].{12, 32})$/

const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"


export default function CreateAccount () {
const navigate = useNavigate()
  
 // Refs **********************************
 const userRef = useRef()
 const errRef = useRef()
 const companyRef = useRef() 

 //Context ************************
 const { signup, token, user } = useContext(UserContext)
// Form State *************************************
  const [companyName, setCompanyName] = useState('')
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verify, setVerify] = useState('')
  const [eye, setEye] = useState(false)
  // Checks States
  const [test, setTest] = useState('')
  const [isValidated, setIsValidated] = useState(false)
  const [length, setLength] = useState('Password contains 12 or more characters')
  const [capital, setCapital] = useState('2 Uppercase letters - minimum')
  const [symbols, setSymbols] = useState('2 special characters minimum !@#$%^&*')
  const [lowerCase, setLowerCase] = useState('2 lower case letters - minimum')
  const [numbers, setNumbers] = useState('2 numbers minimum')
  const [match, setMatch] = useState('The passwords must match')


  function handleEye() {
    setEye(eye => !eye)
  }
  // validation 
  // const [lowerValidated, setLowerValidated] = useState(false)
  // const [upperValidated, setUpperValidated] = useState(false)
  // const [numberValidated, setNumberValidated] = useState(false)
  // const [specialValidated, setSpecialValidated] = useState(false)
  // const [lengthValidated, setLengthValidated] = useState(false)
  
  // const [errMsg, setErrMsg] = useState('')
  // const [success, setSuccess] = useState(false)
   const [errors, setErrors]= useState([])

  // function formValidation() {
  //   let errors = {};
  //   if (!firstName) {
  //     errors.firstName = 'Please enter a first name'
  //   }
  //   if (!lastName) {
  //     errors.lastName = 'Please enter a last name'
  //   }
  //   if (!phone) {
  //     errors.phone = 'Please enter a phone number'
  //   }
  //   else if (phone <10 ) {
  //    errors.phone = 'Please provide a valid phone number'
  //   }
  //   if (!password) {
  //     errors.password = 'Please enter a password'
  //   }
  //   else if (password != regex) {
  //     errors.password = 'Please enter a valid password'
  //   }
  //   if (!companyName) {
  //     errors.companyName = 'Please enter a company name'
  //   }
  //   setErrors(errors)
  //   setIsValid (Object.keys(errors).length === 0)
  //  }



  // UseEffects **************************************
  useEffect(() => {
    companyRef.current.focus()
  }, [])

  // useEffect(() => {
  //   const result = passREGEX.test(password)
  //   console.log(result)
  //   console.log(password)
  //   setIsValidated(result)
  //   const same = password === verify
  //   setMatch(same)
  // }, [password, verify])

  // useEffect(() => {
  //   setErrors("")
  // }, [companyName, firstName, lastName, phone, password, verify ])

 

  function handleCompanySubmit(e) {
    e.preventDefault()
    setEye(false)
    const user = {companyName, firstName, lastName, password, phone, email}
    signup(user)
    navigate('/login')
    
    } 
  
  
    return (
        <main >  
        <Navbar />          
          
            <div className='formBox'>
            <h1>Create Your Account</h1>
              <p ref={errRef} aria-live='assertive'>{errors}</p>
              <form onSubmit={handleCompanySubmit}>
                <input
                  type='text'
                  placeholder='Company Name or DBA'
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required={true}
                  tabIndex={1}
                  ref={companyRef}
                  autoComplete='off'
                  ></input>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required={true}
                  tabIndex={2}
                  autoComplete='off'
                ></input>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required={true}
                  tabIndex={3}
                  autoComplete='family-name'
                ></input>
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}
                  required={true}
                  tabIndex={4}
                  autoComplete='tel'
                ></input>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                  tabIndex={5}
                  autoComplete='email'
                ></input>
                <input
                  type={eye? 'text': 'password'}
                  name='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
                  tabIndex={6}
                  autoComplete='new-password'
                ></input>
                <input
                  type={eye? 'text' : 'password'}
                  name='verifyPassword'
                  placeholder='Verify your password'
                  value={verify}
                  onChange={(e) => setVerify(e.target.value)}
                  required={true}
                  tabIndex={7}
                  
                ></input>
                <span>{eye? <IoMdEye onClick={handleEye}/> : <IoMdEyeOff onClick={handleEye}/>}</span>
                <input
                  type='text'
                  name='Address'
                  placeholder='Address'
                  value={test}
                  onChange={(e) => setTest(e.target.value)}
                  hidden={true}
                ></input>
                {/* {!isValidated && 
                  <div className='passwordValidation'>
                    {lengthValidated? null: <p>{length}</p>}
                    <p>{capital}</p>
                    <p>{lowerCase}</p>
                    <p>{numbers}</p>
                    <p>{symbols}</p>
                    <p>{verify === password? null : match}</p>
                  </div>
                } */}

                <button>Create Account</button>
              </form>
             <br/>
             <a href='/login'>Already have a plan?  Login</a>
            </div>
             {/* <Plans/> */}
          </main>
        
    )
}

