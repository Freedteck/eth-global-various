import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar-header">
      <nav className="container">
        <div className="logo">
          <a href="/">Eth-various</a>
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
          <li>
            <button>Connect</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
