// AnimatedText.jsx
import "./animated-text-style.css";

const AnimatedText = ({ text }) => {
  return (
    <div className="HomeText" style={{ marginTop: 85, marginBottom: 30 }}>
      <p className="text">{text}</p>
    </div>
  );
};

export default AnimatedText;
