import React from "react";
import '../../styles/form.css'
function ContactUs() {
  return (
    <div>
      {" "}
      <div className="background contact-us">
        <div className="features features-text purple-gradient services">
          <h1 className="features-heading txt-ctr">Contact Us</h1>
          <p className="features-para">
            Have a suggestion, or a query or just a feedback, write it to us
          </p>
        </div>

        <div className="form">
          <div className="w-100 margin-top-10">
            <label className="label">Name</label>
            <input
              type="text"
              className="input-100"
              placeholder="Enter your name"
              name="title"
              id="title"
            />
          </div>

          <div className="w-100 margin-top-10">
            <label className="label">Email</label>
            <input
              type="email"
              className="input-100"
              placeholder="Enter your email address"
              name="email"
              id="email"
            />
          </div>

          <div className="w-100 margin-top-10">
            <label className="label">Message</label>
            <textarea
              className="input-100 textarea"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <div className="w-100 margin-top-10">
            <button
              type="submit"
              className="submit-button"
             
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
