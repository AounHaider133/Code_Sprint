//npm i emailjs-com
//Service ID: service_y0nyw6c
//Template ID: template_wk26xwh
//User ID/public key: tH29OXxd2x2PsJMxT

import { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "../modal/Modal";
import "./create-contact-styles.css";
import { useNavigate } from "react-router-dom";
const CreateContact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setModalText("Please fill in all fields.");
      setShowModal(true);
      return;
    }

    // EmailJS service parameters
    const serviceID = "service_y0nyw6c"; // Replace with your actual Service ID
    const templateID = "template_wk26xwh"; // Replace with your actual Template ID
    const userID = "tH29OXxd2x2PsJMxT"; // Replace with your actual User ID (Public Key)

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setModalText("Message sent successfully!");
        setShowModal(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form fields
        navigate("/");
      },
      (error) => {
        console.log("FAILED...", error);
        setModalText("Failed to send message. Please try again later.");
        setShowModal(true);
      }
    );
  };

  return (
    <div className="cons">
      <div className="wrapper-c">
        <form onSubmit={handleSubmit} name="contactForm">
          <h1>Send Message</h1>
          <div className="input-box1">
            <div className="input-field1">
              <label htmlFor="name">Full Name</label>
              <div className="icon-input">
                <i className="bx bxs-user"></i>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-field1">
              <label htmlFor="email">Email</label>
              <div className="icon-input">
                <i className="bx bxs-envelope"></i>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-field1">
              <label htmlFor="subject">Subject</label>
              <div className="icon-input">
                <i className="bx bxs-file"></i>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="input-field1 relative-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                className="message-box"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
        <div className="text-column">
          <h2>Contact Information</h2>
          <div className="text-column-border">
            <div className="contact-item">
              <i className="bx bxs-envelope"></i>
              <p>
                <strong>Email:</strong> AounHaiderSandhu@gmail.com
              </p>
            </div>
            <div className="contact-item">
              <i className="bx bxs-phone"></i>
              <p>
                <strong>Phone:</strong> +923280416491
              </p>
            </div>
            <div className="contact-item">
              <i className="bx bxs-map"></i>
              <p>
                <strong>Address:</strong> Dream Gardens, Lahore, Pakistan
              </p>
            </div>
            <div className="contact-item">
              <i className="bx bxs-time-five"></i>
              <p>
                <strong>Business Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title="Notification"
          text={modalText}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CreateContact;
