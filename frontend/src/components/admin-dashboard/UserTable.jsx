import { useState, useEffect } from "react";
import "./question-table-style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredUsers = users.filter(
      (user) =>
        !(user.username === "aounhaider" && user.password === "fallacies")
    );
    setData(filteredUsers);
  }, [users]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8888/api/users/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log("Error deleting record:", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin-dashboard/users/edit/${id}`);
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
            <th>User</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="question-cell">{item.username}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(item._id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
