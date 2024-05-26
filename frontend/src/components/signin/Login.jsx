import "./login-styles.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="con1">
      <div className="wrappers">
        <form name="signin">
          <h1>Login</h1>
          <div className="input-box">
            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                autoComplete="additional-name"
              />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-fields">
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
              />
              <i className="bx bxs-lock-alt"></i>
            </div>
          </div>

          <label>
            <input type="checkbox" name="checkbox" />
            Remember me
          </label>

          <button type="button" className="btn btn-login">
            Login
          </button>
          <div className="signup-link" style={{ marginTop: 20 }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#008DDA" }}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
