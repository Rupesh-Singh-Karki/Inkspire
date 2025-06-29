import React from 'react'
import logo from '../assets/full_logo.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} alt="Logo" className="w-24 md:w-28 lg:w-32 object-contain"/>
    </div>
  )
}

export default Logo