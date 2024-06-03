// Footer.jsx
import PropTypes from "prop-types";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo-bg-removed.png";

const Footer = ({ description, address, links, socialMedia }) => {
  return (
    <footer className="bottom-footer">
      <div className="roww">
        <div className="coll">
          <img src={logo} alt="Code Sprint Logo" className="logo" />
          <p>{description}</p>
        </div>
        <div className="coll">
          <h3 className="footer-link">
            Address
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <address>
            <p>{address.line1}</p>
            <p>{address.line2}</p>
          </address>
        </div>
        <div className="coll">
          <h3 className="footer-link">
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          {links.map((link, index) => (
            <a href={link.href} key={index}>
              {link.text}
            </a>
          ))}
        </div>
        <div className="coll">
          <h3 className="footer-link">
            Contact Us
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <div className="social-icons">
            {socialMedia.map((media, index) => (
              <a href={media.href} key={index} aria-label={media.label}>
                <FontAwesomeIcon icon={media.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string.isRequired,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default Footer;
