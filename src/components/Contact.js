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
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>{data.Contact.paragraph}</p>
              </div>
              <form id="sentMessage" name="sentMessage" validate='true' onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
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
                  <div className="col-md-6">
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
          <div className="col-md-3 col-md-offset-1 contact-info">
            {/* <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {data.Contact.address || "loading"}
              </p>
            </div> */}
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {data.Contact.phone || "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {data.Contact.email || "loading"}
              </p>
            </div>
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
  );
}

export default Contact