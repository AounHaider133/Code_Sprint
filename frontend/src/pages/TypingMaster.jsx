import React, { useState, useEffect } from "react";
import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import TypingMasterLevel from "../components/cards/TypingMasterLevel";
import {
  fetchBasicTyping,
  fetchIntermediateTyping,
  fetchAdvanceTyping,
} from "../api";

const TypingMaster = () => {
  const [basicTyping, setBasicTyping] = useState([]);
  const [intermediateTyping, setIntermediateTyping] = useState([]);
  const [advanceTyping, setAdvanceTyping] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const transformData = (data) => data.map((item) => item.text);

    const fetchData = async () => {
      try {
        const basicResponse = await fetchBasicTyping();
        const intermediateResponse = await fetchIntermediateTyping();
        const advanceResponse = await fetchAdvanceTyping();

        setBasicTyping(transformData(basicResponse.data));
        setIntermediateTyping(transformData(intermediateResponse.data));
        setAdvanceTyping(transformData(advanceResponse.data));

        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error while fetching typing data:", error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <>
      <Background />
      <NavBar links={links} />
      <TypingMasterLevel
        basicSentences={basicTyping}
        intermediateSentences={intermediateTyping}
        advancedSentences={advanceTyping}
      />
    </>
  );
};

export default TypingMaster;
