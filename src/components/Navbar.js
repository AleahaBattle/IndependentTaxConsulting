import React, { useState } from 'react'
import data from "../data/data.json"
import './css/style.css'
import './css/bootstrap.css'

const Navbar = () => {
  const [state, setState] = useState({
    left: false,
    active: ''
  });
  const [width, height] = [window.screen.width, window.screen.height];
  const isMobile = Math.min(width, height) < 768;

  const toggleDrawer = (anchor, open, activeLink='') => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open, ['active']: activeLink});
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            aria-label="menu"
            type="button"
            className={state['left'] ? "navbar-toggle" : "navbar-toggle collapsed"}
            aria-expanded={state['left']}
            onClick={toggleDrawer('left', !state['left'])}
          >
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
            <a className="navbar-brand page-scroll" href=" ">
              {isMobile ? data.Navigation.shortTitle : data.Navigation.title}
            </a>{" "}
        </div>
        <div
          className={state['left'] ? "navbar-collapse collapse in" : "navbar-collapse collapse"}
          aria-expanded={state['left']}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li
              className={state['active'] === '#' ? "active" : ''}
            >
              <a
                href="#"
                className="page-scroll"
                onClick={toggleDrawer('left', !state['left'], '#')}
              >
                Home
              </a>
            </li>
            <li
              className={state['active'] === '#about' ? "active" : ''}
            >
              <a
                href="#about" 
                className="page-scroll"
                onClick={toggleDrawer('left', !state['left'], '#about')}
              >
                About
              </a>
            </li>
            <li
              className={state['active'] === '#owner' ? "active" : ''}
            >
              <a
                href="#owner"
                className="page-scroll"
                onClick={toggleDrawer('left', !state['left'], '#owner')}
              >
                Owner
              </a>
            </li>
            <li
              className={state['active'] === '#contact' ? "active" : ''}
            >
              <a
                href="#contact"
                className="page-scroll"
                onClick={toggleDrawer('left', !state['left'], '#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
