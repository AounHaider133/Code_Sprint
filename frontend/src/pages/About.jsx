import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import AboutUs from "../components/about/AboutUs";

const About = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <AboutUs />
    </>
  );
};

export default About;
