import React from "react";
import "./tagline-card-style.css";

const TaglineCard = ({ title }) => {
  return (
    <div className="about-card">
      <div className="about-content">
        <h2 className="tagline-title">{title}</h2>
      </div>
    </div>
  );
};

export default TaglineCard;
