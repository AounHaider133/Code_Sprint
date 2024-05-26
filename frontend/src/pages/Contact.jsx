import React from "react";
import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import CreateContact from "../components/contact/CreateContact";

const Contact = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <CreateContact/>
    </>
  );
};

export default Contact;
