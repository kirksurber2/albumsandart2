'use client'
import React from 'react'
import { useEffect } from 'react'
import styles from './countdownTimer.module.css'


function CountdownTimer() {
const [lead, setLead] = React.useState({
    email: "", firstName: "", lastName: "", phone: ""
})

function handleChange(e) {
    console.log(e)
}

function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
}

const [day, setDay] = React.useState(0)
const [hour, setHour] = React.useState(0)
const [minute, setMinute] = React.useState(0)
const [second, setSecond] = React.useState(0)

useEffect (() => {
const target = new Date("04/02/2024 12:59:59")

const interval =setInterval (() => {
const now = new Date()
const difference =target.getTime() - now

const d = Math.floor(difference / (1000 * 60 * 60 * 24))
setDay(d)

const h = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
setHour(h)

const m = Math.floor(difference % (1000 * 60 * 60 ) / (1000 * 60) )
setMinute(m)

const s = Math.floor(difference % (1000 * 60) / 1000)
setSecond(s)


}, 1000)


return () => clearInterval(interval)
}, [])

  return (
    <div className='countdownTimerContainer'>
        <p className='countdownTimerTitle'>COMING SOON!</p>
        
        <div className='countdownTimerArea'>
            <div className='countdownTimerBox'>
            <p className='countdownTimer'>
                {day} 
            </p> 
                <p className='countdownTimerLabel'>Days</p>
            </div>    
            <div className='countdownTimerBox'>
            <p className='countdownTimer'>
                {hour} 
                </p>
                <p className='countdownTimerLabel'>Hrs</p>
            </div>    
            <div className='countdownTimerBox'>
                <p className='countdownTimer'>
                {minute} 
                </p>
                <p className='countdownTimerLabel'>Min</p>
            </div>    
            <div className='countdownTimerBox'>
            <p className='countdownTimer'>
                {second} 
                </p> 
                <p className='countdownTimerLabel'>Sec</p>
            </div>    
        </div>
       
        
    </div>
  )
}

export default CountdownTimer