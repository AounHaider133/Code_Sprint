// EditBasicQuiz.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const EditBasicQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState({ a: "", b: "", c: "", d: "" });
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/quiz/basic/${id}`
        );
        const quiz = response.data;
        setQuestionText(quiz.questionText);
        setAnswers(quiz.answers);
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
    if (name in answers) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [name]: value,
      }));
    } else {
      setQuestionText(value);
    }
  };

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8888/quiz/basic/${id}`, {
        questionText,
        answers,
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
              <label>Option A</label>
              <input
                type="text"
                name="a"
                value={answers.a}
                onChange={handleChange}
                required
              />
              <label>Option B</label>
              <input
                type="text"
                name="b"
                value={answers.b}
                onChange={handleChange}
                required
              />
              <label>Option C</label>
              <input
                type="text"
                name="c"
                value={answers.c}
                onChange={handleChange}
                required
              />
              <label>Option D</label>
              <input
                type="text"
                name="d"
                value={answers.d}
                onChange={handleChange}
                required
              />
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

export default EditBasicQuiz;
