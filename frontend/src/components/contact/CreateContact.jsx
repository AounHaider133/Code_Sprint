import "./create-contact-styles.css";

const CreateContact = () => {
  return (
    <div className="cons">
      <div className="wrapper-c">
        <form action="" name="contactForm">
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
                  required
                  name="name"
                  autoComplete="name"
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
                  required
                  name="email"
                  autoComplete="email"
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
                  required
                  name="subject"
                />
              </div>
            </div>

            <div className="input-field1 relative-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                required
                name="message"
                className="message-box"
              ></textarea>
            </div>

            <button type="button" className="btn">
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
                <strong>Email:</strong> info@yourcompany.com
              </p>
            </div>
            <div className="contact-item">
              <i className="bx bxs-phone"></i>
              <p>
                <strong>Phone:</strong> +1-123-456-7890
              </p>
            </div>
            <div className="contact-item">
              <i className="bx bxs-map"></i>
              <p>
                <strong>Address:</strong> 123 Main Street, City, Country
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
    </div>
  );
};

export default CreateContact;
