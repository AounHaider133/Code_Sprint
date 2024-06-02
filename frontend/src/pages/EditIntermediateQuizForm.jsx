import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import EditIntermediateQuiz from "../components/admin-dashboard/EditIntermediateQuiz";

const EditIntermediateQuizForm = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <EditIntermediateQuiz />
    </>
  );
};

export default EditIntermediateQuizForm;
