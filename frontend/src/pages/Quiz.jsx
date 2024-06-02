import React, { useState, useEffect } from "react";
import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import BasicLevel from "../components/quiz/BasicLevel";
import IntermediateLevel from "../components/quiz/IntermediateLevel";
import AdvanceLevel from "../components/quiz/AdvanceLevel";
import { links } from "../data";
import { useParams } from "react-router-dom";
import {
  fetchBasicQuiz,
  fetchIntermediateQuiz,
  fetchAdvanceQuiz,
} from "../api";

const Quiz = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        let response;
        if (id === "1") {
          response = await fetchBasicQuiz();
        } else if (id === "2") {
          response = await fetchIntermediateQuiz();
        } else if (id === "3") {
          response = await fetchAdvanceQuiz();
        }
        setQuestions(response.data);
      } catch (error) {
        console.error("Error while fetching quiz questions:", error);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Background />
      <NavBar links={links} />
      {id === "1" && <BasicLevel questions={questions} />}
      {id === "2" && <IntermediateLevel questions={questions} />}
      {id === "3" && <AdvanceLevel questions={questions} />}
    </>
  );
};

export default Quiz;
