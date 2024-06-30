import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src='./assets/sword-and-shield.png' alt='' />

            <ul>
                <li>
                    <a className='menu-item' href=''>Lights</a>
                </li>
                <li>
                    <a className='menu-item' href=''>Music</a>
                </li>
                <li>
                    <a className='menu-item' href=''>Lookup</a>
                </li>
            </ul>
        </div>
        <div className='ivy'>
            <img className='ivy1' src='./assets/ivy1.png' alt=''/>
            <img className='ivy2' src='./assets/ivy2.png' alt=''/>
        </div>
    </div>
  )
}

export default Navbar