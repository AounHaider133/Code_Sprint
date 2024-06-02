import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login-styles.css";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
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

    if (!formData.username || !formData.password) {
      setModalMessage("Username and password fields cannot be empty.");
      setShowModal(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:8888/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        const userResponse = await fetch(
          `http://localhost:8888/api/users/${userData.userId}`
        );

        if (userResponse.ok) {
          const fullUserData = await userResponse.json();
          login(fullUserData);
          navigate("/dashboard");
        } else {
          console.error("Failed to fetch user details");
        }
      } else if (response.status === 401) {
        setModalMessage("Invalid username or password.");
        setShowModal(true); // Show error modal
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="con1">
      <div className="wrappers">
        <form name="signin" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <div className="input-fields">
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

            <div className="input-fields">
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
          </div>

          <label>
            <input type="checkbox" name="checkbox" />
            Remember me
          </label>

          <button type="submit" className="btn btn-login">
            Login
          </button>
          <div className="signup-link" style={{ marginTop: 20 }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#008DDA" }}>
              Sign Up
            </Link>
          </div>
          <div className="signup-link" style={{ marginTop: 20 }}>
            Signin as{" "}
            <Link to="/admin-signin" style={{ color: "#008DDA" }}>
              Admin
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

export default Login;
