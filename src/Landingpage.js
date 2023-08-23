import React from 'react'
import './Landing.css'

const Landingpage = () => {
  return (
    <div className='fullscreen-box'>
      <div className='text-name'>
        Ajay Sathvik
      </div>
        <div className='circle1 move'></div>
        <div className='circle2 move'></div>
      <div className='text-navbar'>
        <a href='#about' className='About'>About</a>
        <a href='#projects' className='Projects'>Projects</a>
        <a href='#contact' className='Contact'>Contact</a>
      </div>
      <div >
        <p className='text-colour text-intro'>Hello world! , I'm Ajay Sathvik, a 1st year C.S student at the University of Amrita. I'm interested in Block-Chain Developer. Feel free to check out my projects below!</p>
      </div>
    </div>

  )
}

export default Landingpage