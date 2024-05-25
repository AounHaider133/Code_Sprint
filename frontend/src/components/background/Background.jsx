// Background.js
import { useEffect } from "react";
import "./background.css";

const Background = () => {
  useEffect(() => {
    const container = document.querySelector(".container");

    for (let i = 0; i < 100; i++) {
      const circleContainer = document.createElement("div");
      circleContainer.classList.add("circle-container");

      const circle = document.createElement("div");
      circle.classList.add("circle");

      circleContainer.appendChild(circle);
      container.appendChild(circleContainer);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="bg"></div>
        <div className="star-field">
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
      </div>
    </>
  );
};

export default Background;
