import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";

import CreateParagraph from "../components/admin-dashboard/CreateParagraph";

const CreatePara = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <CreateParagraph />
    </>
  );
};

export default CreatePara;
