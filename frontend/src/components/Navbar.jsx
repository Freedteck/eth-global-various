import "../styles/navbar.css";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ login, isLoggedIn, balance, user, logout }) => {
  return (
    <header className="navbar-header">
      <nav className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul>
          <li>
            <NavLink
              to="/upload"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-it-works"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              FAQ
            </NavLink>
          </li>
          {isLoggedIn && <li className="balance">{balance} HBAR</li>}
          <li>
            {!isLoggedIn && <button onClick={login}>Connect</button>}
            {isLoggedIn && <button onClick={logout}>{user}</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  balance: PropTypes.number,
  user: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

export default Navbar;
