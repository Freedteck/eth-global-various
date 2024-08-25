import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWork";
import Navbar from "../components/Navbar";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <div className="bg container"></div>
      <Features />
      <HowItWorks />
      <Faq />
    </div>
  );
};

export default Homepage;
