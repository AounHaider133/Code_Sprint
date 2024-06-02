import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import EditAdvanceQuiz from "../components/admin-dashboard/EditAdvanceQuiz";

const EditAdvanceQuizForm = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <EditAdvanceQuiz />
    </>
  );
};

export default EditAdvanceQuizForm;
