import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import AddUser from "../components/admin-dashboard/AddUser";

const AddUserForm = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <AddUser />
    </>
  );
};

export default AddUserForm;
