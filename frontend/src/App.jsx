import Homepage from "./pages/Homepage";
import PropTypes from "prop-types";
import "./App.css";

function App({ loggedIn }) {
  return (
    <>
      <Homepage loggedIn={loggedIn} />
    </>
  );
}

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default App;
