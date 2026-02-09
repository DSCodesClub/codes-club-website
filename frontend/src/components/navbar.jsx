import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          Codes Club
        </Link>
      </div>

      <ul className="links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/pillars">Pillars</Link>
        </li>
        <li>
          <Link to="/impact">Impact</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div>
        <button className="login">Login</button>
        <button className="join">Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
