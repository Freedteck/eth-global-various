import "../styles/navbar.css";
import logo from "../assets/logo.png";

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
            <a href="#">Upload</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">FAQ</a>
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

export default Navbar;
