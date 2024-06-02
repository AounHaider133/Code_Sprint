import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const CreateIntermediateQuiz = () => {
  const navigate = useNavigate();
  const [paragraph, setParagraph] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8888/quiz/intermediate`, {
        questionText: paragraph,
        correctAnswer: correctAnswer,
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
          <h1>Create Question</h1>
          <div className="input-box">
            <div className="input-fields">
              <textarea
                value={paragraph}
                onChange={handleChange}
                placeholder="Enter question"
                required
              ></textarea>
            </div>
          </div>

          <h3>Correct Answer</h3>
          <div className="input-box">
            <div className="input-fields">
              <input
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                placeholder="Enter correct answer"
                required
              ></input>
            </div>
          </div>

          <button type="submit" className="btn btn-submit">
            Add Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateIntermediateQuiz;
