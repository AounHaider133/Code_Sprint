import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import CreateAdvanceQuiz from "../components/admin-dashboard/CreateAdvanceQuiz";

const CreatePara = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <CreateAdvanceQuiz />
    </>
  );
};

export default CreatePara;
