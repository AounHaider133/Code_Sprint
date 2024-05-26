import { Link } from "react-router-dom";
import "./signup-styles.css";

const CreateAccount = () => {
  return (
    <>
      <div className="con1">
        <div className="wrapper-r">
          <form name="signUp">
            <h1>Create Account</h1>
            <div className="input-box">
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  name="name"
                  autoComplete="additional-name"
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
                />
                <i className="bx bxs-envelope"></i>
              </div>
              <div className="input-field">
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                  name="phoneNumber"
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
                />
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  name="confirmPassword"
                />
                <i className="bx bxs-lock-alt"></i>
              </div>
            </div>

            <label>
              <input type="checkbox" name="checkbox" />I confirm that all
              information I have provided for registration is accurate and
              complete to the best of my knowledge.
            </label>

            <button type="button" className="btn">
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
      </div>
    </>
  );
};

export default CreateAccount;
