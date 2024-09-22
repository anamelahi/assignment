import React from 'react'
import "./Hero.css"
import List from './List'
import Button from '../Buttons/Button'
import heroImg from "../../assets/pi.svg"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
            <h1>Lorem ipsum dolor <br /> sit amet</h1>
            <div className="checks">
            <List litext="100% Free to use"/>
            <List litext="900+ High-Quality Products"/>
            <List litext="Largest global print network"/>
            </div>
            <div className="btns">
                <Button btntext="Start for free"/>
                <Button btntext="How it Works" />
            </div>
            <p>Trusted by over 8M sellers around the world</p>
            
        </div>
        <div className="right">
            <img src={heroImg}alt="" />
        </div>
    </div>
  )
}

export default Hero