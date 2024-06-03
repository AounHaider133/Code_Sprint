import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import { links } from "../data";
import PlayerCard from "../components/cards/PlayerCard";
import LevelsCard from "../components/cards/LevelsCard";
import Footer from "../components/footer/Footer";
import { description, address, socialMedia } from "../data";
import { useAuth } from "../AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  function formatDate(dateString) {
    const date = new Date(dateString);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${year}`;
  }

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
      <PlayerCard
        username={user.username}
        points={user.points}
        createdAt={formatDate(user.createdAt)}
      />
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
