import cardImg1 from "./assets/about-img.svg";
import cardImg2 from "./assets/contact-img.svg";
import cardImg3 from "./assets/dev.png";
import interactiveImg from "./assets/interactive-lessons.jpg";
import typingMaster from "./assets/typing-master.png";
import quiz from "./assets/quiz.jpg";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const links = [
  { href: "/", text: "Home" },
  { href: "/about-us", text: "About" },
  { href: "/signup", text: "Create Account" },
  { href: "/signin", text: "Login" },
  { href: "/contact", text: "Contact" },
];

export const cardContent = [
  {
    imgSrc: cardImg1,
    title: "Learn to Code",
    content: `Embark on your coding journey with our comprehensive learning
  platform designed for all skill levels. Whether you are a beginner
  eager to learn the basics or an experienced coder looking to
  sharpen your skills, our structured lessons, hands-on exercises,
  and real-world projects will guide you through the complexities of
  programming.`,
  },
  {
    imgSrc: cardImg2,
    title: "Knowledge Checkpoints",
    content: `Assess and deepen your understanding with our comprehensive
    multiple-choice questions. Each checkpoint is curated to test your
    grasp of coding principles, logic, and problem-solving abilities.
    Strengthen your theoretical knowledge before diving into hands-on
    coding.`,
  },
  {
    imgSrc: cardImg3,
    title: "Code Sprint Challenges",
    content: `Engage in real-world coding scenarios that push the boundaries of
    your problem-solving skills. Our Code Sprint Challenges simulate
    actual coding environments, offering tasks that range from
    debugging to developing complete solutions. Elevate your coding
    expertise through practice and perseverance.`,
  },
];

export const bottomCardData = [
  {
    id: "features", // Unique id
    title: "Key Features",
    items: [
      {
        imgSrc: interactiveImg,
        alt: "Interactive Lessons",
        heading: "Interactive Lessons",
        description: "Engaging lessons to enhance your learning experience.",
      },
      // Add more items here
    ],
  },
  {
    id: "courses", // Unique id
    title: "Course Categories",
    items: [
      {
        imgSrc: typingMaster,
        alt: "Typing Mastery",
        heading: "Typing Mastery",
        description: "Improve your typing speed and accuracy.",
      },
      // Add more items here
    ],
  },
  {
    id: "assessment", // Unique id
    title: "Self Assessment", // Updated title
    items: [
      {
        imgSrc: quiz,
        alt: "Multiple-Choice Challenges",
        heading: "Multiple-Choice Challenges",
        description: `Test your knowledge with our engaging MCQs. Each challenge is
        designed to reinforce your coding concepts and problem-solving
        skills.`,
      },
      // Add more items here
    ],
  },
];

export const description =
  "Code Sprint is a coding bootcamp that offers a comprehensive program designed to help students become experts in coding with the help of our interactive gamified learning methodology.";

export const address = {
  line1: "COMSATS Lahore",
  line2:
    "1.5 KM Defence Rd، off Raiwand Road, Lda Avenue Phase 1 Lda Avenue, Lahore, Punjab 54000",
};

export const socialMedia = [
  { href: "#", label: "Facebook", icon: faFacebookF },
  { href: "#", label: "Twitter", icon: faTwitter },
  { href: "#", label: "Whatsapp", icon: faWhatsapp },
];
