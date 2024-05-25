import "../card-styles.css";

const BottomCard = ({ id, title, imgSrc, alt, subTitle, description }) => {
  return (
    <section id={id} className="wrapper">
      <h2 style={{ color: "#ffd700" }}>{title}</h2>
      <div className="feature">
        <img src={imgSrc} alt={alt} />
        <h3>{subTitle}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default BottomCard;
