import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./form-styles.css";

const CreateBasicQuestion = () => {
  const navigate = useNavigate();
  const [paragraph, setParagraph] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleChange = (e) => {
    setParagraph(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8888/quiz/basic`, {
        questionText: paragraph,
        answers: {
          a: optionA,
          b: optionB,
          c: optionC,
          d: optionD,
        },
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

          <h3>Option a</h3>
          <div className="input-box">
            <div className="input-fields">
              <input
                value={optionA}
                onChange={(e) => setOptionA(e.target.value)}
                placeholder="Enter option (a)   "
                required
              ></input>
            </div>
          </div>

          <h3>Option b</h3>
          <div className="input-box">
            <div className="input-fields">
              <input
                value={optionB}
                onChange={(e) => setOptionB(e.target.value)}
                placeholder="Enter option (b)"
                required
              ></input>
            </div>
          </div>

          <h3>Option c</h3>
          <div className="input-box">
            <div className="input-fields">
              <input
                value={optionC}
                onChange={(e) => setOptionC(e.target.value)}
                placeholder="Enter option (c)"
                required
              ></input>
            </div>
          </div>

          <h3>Option d</h3>
          <div className="input-box">
            <div className="input-fields">
              <input
                value={optionD}
                onChange={(e) => setOptionD(e.target.value)}
                placeholder="Enter option (d)"
                required
              ></input>
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

export default CreateBasicQuestion;
