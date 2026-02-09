import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Codes Club</div>
      <ul className="links">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="pillars">Pillars</a>
        </li>
        <li>
          <a href="impact">Impact</a>
        </li>
        <li>
          <a href="contact">Contact</a>
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
