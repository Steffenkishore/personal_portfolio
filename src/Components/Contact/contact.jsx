// src/components/Contact.jsx
import React from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    toast("Sending...", {
      style: {
        background: "#fff",
        color: "#000",
      },
    });
    const formData = new FormData(event.target);

    formData.append("access_key",import.meta.env.VITE_WEB_ACCESS_TOKEN);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast("Email sent successfully", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#000",
        },
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Error!");
    }
  };

  return (
    <section className="section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-section">
        <div className="card" id="contact-card">
          <p>
            <FaLocationDot style={{ color: "#13adc5", fontSize: "18px" }} />
            <span style={{ marginLeft: "8px" }}>
              Chennai, Tamil Nadu - 600 119
            </span>
          </p>
          <p>
            <FaPhoneAlt style={{ color: "#13adc5", fontSize: "18px" }} />
            <a href="tel:+919944192246">+91 9944192246</a>
          </p>
          <p>
            <MdEmail style={{ color: "#13adc5", fontSize: "18px" }} />
            <a href="mailto:kishoresteffen@gmail.com">
              kishoresteffen@gmail.com
            </a>
          </p>
          <p>
            <FaLinkedin style={{ color: "#13adc5", fontSize: "18px" }} />
            <a
              href="https://linkedin.com/in/steffenkishore"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/steffenkishore
            </a>
          </p>
          <p>
            <FaGithub style={{ color: "#13adc5", fontSize: "18px"}} />
            <a
              href="https://github.com/Steffenkishore"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Steffenkishore
            </a>
          </p>
          <div className="ct-form">
            <span>Contact form</span>
            <form className="form" onSubmit={onSubmit}>
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea
                name="message"
                placeholder="Type your message here....."
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;