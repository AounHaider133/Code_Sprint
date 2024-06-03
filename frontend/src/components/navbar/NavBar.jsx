import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo-bg-removed.png";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const NavBar = ({ links }) => {
  const { logout, isUserLogin, isAdminLogin, adminLogout } = useAuth();
  const [menuActive, setMenuActive] = React.useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLogout = () => {
    logout();
  };

  const handleAdminLogout = () => {
    adminLogout();
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
        {links.map((link, index) => {
          if (link.text === "Login" && isUserLogin && !isAdminLogin) {
            return (
              <Link to="/" key={index} onClick={handleLogout}>
                Logout
              </Link>
            );
          } else if (link.text === "Login" && !isUserLogin && isAdminLogin) {
            return (
              <Link to="/" key={index} onClick={handleAdminLogout}>
                Logout
              </Link>
            );
          } else if (
            link.text === "Create Account" &&
            isUserLogin &&
            !isAdminLogin
          ) {
            return (
              <Link to="/dashboard" key={index}>
                Dashboard
              </Link>
            );
          } else if (
            link.text === "Create Account" &&
            !isUserLogin &&
            isAdminLogin
          ) {
            return (
              <Link to="/admin-dashboard" key={index}>
                Dashboard
              </Link>
            );
          } else {
            return (
              <Link to={link.href} key={index}>
                {link.text}
              </Link>
            );
          }
        })}
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
