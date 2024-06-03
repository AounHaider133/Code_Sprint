import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import EditAccount from "../components/admin-dashboard/EditAccount";

const EditAdvanceQuizForm = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <EditAccount />
    </>
  );
};

export default EditAdvanceQuizForm;
