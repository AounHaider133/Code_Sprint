// LevelCard Component
import { useState } from "react";
import "./level-card-style.css"; // Assuming this file contains styles for LevelCard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";

const LevelCard = ({ data }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleStartButtonClick = (e, link) => {
    e.preventDefault();
    navigate(link);
  };

  return (
    <>
      <div className="card fade-in">
        <h1>{data.title}</h1>
        <div className="subcard">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Status</th>
                <th>Progress</th>
                <th style={{ paddingLeft: "70px" }}>Begin</th>
              </tr>
            </thead>
            <tbody>
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
                    <button
                      className="start-button"
                      onClick={(e) => {
                        if (level.locked) {
                          setModalMessage(
                            "Please pass the previous test to exceed!"
                          );
                          setShowModal(true);
                        } else {
                          handleStartButtonClick(e, level.link);
                        }
                      }}
                    >
                      Start
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModal && (
        <Modal
          title="Error"
          text={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default LevelCard;
