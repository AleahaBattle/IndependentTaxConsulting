import React from 'react'
import tax from './images/tax-forms.jpg'
import './css/style.css'
import './css/bootstrap.css'
import data from "../data/data.json"

const About = () => {
    return (
      <div id="about">
        <div className='container'>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src={tax} className="img-responsive" alt="about" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{data.About.paragraph || "loading..."}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {data.About.Why ? data.About.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                          ))
                      : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About
