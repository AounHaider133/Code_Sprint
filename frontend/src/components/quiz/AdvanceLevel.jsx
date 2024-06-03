import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./advance-level-quiz-style.css";
import { useAuth } from "../../AuthContext";
import ScoreBoard from "./ScoreBoard";

const AdvanceLevel = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timer, setTimer] = useState(20);
  const [lineWidth, setLineWidth] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [progressStartValue, setProgressStartValue] = useState(0);

  const { user, login } = useAuth();
  const counterRef = useRef(null);
  const counterLineRef = useRef(null);
  const progressRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    startTimer(20);
    startLine();
    return () => {
      clearInterval(counterRef.current);
      clearInterval(counterLineRef.current);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer]);

  useEffect(() => {
    if (showScore) {
      showScoreProgress(correctAnswers, questions.length);
      updateQuizProgress();
    }
  }, [showScore]);

  useEffect(() => {
    if (questions[questionIndex]) {
      const initialAnswers = Array(
        questions[questionIndex].correctAnswers.length
      ).fill("");
      setUserAnswers(initialAnswers);
    }
  }, [questionIndex, questions]);

  const startTimer = (time) => {
    clearInterval(counterRef.current);
    setTimer(time);
    counterRef.current = setInterval(() => {
      setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
    }, 1000);
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
            quiz3_progress: progressValue,
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

  const startLine = () => {
    clearInterval(counterLineRef.current);
    setLineWidth(0);
    counterLineRef.current = setInterval(() => {
      setLineWidth((prevLineWidth) => {
        if (prevLineWidth >= 100) {
          clearInterval(counterLineRef.current);
          return 100;
        }
        return prevLineWidth + (0.181 * 10) / 20;
      });
    }, 20);
  };

  const handleNextQuestion = () => {
    if (questions.length > questionIndex + 1) {
      setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
      startTimer(20);
      startLine();
    } else {
      setShowScore(true);
      clearInterval(counterRef.current);
      clearInterval(counterLineRef.current);
    }
  };

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[questionIndex];
    const isCorrect = currentQuestion.correctAnswers.every(
      (answer, index) =>
        answer.trim().toLowerCase() ===
        (userAnswers[index] || "").trim().toLowerCase()
    );

    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    handleNextQuestion();
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

  const parseQuestion = (questionText, correctAnswers) => {
    const parts = questionText.split(/("textbox"|\n| )/g); // Also split by space
    let answerIndex = 0;

    return parts.map((part, index) => {
      if (part === '"textbox"') {
        const maxLength = correctAnswers[answerIndex]
          ? correctAnswers[answerIndex].length
          : 0;
        const inputIndex = answerIndex;
        answerIndex++;
        return (
          <input
            key={index}
            type="text"
            className="form-controls answer-input"
            maxLength={maxLength}
            style={{ width: `${maxLength * 1.5}ch` }}
            autoComplete="off"
            onChange={(e) => handleAnswerChange(inputIndex, e)}
            value={userAnswers[inputIndex] || ""}
          />
        );
      } else if (part === "\n") {
        return <br key={index} />;
      } else if (part === " ") {
        return <span key={index}>&nbsp;</span>; // Preserve spaces
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);

    // Calculate new maxLength and update width style
    const newMaxLength = newAnswers[index].length;
    const newWidth = `${newMaxLength * 1.5}ch`;
    const inputs = document.getElementsByClassName("answer-input");
    inputs[index].style.width = newWidth;
  };
  const handleTryAgain = () => {
    setQuestionIndex(0);
    setCorrectAnswers(0);
    setShowScore(false);
    startTimer(20);
    startLine();
  };

  const handleQuit = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className={`quiz-boxt cardt ${showScore ? "" : "active"}`}>
        <header className="card-header">
          <span>Quiz</span>
          <div className="time">
            <div className="time-text">Remaining Time</div>
            <div className="second">{timer}</div>
          </div>
          <div className="time-line" style={{ width: `${lineWidth}%` }}></div>
        </header>

        <section className="card-body">
          <div className="question-text">
            {questions[questionIndex] &&
              parseQuestion(
                questions[questionIndex].questionText,
                questions[questionIndex].correctAnswers
              )}
          </div>
        </section>

        <footer className="card-footer">
          <div className="badge bg-secondary">
            {questionIndex + 1} / {questions.length}
          </div>
          {!showScore && (
            <button
              className="btn btn-primary next"
              onClick={handleAnswerSubmit}
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
          handleTryAgain={handleTryAgain}
          handleQuit={handleQuit}
        />
      )}
    </div>
  );
};

export default AdvanceLevel;
