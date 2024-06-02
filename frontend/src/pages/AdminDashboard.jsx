// AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import {
  fetchBasicQuiz,
  fetchIntermediateQuiz,
  fetchAdvanceQuiz,
  fetchBasicTyping,
  fetchIntermediateTyping,
  fetchAdvanceTyping,
} from "../api";
import { links, address, description, socialMedia } from "../data";
import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import QuestionTable from "../components/admin-dashboard/QuestionTable";
import AboutCard from "../components/admin-dashboard/AboutCard";
import TaglineCard from "../components/admin-dashboard/TaglineCard";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [basicQuestions, setBasicQuestions] = useState([]);
  const [intermediateQuestions, setIntermediateQuestions] = useState([]);
  const [advanceQuestions, setAdvanceQuestions] = useState([]);
  const [basicTyping, setBasicTyping] = useState([]);
  const [intermediateTyping, setIntermediateTyping] = useState([]);
  const [advanceTyping, setAdvanceTyping] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBasicQuiz()
      .then((response) => setBasicQuestions(response.data))
      .catch((error) =>
        console.error("Error fetching basic quiz data:", error)
      );

    fetchIntermediateQuiz()
      .then((response) => setIntermediateQuestions(response.data))
      .catch((error) =>
        console.error("Error fetching intermediate quiz data:", error)
      );

    fetchAdvanceQuiz()
      .then((response) => setAdvanceQuestions(response.data))
      .catch((error) =>
        console.error("Error fetching advance quiz data:", error)
      );

    fetchBasicTyping()
      .then((response) => setBasicTyping(response.data))
      .catch((error) =>
        console.error("Error while fetching basic typing data:", error)
      );

    fetchIntermediateTyping()
      .then((response) => setIntermediateTyping(response.data))
      .catch((error) =>
        console.error("Error while fetching intermediate typing data:", error)
      );

    fetchAdvanceTyping()
      .then((response) => setAdvanceTyping(response.data))
      .catch((error) =>
        console.error("Error while fetching advance typing data:", error)
      );
  }, []);

  const handleAddParagraph = (level) => {
    navigate(`/admin-dashboard/add-para/${level}`);
  };

  const handleEditQuiz = (id, level) => {
    navigate(`/admin-dashboard/quiz/edit/${id}/${level}`);
  };

  const handleAddBasicQuiz = () => {
    navigate("/admin-dashboard/add-quiz/basic");
  };

  return (
    <>
      <Background />
      <NavBar links={links} />
      {/* Typing Test */}
      <TaglineCard title="Typing Test" />
      <AboutCard
        title="Basic Level"
        buttonText="Add Paragraph"
        clickHandler={() => handleAddParagraph("basic")}
      />
      <QuestionTable
        questions={basicTyping}
        caption="Paragraph"
        genre="basic"
      />

      <AboutCard
        title="Intermediate Level"
        buttonText="Add Paragraph"
        clickHandler={() => handleAddParagraph("intermediate")}
      />
      <QuestionTable
        questions={intermediateTyping}
        caption="Paragraph"
        genre="intermediate"
      />

      <AboutCard
        title="Advance Level"
        buttonText="Add Paragraph"
        clickHandler={() => handleAddParagraph("advance")}
      />
      <QuestionTable
        questions={advanceTyping}
        caption="Paragraph"
        genre="advance"
      />

      {/* Programming Test */}
      <TaglineCard title="Programming Test" />
      <AboutCard
        title="Basic Level"
        buttonText="Add Question"
        clickHandler={() => handleAddBasicQuiz()}
      />
      <QuestionTable
        questions={basicQuestions}
        caption="Question"
        genre="basic"
      />

      <AboutCard
        title="Intermediate Level"
        buttonText="Add Question"
        clickHandler={() => navigate("/admin-dashboard/add-quiz/intermediate")}
      />
      <QuestionTable
        questions={intermediateQuestions}
        caption="Question"
        genre="intermediate"
      />

      <AboutCard
        title="Advance Level"
        buttonText="Add Question"
        clickHandler={() => navigate("/admin-dashboard/add-quiz/advance")}
      />
      <QuestionTable
        questions={advanceQuestions}
        caption="Question"
        genre="advance"
      />

      <Footer
        description={description}
        address={address}
        links={links}
        socialMedia={socialMedia}
      />
    </>
  );
};

export default AdminDashboard;
