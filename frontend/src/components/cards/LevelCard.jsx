// LevelCard Component
import React from "react";
import "./level-card-style.css"; // Assuming this file contains styles for LevelCard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";

const LevelCard = ({ data }) => {
  return (
    <div className="card fade-in">
      <h1>{data.title}</h1>
      <div className="subcard">
        <table>
          <tr>
            <th>Level</th>
            <th>Status</th>
            <th>Progress</th>
            <th style={{ paddingLeft: "70px" }}>Begin</th>
          </tr>
          {data.levels.map((level) => (
            <tr key={level.name}>
              <td>{level.name}</td>
              <td style={{ paddingLeft: "30px" }}>
                <FontAwesomeIcon icon={level.locked ? faLock : faUnlock} />
              </td>
              <td>
                <div className="progress-bar">
                  <span style={{ width: `${level.progress}%` }}></span>
                </div>
              </td>
              <td>
                <button className="start-button">Start</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default LevelCard;
