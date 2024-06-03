import "./about-card-style.css";

const AboutCard = ({ title, buttonText, clickHandler }) => {
  return (
    <div className="carddd">
      <h2>{title}</h2>
      <button className="add-button" onClick={clickHandler}>
        {buttonText}
      </button>
    </div>
  );
};

export default AboutCard;
