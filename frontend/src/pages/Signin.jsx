import Login from "../components/signin/Login";
import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";

const Signin = () => {
  return (
    <>
    <Background />
      <NavBar links={links}></NavBar>
      <Login />
    </>
  );
};

export default Signin;
