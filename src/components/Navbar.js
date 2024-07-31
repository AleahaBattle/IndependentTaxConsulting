import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'
import data from "../data/data.json"

import './css/Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
        // <div className='header'>
        //     <nav className='navbar'>
        //         <a href='/' className='logo'>
        //             <img src={logo} alt='logo' />
        //         </a>
        //         <div className='hamburger' onClick={handleClick}>
        //             {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
        //                 : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

        //         </div>
        //         <ul className={click ? "nav-menu active" : "nav-menu"}>
        //             <li className='nav-item'>
        //                 <a href='/#' onClick={closeMenu}>Home</a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a href='#about' onClick={closeMenu}>About</a>
        //             </li>
        //             <li className='nav-item'>
        //                 <a href='#contact' onClick={closeMenu}>Contact</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
            {data.Navigation.title}
            {/* <img src={logo} alt='logo' /> */}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className='nav-item'>
              <a href='/#' onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" className="page-scroll">About</a>
            </li>
            <li>
              <a href="#owner" className="page-scroll">Owner</a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
