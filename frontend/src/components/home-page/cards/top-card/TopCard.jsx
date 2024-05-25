// TopCard.jsx
import "../card-styles.css";

const TopCard = () => {
  return (
    <header id="features" className="wrapper top-card">
      <p style={{ fontSize: "30px" }}>
        Master Your Skills with Interactive Learning
      </p>
      <button
        type="button"
        className="btn btn-login"
        style={{ width: "150px", float: "left", marginTop: "30px" }}
      >
        Start Journey
      </button>
    </header>
  );
};

export default TopCard;
