import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="hero-texts">
        <h2>
          Unlock Your Contracts Potential <br />
          With Intelligent <span>Solutions</span>
        </h2>
        <p>
          Transform your smart contract development process with AI-driven
          analysis, automated fixes, <br /> and detailed reports on code quality
          and security.
        </p>
      </div>
      <div className="ctas">
        <button>Get Started</button>
        <button className="cta">How It Works</button>
      </div>
    </div>
  );
};

export default Banner;
