import Banner from "../components/Banner";
import Call from "../components/Call";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWork";
import Navbar from "../components/Navbar";
import "../styles/homepage.css";
// import robot from "../assets/smart-robot.png";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <div className="bg container">
        {/* <img src={robot} alt="" width={200} /> */}
      </div>
      <Features />
      <HowItWorks />
      <Faq />
      <Call />
      <Footer />
    </div>
  );
};

export default Homepage;
