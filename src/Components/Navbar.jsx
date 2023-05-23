import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <h1>Welcome to our game</h1>
        <Link to='/about'className='link'>About</Link>
        <Link to='/'className='link'>Game</Link>
    </div>
  )
}

export default Navbar