import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import CreateAccount from "../components/signup/CreateAccount";
import { links } from "../data";
const Signup = () => {
  return (
    <>
      <Background />
      <NavBar links={links}></NavBar>
      <CreateAccount />
    </>
  );
};

export default Signup;
