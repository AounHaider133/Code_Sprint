import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import CreateIntermediateQuiz from "../components/admin-dashboard/CreateIntermediateQuiz";

const CreatePara = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <CreateIntermediateQuiz />
    </>
  );
};

export default CreatePara;
