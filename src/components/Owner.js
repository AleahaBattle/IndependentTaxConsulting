import React from 'react'
import john from './images/john-doe.png'
import './css/style.css'
import './css/bootstrap.css'
import data from "../data/data.json"

const Owner = () => {
  return (
    <div id="owner">
      <div className='container'>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={john} className="img-responsive" alt="john" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="owner-text">
            <h2>About The Owner</h2>
              <span className='line'></span>
              <p>{data.Owner.paragraph1 || "loading..."}</p>
              <p>{data.Owner.paragraph2 || "loading..."}</p>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data.Owner.Why ? data.Owner.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                        ))
                    : "loading"}
                  </ul>
                </div>
              </div>
              <a href="#about" className="btn btn-custom btn-lg">
                {data.Owner.button || "loading..."}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Owner