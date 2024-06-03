// CreateParagraph.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const CreateParagraph = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const [paragraph, setParagraph] = useState("");

  const handleChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8888/typing/${level}`, {
        text: paragraph,
      });
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error adding paragraph:", error);
    }
  };

  return (
    <div className="con1">
      <div className="wrappers">
        <form onSubmit={handleSubmit}>
          <h1>Create Paragraph</h1>
          <div className="input-box">
            <div className="input-fields">
              <textarea
                value={paragraph}
                onChange={handleChange}
                placeholder="Enter your paragraph here"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-submit">
            Add Paragraph
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateParagraph;
