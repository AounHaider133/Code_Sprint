import "./level-card-style.css";
import LevelCard from "./LevelCard";

const LevelsCard = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map(
        (
          d,
          id // Corrected the order of parameters
        ) => (
          <LevelCard data={d} key={id} />
        )
      )}
    </div>
  );
};

export default LevelsCard;
