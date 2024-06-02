import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./basic-level-quiz-style.css";
import ScoreBoard from "./ScoreBoard";

const BasicLevel = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timer, setTimer] = useState(10);
  const [lineWidth, setLineWidth] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [progressStartValue, setProgressStartValue] = useState(0);

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const counterRef = useRef(null);
  const counterLineRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    startTimer(10);
    startLine();
    return () => {
      clearInterval(counterRef.current);
      clearInterval(counterLineRef.current);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      moveToNextQuestion();
    }
  }, [timer]);

  useEffect(() => {
    if (showScore) {
      showScoreProgress(correctAnswers, questions.length);
      updateQuizProgress(); // Call the function to update quiz progress
    }
  }, [showScore]);

  const startTimer = (time) => {
    clearInterval(counterRef.current);
    setTimer(time);
    counterRef.current = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);
  };

  const startLine = () => {
    clearInterval(counterLineRef.current);
    setLineWidth(0);
    counterLineRef.current = setInterval(() => {
      setLineWidth((prevLineWidth) => {
        if (prevLineWidth >= 100) {
          clearInterval(counterLineRef.current);
          return 100;
        }
        return prevLineWidth + 0.181;
      });
    }, 20);
  };

  const checkAnswer = (question, answer) => {
    return question.correctAnswer === answer;
  };

  const optionSelected = (answer) => {
    clearInterval(counterRef.current);
    clearInterval(counterLineRef.current);
    setSelectedOption(answer);
    const question = questions[questionIndex];

    if (checkAnswer(question, answer)) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    // Move to next question after a short delay to show the user's selection
    setTimeout(moveToNextQuestion, 1000);
  };

  const moveToNextQuestion = () => {
    if (questions.length > questionIndex + 1) {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
      setSelectedOption(null);
      startTimer(10);
      startLine();
    } else {
      setShowScore(true);
      clearInterval(counterRef.current);
      clearInterval(counterLineRef.current);
    }
  };

  const showScoreProgress = (correctAnswers, allQuestions) => {
    const progressEndValue = Math.round((correctAnswers / allQuestions) * 100);
    const speed = 20;

    if (progressRef.current) {
      clearInterval(progressRef.current);
    }

    progressRef.current = setInterval(() => {
      setProgressStartValue((prevProgressStartValue) => {
        const newValue = prevProgressStartValue + 1;
        if (newValue >= progressEndValue) {
          clearInterval(progressRef.current);
          return progressEndValue;
        }
        return newValue;
      });
    }, speed);
  };

  const updateQuizProgress = async () => {
    const progressValue = Math.round((correctAnswers / questions.length) * 100);

    try {
      const response = await fetch(
        `http://localhost:8888/api/users/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quiz1_progress: progressValue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user progress");
      }
      const d = await response.json();
      login(d.user);
      console.log("User progress updated successfully");
    } catch (error) {
      console.error("Error updating user progress:", error);
    }
  };

  return (
    <div>
      <div className={`quiz-box card ${showScore ? "" : "active"}`}>
        <header className="card-header">
          <span>Quiz</span>
          <div className="time">
            <div className="time-text">Remaining Time</div>
            <div className="second">{timer}</div>
          </div>
          <div className="time-line" style={{ width: `${lineWidth}%` }}></div>
        </header>
        <section className="card-body">
          {questions && !showScore && (
            <div>
              <div className="question-text">
                <span>{questions[questionIndex].questionText}</span>
              </div>
              <div className="option-list">
                {Object.keys(questions[questionIndex].answers).map(
                  (answer, index) => (
                    <div
                      key={index}
                      className={`option ${
                        selectedOption === answer ? "selected" : ""
                      }`}
                      onClick={() => optionSelected(answer)}
                      style={{
                        backgroundColor:
                          selectedOption === answer ? "#694bf0" : "",
                      }}
                    >
                      <span>
                        <b>{answer}</b>:{" "}
                        {questions[questionIndex].answers[answer]}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </section>
        <footer className="card-footer">
          <div className="badge bg-secondary">
            {questionIndex + 1} / {questions.length}
          </div>
          {questions && !showScore && questions.length > questionIndex + 1 && (
            <button
              className="btn btn-primary next"
              onClick={moveToNextQuestion}
            >
              Next question
            </button>
          )}
        </footer>
      </div>
      {showScore && (
        <ScoreBoard
          correctAnswers={correctAnswers}
          questionsLength={questions.length}
          progressStartValue={progressStartValue}
          handleTryAgain={() => {
            setQuestionIndex(0);
            setCorrectAnswers(0);
            setTimer(10);
            setLineWidth(0);
            setShowScore(false);
            setProgressStartValue(0);
            setSelectedOption(null);
            startTimer(10);
            startLine();
          }}
          handleQuit={() => navigate("/dashboard")}
        />
      )}
    </div>
  );
};

export default BasicLevel;
