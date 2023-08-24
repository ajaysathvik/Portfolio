import React from 'react'
import { useState } from 'react'
import './Landing.css'

const Landingpage = () => {

  const [text, setText] = useState('Ajay Sathvik')

  const handleMouseEnter = () => {
    
  }

  const handleMouseLeave = () => {
    setText('Ajay Sathvik')
  }


  return (
    <div className='fullscreen-box'>
      <div className='navbar'>
      <div className='text-name'
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </div>
      <div className='text-navbar'>
        <a href='#about' className='About' >About</a>
        <a href='#projects' className='Projects'>Projects</a>
        <a href='#contact' className='Contact'>Archive</a>
      </div>
      </div>
        <div className='circle1 '></div>
        <div className='circle2 '></div>
      
      <div >
        <p className='text-intro'>
          <span className='text-intro1'>HI! </span>
          <br/>
          <span className='text-intro3'>I'm </span>
          <span className='text-intro4'>Ajay </span>
          <span className='text-intro5'>Sathvik &#128515;, </span>
          <br/>
          <span className='text-intro15'>A </span>
          <span className='text-intro15'>FullStack </span>
          <span className='text-intro18'>BlockChain </span>
          <span className='text-intro19'>Developer. </span>
          <br/>
          <span className='text-intro20'>Feel </span>
          <span className='text-intro21'>free </span>
          <span className='text-intro22'>to </span>
          <span className='text-intro23'>check </span>
          <span className='text-intro24'>out </span>
          <span className='text-intro25'>My </span>
          <span className='text-intro26'>Projects </span>
          <span className='text-intro27'>below </span>
        </p>
      </div>

    </div>
  )
}

export default Landingpage