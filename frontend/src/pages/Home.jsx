import Background from "../components/background/Background";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import CardContainer from "../components/home-page/cards/middle-card/CardContainer";
import AnimatedText from "../components/home-page/animated-text/AnimatedText";
import Cards from "../components/home-page/cards/Cards";
import BottomCard from "../components/home-page/cards/bottom-card/BottomCard"; // Correct import path
import TopCard from "../components/home-page/cards/top-card/TopCard";
import MiddleCard from "../components/home-page/cards/middle-card/MiddleCard";

// Data
import {
  cardContent,
  bottomCardData,
  links,
  description,
  address,
  socialMedia,
} from "../data";

function Home() {
  return (
    <>
      <Background />
      <NavBar links={links}></NavBar>
      <AnimatedText text="CodeSprint"></AnimatedText>
      <Cards>
        <TopCard />
        <CardContainer>
          {cardContent.map((content, index) => (
            <MiddleCard
              key={index}
              imgSrc={content.imgSrc}
              title={content.title}
              content={content.content}
            />
          ))}
        </CardContainer>
        {bottomCardData.map((content, index) => (
          <BottomCard
            key={index}
            id={content.id}
            title={content.title}
            imgSrc={content.items[0].imgSrc}
            alt={content.items[0].alt}
            subTitle={content.items[0].heading}
            description={content.items[0].description}
          />
        ))}
      </Cards>
      <Footer
        description={description}
        address={address}
        links={links}
        socialMedia={socialMedia}
      />
    </>
  );
}

export default Home;
