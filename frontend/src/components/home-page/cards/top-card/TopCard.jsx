// TopCard.jsx
import "../card-styles.css";
import { useNavigate } from "react-router-dom";

const TopCard = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/signin");
  };

  return (
    <header id="features" className="wrapper top-card">
      <p style={{ fontSize: "30px" }}>
        Master Your Skills with Interactive Learning
      </p>
      <button
        type="button"
        className="btn btn-login"
        onClick={clickHandler}
        style={{ width: "150px", float: "left", marginTop: "30px" }}
      >
        Start Journey
      </button>
    </header>
  );
};

export default TopCard;
