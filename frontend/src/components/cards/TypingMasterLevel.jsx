import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import "./typing-master-style.css";

const TypingMasterLevel = ({
  basicSentences,
  intermediateSentences,
  advancedSentences,
}) => {
  const { id } = useParams();
  const levelNo = parseInt(id);
  const { user, login } = useAuth();
  const inputRef = useRef(null);

  let initialTime;
  if (levelNo === 1) {
    initialTime = 30;
  } else if (levelNo === 2) {
    initialTime = 60;
  } else if (levelNo === 3) {
    initialTime = 120;
  }

  const [sentences, setSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState("");
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [charIndex, setCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const level = ["basic", "intermediate", "advanced"][levelNo - 1];
    startGame(level);
  }, [levelNo]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      loadNextSentence();
    }
  }, [timeLeft]);

  useEffect(() => {
    if (isTyping && !timer) {
      const interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
      setTimer(interval);
    }
    return () => clearInterval(timer);
  }, [isTyping]);

  const startGame = (level) => {
    let selectedSentences;
    switch (level) {
      case "basic":
        selectedSentences = basicSentences;
        break;
      case "intermediate":
        selectedSentences = intermediateSentences;
        break;
      case "advanced":
        selectedSentences = advancedSentences;
        break;
      default:
        selectedSentences = basicSentences;
        break;
    }
    setSentences(selectedSentences);
    resetGame(selectedSentences);
  };

  const resetGame = (sentences) => {
    loadParagraph(sentences);
    clearInterval(timer);
    setTimeLeft(initialTime);
    setCharIndex(0);
    setMistakes(0);
    setIsTyping(false);
    setTimer(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    updateDisplay(initialTime, 0, 0, 0);
  };

  const loadParagraph = (sentences) => {
    const ranIndex = Math.floor(Math.random() * sentences.length);
    setCurrentSentence(sentences[ranIndex]);
    const typingTextElement = document.querySelector(".typing-text p");
    typingTextElement.innerHTML = sentences[ranIndex]
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");
    typingTextElement.querySelector("span").classList.add("active");
  };

  const loadNextSentence = () => {
    resetGame(sentences);
  };

  const updateDisplay = (time, wpm, mistakes, cpm) => {
    document.querySelector(".time span b").innerText = time;
    document.querySelector(".wpm span").innerText = wpm;
    document.querySelector(".mistake span").innerText = mistakes;
    document.querySelector(".cpm span").innerText = cpm;
  };

  const initTyping = (e) => {
    const characters = document.querySelectorAll(".typing-text span");
    const typedChar = e.target.value[e.target.value.length - 1];

    if (!isTyping) {
      setIsTyping(true);
    }

    if (charIndex >= characters.length || timeLeft <= 0) {
      clearInterval(timer);
      setIsTyping(false);
      inputRef.current.value = "";
      return;
    }

    if (e.key === "Backspace") {
      e.preventDefault();
      if (charIndex > 0) {
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
        characters.forEach((span) => span.classList.remove("active"));
        characters[charIndex - 1].classList.add("active");
      }
      return;
    }

    if (typedChar == null) {
      if (charIndex > 0) {
        const prevCharIndex = charIndex - 1;
        setCharIndex(prevCharIndex);
        if (characters[prevCharIndex].classList.contains("incorrect")) {
          setMistakes(mistakes - 1);
        }
        characters[prevCharIndex].classList.remove("correct", "incorrect");
      }
    } else {
      if (characters[charIndex].innerText === typedChar) {
        characters[charIndex].classList.add("correct");
      } else {
        setMistakes(mistakes + 1);
        characters[charIndex].classList.add("incorrect");
      }
    }

    characters.forEach((span) => span.classList.remove("active"));
    setCharIndex(charIndex + 1);
    if (charIndex + 1 < characters.length) {
      characters[charIndex + 1].classList.add("active");
    }

    const wpm = Math.round(((charIndex - mistakes) / 5 / (60 - timeLeft)) * 60);
    const validWpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

    updateDisplay(timeLeft, validWpm, mistakes, charIndex - mistakes);
  };

  const handleDocumentClick = (event) => {
    if (!inputRef.current.contains(event.target)) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleTryAgain = async () => {
    const correctChars = charIndex - mistakes;
    const progressKey = `typing${levelNo}_progress`;
    const newProgress = correctChars;
    const newHitPoints = user.hit + correctChars;

    try {
      const response = await fetch(
        `http://localhost:8888/api/users/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            [progressKey]: newProgress,
            hit: newHitPoints,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user progress");
      }
      const d = await response.json();
      login(d.user);
      resetGame(sentences);
    } catch (error) {
      console.error("Error updating user progress:", error);
    }
  };

  return (
    <div className="container">
      <div className="wrappert">
        <div className="level-selection content">
          <button
            className={`lvl-btn ${levelNo === 1 ? "clicked" : ""}`}
            disabled
          >
            Basic
          </button>
          <button
            className={`lvl-btn ${levelNo === 2 ? "clicked" : ""}`}
            disabled
          >
            Intermediate
          </button>
          <button
            className={`lvl-btn ${levelNo === 3 ? "clicked" : ""}`}
            disabled
          >
            Advanced
          </button>
        </div>
        <input
          type="text"
          className="input-field"
          ref={inputRef}
          onInput={initTyping}
          placeholder="Start typing..."
        />
        <div className="content-box">
          <div className="typing-text">
            <p id="paragraph"></p>
          </div>
          <div className="content">
            <ul className="result-details">
              <li className="time">
                <p>Time Left:</p>
                <span>
                  <b>{timeLeft}</b>s
                </span>
              </li>
              <li className="mistake">
                <p>Mistakes:</p>
                <span>{mistakes}</span>
              </li>
              <li className="wpm">
                <p>WPM:</p>
                <span>
                  {isNaN(
                    Math.round(
                      ((charIndex - mistakes) / 5 / (60 - timeLeft)) * 60
                    )
                  )
                    ? 0
                    : Math.round(
                        ((charIndex - mistakes) / 5 / (60 - timeLeft)) * 60
                      )}
                </span>
              </li>
              <li className="cpm">
                <p>CPM:</p>
                <span>{charIndex - mistakes}</span>
              </li>
            </ul>
            <button onClick={handleTryAgain}>Try Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingMasterLevel;
