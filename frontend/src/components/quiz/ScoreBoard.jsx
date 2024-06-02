import { useEffect } from "react";

const ScoreBoard = ({
  correctAnswers,
  questionsLength,
  progressStartValue,
  handleTryAgain,
  handleQuit,
}) => {
  useEffect(() => {
    const circularProgress = document.querySelector(".circular-progress");
    const progressValue = document.querySelector(".progress-value");

    if (circularProgress && progressValue) {
      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#102C57 ${
        progressStartValue * 3.6
      }deg, rgba(255, 255, 255, 0.1) ${progressStartValue * 3.6}deg)`;
    }
  }, [progressStartValue]);
  return (
    <div className="score-box card active">
      <h2>Quiz Result</h2>
      <div className="percentage-container">
        <div className="circular-progress">
          <span className="progress-value">{progressStartValue}%</span>
        </div>
        <span className="score-text">
          Your score is {correctAnswers} out of {questionsLength}
        </span>
      </div>
      <div className="buttons">
        <button className="tryagain-btn" onClick={handleTryAgain}>
          Try Again
        </button>
        <button className="quit-btn" onClick={handleQuit}>
          Quit
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
