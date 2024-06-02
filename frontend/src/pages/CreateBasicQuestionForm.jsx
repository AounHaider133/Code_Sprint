import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import CreateBasicQuestion from "../components/admin-dashboard/CreateBasicQuestion";

const CreatePara = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <CreateBasicQuestion />
    </>
  );
};

export default CreatePara;
