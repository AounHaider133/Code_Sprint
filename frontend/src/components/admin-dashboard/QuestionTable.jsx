// QuestionTable.jsx
import React, { useState, useEffect } from "react";
import "./question-table-style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QuestionTable = ({ questions, caption, genre }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(questions);
  }, [questions]);

  const handleDelete = async (id, type) => {
    try {
      await axios.delete(`http://localhost:8888/${type}/${genre}/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log("Error deleting record:", err);
    }
  };

  const handleEdit = (id, level) => {
    navigate(`/admin-dashboard/${level}/edit/${id}/${genre}`);
  };

  return (
    <div className="table-wrapper">
      <table
        className="glassmorphism-table"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>{caption}</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="question-cell">
                {item.questionText || item.text}
              </td>
              <td>
                {item.questionText && (
                  <>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(item._id, "quiz")}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item._id, "quiz")}
                    >
                      Delete
                    </button>
                  </>
                )}
                {item.text && (
                  <>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(item._id, "typing")}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item._id, "typing")}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionTable;
