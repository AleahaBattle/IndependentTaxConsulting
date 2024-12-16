import React, { useState } from "react"
import './css/style.css';
import './css/bootstrap.css'
import './fonts/font-awesome/css/font-awesome.css'
import data from "../data/data.json"

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const toEmail = data.Contact.email;
  const subject = encodeURIComponent(data.Contact.subject) || '';

  const street = '2444 Morris Ave';
  const city = 'Union';
  const state = 'NJ';
  const zip = 'Union';

  const addressUrl = 'https://www.google.com/maps/search/?api=1&query='+[street]+','+[city]+','+[state]+','+[zip];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => {
    setState({ ...initialState })
    document.getElementById("sentMessage").reset();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyText = message + "\n\nKind regards,\n\n" + name + "\n" + email;
    const body = encodeURIComponent(bodyText) || '';

    const emailText = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    window.open(emailText, '_self');
    clearState();
  };
  return (
    <section>
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8 col-xs-12">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>{data.Contact.paragraph}</p>
                </div>
                <form id="sentMessage" name="sentMessage" validate='true' onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-md-offset-1">
              <address>
                <div className="contact-item">
                  <h3>Contact Info</h3>
                  <a href={addressUrl} target="_blank" rel="noopener noreferrer">
                    <p>
                      <span>
                        <i className="fa fa-map-marker"></i> Address
                      </span>
                      {data.Contact.address1 || "loading"}
                    </p>
                    <p>
                      {data.Contact.address2 || "loading"}
                    </p>
                    <p>
                      {data.Contact.address3 || "loading"}
                    </p>
                  </a>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    <a href="tel:+19732049541">
                    {data.Contact.phone || "loading"}
                    </a>
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    <a href="mailto:info@independenttaxconsulting.com">
                    {data.Contact.email || "loading"}</a>
                  </p>
                </div>
              </address>
            </div>
            {/* <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href={data.Contact.facebook || "/"}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.Contact.twitter || "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={data.Contact.youtube || "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact