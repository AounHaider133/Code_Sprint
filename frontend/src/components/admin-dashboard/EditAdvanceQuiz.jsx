import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const EditAdvanceQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questionText, setQuestionText] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/quiz/advance/${id}`
        );
        const quiz = response.data;
        setQuestionText(quiz.questionText);
        setCorrectAnswers(quiz.correctAnswers);
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

  const handleCorrectAnswerChange = (index, e) => {
    const updatedAnswers = [...correctAnswers];
    updatedAnswers[index] = e.target.value;
    setCorrectAnswers(updatedAnswers);
  };

  const handleAddAnswer = () => {
    setCorrectAnswers([...correctAnswers, ""]);
  };

  const handleRemoveAnswer = (index) => {
    const updatedAnswers = correctAnswers.filter((_, i) => i !== index);
    setCorrectAnswers(updatedAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8888/quiz/advance/${id}`, {
        questionText,
        correctAnswers,
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
              <label>Correct Answers</label>
              {correctAnswers.map((answer, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => handleCorrectAnswerChange(index, e)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveAnswer(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddAnswer}>
                Add Answer
              </button>
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

export default EditAdvanceQuiz;
