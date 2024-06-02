import React from "react";
import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import CreateContact from "../components/contact/CreateContact";
import EditTypingMasterParagraph from "../components/admin-dashboard/EditTypingMasterParagraph ";

const EditParagraph = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <EditTypingMasterParagraph />
    </>
  );
};

export default EditParagraph;
