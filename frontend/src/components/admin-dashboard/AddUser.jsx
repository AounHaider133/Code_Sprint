import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api";
import "../signup/signup-styles.css";
import Modal from "../modal/Modal";

const AddUser = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
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
      const response = await createUser(formData);

      if (response.status === 201) {
        navigate("/admin-dashboard");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisibility) => !prevVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="con1">
      <div className="wrapper-r">
        <form name="addUser" onSubmit={handleSubmit}>
          <h1>Add User</h1>
          <div className="input-boxx">
            <div className="input-fieldd">
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
            <div className="input-fieldd">
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

          <div className="input-boxx">
            <div className="input-fieldd">
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
            <div className="input-fieldd">
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

          <div className="input-boxx">
            <div className="input-fieldd">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <i className="bx bxs-lock-alt"></i>
              <i
                className={
                  passwordVisible
                    ? "bx bx-show toggle-password"
                    : "bx bx-hide toggle-password"
                }
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <div className="input-fieldd">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <i className="bx bxs-lock-alt"></i>
              <i
                className={
                  confirmPasswordVisible
                    ? "bx bx-show toggle-password"
                    : "bx bx-hide toggle-password"
                }
                onClick={toggleConfirmPasswordVisibility}
              ></i>
            </div>
          </div>

          <button type="submit" className="btn">
            Add User
          </button>
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

export default AddUser;
