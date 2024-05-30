import "./about-us-styles.css";
import aoun_img from "../../assets/aon.png";
import talha_img from "../../assets/talha.jpg";
import areez_img from "../../assets/areez.jpg";
import cloud_img from "../../assets/cloud-support-logo.jpg";
import backend_management_img from "../../assets/backend-management-logo.jpg";
import ai_img from "../../assets/integrate-ai-logo.png";
import responsive_img from "../../assets/responsive-design-logo.png";
import drag_drop_img from "../../assets/drag-drop-logo.png";
import logo_img from "../../assets/logo-bg-removed.png";

const AboutUs = () => {
  return (
    <div className="con1">
      <div className="wrappers1">
        <h1>About Us</h1>
        <div className="text-column hidden show">
          <img src={logo_img} alt="drag&drop" />
          <hr />
          <p>
            Welcome to <strong>Code Sprint</strong>! Code Sprint is a language
            learning game featuring interactive exercises and tutorials designed
            to make anyone a first-class citizen in the field of programming. We
            aim to simplify coding education with engaging, hands-on
            experiences.
          </p>
        </div>
        <hr className="horizontal-line" />
        <div className="text-column hidden show">
          <h2>Features</h2>
          <ul>
            <li className="list-item">
              <img
                id="f-logo"
                className="hidden"
                src={drag_drop_img}
                alt="drag&drop"
              />
              <div className="align-img text-column">
                <strong>Drag-and-Drop Interface</strong>
                <br />
                <hr />
                Build web applications using a visual programming approach.
              </div>
            </li>
            <li className="list-item">
              <div className="text-column align-img">
                <strong>Responsive Design</strong>
                <br />
                <hr />
                Utilizes Bootstrap 5 and Tailwind CSS for responsive and
                reusable components.
              </div>
              <img
                id="f-logo"
                className="hidden"
                src={responsive_img}
                alt="drag&drop"
              />
            </li>
            <li className="list-item">
              <img
                id="f-logo"
                className="hidden"
                src={ai_img}
                alt="drag&drop"
              />
              <div className="text-column align-img">
                <strong>AI Integration</strong>
                <br />
                <hr />
                Provides design suggestions and optimizes system performance
                with AI.
              </div>
            </li>
            <li className="list-item">
              <div className="text-column align-img">
                <strong>Cloud Support</strong>
                <br />
                <hr />
                Backup, fast access, and caching of resources using cloud
                services.
              </div>
              <img
                id="f-logo"
                className="hidden"
                src={cloud_img}
                alt="drag&drop"
              />
            </li>
            <li className="list-item">
              <img
                id="f-logo"
                className="hidden"
                src={backend_management_img}
                alt="drag&drop"
              />
              <div className="text-column align-img">
                <strong>Backend Management</strong>
                <br />
                <hr />
                Supports Express.js for backend development and MongoDB as an
                object-oriented database.
              </div>
            </li>
          </ul>
        </div>
        <hr className="horizontal-line" />
        <div className="text-column hidden show">
          <h2>Our Team</h2>
          <div className="team-member">
            <img id="f-logo" className="hidden" src={areez_img} alt="Areez" />
            <h3>Areez Khan</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-member">
            <img id="f-logo" className="hidden" src={aoun_img} alt="Aon" />
            <h3>Mr. Aoun Haider</h3>
            <p>Project Leader</p>
          </div>
          <div className="team-member">
            <img id="f-logo" className="hidden" src={talha_img} alt="Talha" />
            <h3>Talha Shafique</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
