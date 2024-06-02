// EditBasicQuiz.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const EditIntermediateQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questionText, setQuestionText] = useState("");

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/quiz/intermediate/${id}`
        );
        const quiz = response.data;
        setQuestionText(quiz.questionText);
        setCorrectAnswer(quiz.correctAnswer);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionText(value);
  };

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8888/quiz/intermediate/${id}`, {
        questionText,
        correctAnswer,
      });
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error updating quiz:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="con1">
      <div className="wrappers">
        <form onSubmit={handleSubmit}>
          <h1>Edit Basic Quiz</h1>
          <div className="input-box">
            <div className="input-fields">
              <label>Question Text</label>
              <textarea
                name="questionText"
                value={questionText}
                onChange={handleChange}
                placeholder="Edit your question here"
                required
              ></textarea>
              <label>Correct Answer</label>
              <input
                type="text"
                value={correctAnswer}
                onChange={handleCorrectAnswerChange}
                required
              />
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

export default EditIntermediateQuiz;
