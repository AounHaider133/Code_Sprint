import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import AdminLogin from "../components/admin-dashboard/AdminLogin";
import { links } from "../data";

const AdminSignin = () => {
  return (
    <>
      <Background />
      <NavBar links={links}></NavBar>
      <AdminLogin />
    </>
  );
};

export default AdminSignin;
