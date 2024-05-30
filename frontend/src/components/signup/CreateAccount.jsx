import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup-styles.css";
import Modal from "../modal/Modal"; // Import the Modal component
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // State to hold the modal message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setModalMessage("Password must be at least 8 characters long.");
      setShowModal(true);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setModalMessage("Passwords do not match.");
      setShowModal(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:8888/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/signin"); // Redirect to sign-in page on successful registration
      } else if (response.status === 409) {
        setModalMessage(
          "An account with this email or username already exists."
        );
        setShowModal(true); // Show duplicate user error
      } else {
        console.error("Failed to create account");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="con1">
      <div className="wrapper-r">
        <form name="signUp" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                placeholder="Full Name"
                required
                name="fullName"
                autoComplete="additional-name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                autoComplete="additional-name"
                value={formData.username}
                onChange={handleChange}
              />
              <i className="bx bxs-user"></i>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                autoComplete="additional-name"
                value={formData.email}
                onChange={handleChange}
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-field">
              <input
                type="number"
                placeholder="Phone Number"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <i className="bx bxs-phone"></i>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
          </div>

          <label>
            <input type="checkbox" name="checkbox" required />I confirm that all
            information I have provided for registration is accurate and
            complete to the best of my knowledge.
          </label>

          <button type="submit" className="btn">
            Register
          </button>
          <div className="signup-link" style={{ marginTop: 20 }}>
            Already have an account?{" "}
            <Link to="/signin" style={{ color: "#008DDA" }}>
              Sign In
            </Link>
          </div>
        </form>
      </div>

      {showModal && (
        <Modal
          title="Error"
          text={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CreateAccount;
