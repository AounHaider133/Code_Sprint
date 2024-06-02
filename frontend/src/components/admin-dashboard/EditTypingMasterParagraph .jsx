// EditTypingMasterParagraph.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const EditTypingMasterParagraph = () => {
  const { id, level } = useParams();
  const navigate = useNavigate();
  const [paragraph, setParagraph] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParagraph = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/typing/${level}/${id}`
        );
        setParagraph(response.data.text);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching paragraph data:", error);
        setLoading(false);
      }
    };

    fetchParagraph();
  }, [id, level]);

  const handleChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8888/typing/${level}/${id}`, {
        text: paragraph,
      });
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error updating paragraph:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="con1">
      <div className="wrappers">
        <form onSubmit={handleSubmit}>
          <h1>Edit Paragraph</h1>
          <div className="input-box">
            <div className="input-fields">
              <textarea
                value={paragraph}
                onChange={handleChange}
                placeholder="Edit your paragraph here"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTypingMasterParagraph;
