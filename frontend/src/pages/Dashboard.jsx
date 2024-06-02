import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import PlayerCard from "../components/cards/PlayerCard";
import LevelsCard from "../components/cards/LevelsCard";
import Footer from "../components/footer/Footer";
import { description, address, socialMedia } from "../data";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useAuth();

  const levelData = [
    {
      title: "Typing Test",
      levels: [
        {
          name: "Basic",
          locked: false,
          progress: user.typing1_progress,
          link: "/typing-master/1",
        },
        {
          name: "Intermediate",
          locked: user.typing1_progress < 80,
          progress: user.typing2_progress,
          link: "/typing-master/2",
        },
        {
          name: "Difficult",
          locked: user.typing2_progress < 80,
          progress: user.typing3_progress,
          link: "/typing-master/3",
        },
      ],
    },
    {
      title: "Programming Challenge",
      levels: [
        {
          name: "Basic",
          locked: false,
          progress: user.quiz1_progress,
          link: "/quiz/1",
        },
        {
          name: "Intermediate",
          locked: user.quiz1_progress < 80,
          progress: user.quiz2_progress,
          link: "/quiz/2",
        },
        {
          name: "Difficult",
          locked: user.quiz2_progress < 80,
          progress: user.quiz3_progress,
          link: "/quiz/3",
        },
      ],
    },
  ];
  return (
    <>
      <Background />
      <NavBar links={links} />
      <PlayerCard username={user.username} points={user.points} />
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
