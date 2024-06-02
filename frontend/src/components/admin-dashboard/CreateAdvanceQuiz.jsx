import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const CreateAdvanceQuiz = () => {
  const navigate = useNavigate();
  const [questionText, setQuestionText] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleChange = (e) => {
    setQuestionText(e.target.value);
  };

  const handleAddAnswer = () => {
    setCorrectAnswers([...correctAnswers, ""]);
  };

  const handleAnswerChange = (index, e) => {
    const updatedAnswers = [...correctAnswers];
    updatedAnswers[index] = e.target.value;
    setCorrectAnswers(updatedAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8888/quiz/advance`, {
        questionText: questionText,
        correctAnswers: correctAnswers,
      });
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error adding question:", error);
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
                value={questionText}
                onChange={handleChange}
                placeholder="Enter question"
                required
              ></textarea>
            </div>
          </div>

          <h3>Correct Answers</h3>
          <div className="input-box">
            <div className="input-fields">
              {correctAnswers.map((answer, index) => (
                <div key={index}>
                  <input
                    value={answer}
                    onChange={(e) => handleAnswerChange(index, e)}
                    placeholder={`Enter correct answer ${index + 1}`}
                    required
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddAnswer}>
                Add Answer
              </button>
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

export default CreateAdvanceQuiz;
