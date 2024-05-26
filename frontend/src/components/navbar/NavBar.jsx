// NavBar.jsx
import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";
const NavBar = ({ links }) => {
  const [menuActive, setMenuActive] = React.useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="Logo" height="42" width="92" />
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
      </div>

      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        {links.map((link, index) => (
          <Link to={link.href} key={index}>
            {link.text}
          </Link>
        ))}
      </nav>

      <div className={`nav-bg ${menuActive ? "active" : ""}`}></div>
    </header>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;
