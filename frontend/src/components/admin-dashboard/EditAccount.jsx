import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserById, updateUser } from "../../api";
import "../signup/signup-styles.css";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";

const EditAccount = () => {
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
  const { id } = useParams();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchUserById(id);
        const user = response.data;
        setFormData({
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          phone: user.phone,
          password: user.password,
          confirmPassword: user.password,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    getUserData();
  }, [id]);

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
      const updateData = {
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      };

      const response = await updateUser(id, updateData);

      if (response.status === 200) {
        navigate("/admin-dashboard");
      } else {
        console.error("Failed to update user");
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
        <form name="editAccount" onSubmit={handleSubmit}>
          <h1>Edit Account</h1>
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
                className={passwordVisible ? "bx bxs-show" : "bx bxs-hide"}
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer", marginLeft: "10px" }}
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
                  confirmPasswordVisible ? "bx bxs-show" : "bx bxs-hide"
                }
                onClick={toggleConfirmPasswordVisibility}
                style={{ cursor: "pointer", marginLeft: "10px" }}
              ></i>
            </div>
          </div>

          <button type="submit" className="btn">
            Update
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

export default EditAccount;
