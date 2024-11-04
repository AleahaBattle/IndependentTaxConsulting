import React from 'react'
import './css/style.css'
import './css/bootstrap.css'
import data from "../data/data.json"

const Hero = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="stroke-text">
                  {data.Hero.title || "Loading"}
                </h1>
                <p className="stroke-text">{data.Hero.paragraph || "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {data.Hero.button || "Loading"}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
