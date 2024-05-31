import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links, levelData } from "../data";
import PlayerCard from "../components/cards/PlayerCard";
import LevelsCard from "../components/cards/LevelsCard";
import Footer from "../components/footer/Footer";
// Data
import { description, address, socialMedia } from "../data";

const Dashboard = () => {
  return (
    <>
      <Background />
      <NavBar links={links} />
      <PlayerCard />
      <LevelsCard data={levelData} />
      <Footer
        description={description}
        address={address}
        links={links}
        socialMedia={socialMedia}
      />
    </>
  );
};

export default Dashboard;
