import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import EditBasicQuiz from "../components/admin-dashboard/EditBasicQuiz";

const EditBasicQuizForm = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <EditBasicQuiz />
    </>
  );
};

export default EditBasicQuizForm;
