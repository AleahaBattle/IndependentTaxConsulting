import React from 'react'
import './css/style.css'
import './css/bootstrap.css'
import data from "../data/data.json"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                {/* <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul> */}
                <div className='bottom'>
                    <span className='line'></span>
                    <p>&copy; {data.Footer.copy}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
