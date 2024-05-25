import "../card-styles.css";
import useIntersectionObserver from "./useIntersectionObserver";

const MiddleCard = ({ imgSrc, title, content }) => {
  const [cardRef, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  return (
    <div className={`card ${isVisible ? "visible" : ""}`} ref={cardRef}>
      <div className="card-content">
        <img src={imgSrc} alt="CodeSprint.img" />
        <h3>{title}</h3>
        <p style={{ textAlign: "justify" }}>{content}</p>
      </div>
    </div>
  );
};

export default MiddleCard;
