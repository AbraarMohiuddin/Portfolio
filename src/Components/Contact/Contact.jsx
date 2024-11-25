import React, { useState } from "react";
import "./Contact.css";
import themepattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "532b772c-cda8-4fa8-9cfb-92c47b01eddc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message has been sent successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={themepattern} alt="Theme pattern" />
      </div>
      <div className="contact-sections">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <p>
            <img src={mail_icon} alt="Mail icon" className="icon" />{" "}
            abraarmohiuddin3@gmail.com
          </p>
          <p>
            <img src={call_icon} alt="Call icon" className="icon" /> +61
            402318782
          </p>
          <p>
            <img src={location_icon} alt="Location icon" className="icon" />{" "}
            Melbourne, Australia
          </p>
        </div>

        {/* Right Section - Form */}
        <form className="contact-right" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="12" // Increase rows for vertical size
            cols="50" // Adjust columns for horizontal size
            required
          ></textarea>
          <div className="button">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <div className="result-message">
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
