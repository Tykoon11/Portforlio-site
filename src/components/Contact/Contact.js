import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-container">
      <div id="contact-title">
        <h4>Contact</h4>
        <p>Feel free to contact me and I'll be sure to respond .</p>
      </div>
      <div id="form-container">
        <form action="POST" data-netlify="true" id="contact-form">
          <div className="text-edit">
            <label for="exampleInputPassword1">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your name..."
            />
          </div>
          <div className="fill-form text-edit">
            <label for="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter your email address.."
            />
          </div>
          <div className=" fill-form text-edit">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              rows="7"
              placeholder="Enter your message"
            ></textarea>
            
          </div>
          <div className="btn-container">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
