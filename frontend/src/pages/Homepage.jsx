import Banner from "../components/Banner";
import Call from "../components/Call";
import Faq from "../components/Faq";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWork";
import PropTypes from "prop-types";
import "../styles/homepage.css";

const Homepage = ({ loggedIn }) => {
  return (
    <div className="home">
      <Banner loggedIn={loggedIn} />
      <div className="bg container">
        {/* <img src={robot} alt="" width={200} /> */}
      </div>
      <Features />
      <HowItWorks />
      <Faq />
      <Call />
    </div>
  );
};

Homepage.propTypes = {
  loggedIn: PropTypes.bool,
};

export default Homepage;
