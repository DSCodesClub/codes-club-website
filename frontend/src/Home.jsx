import { useNavigate } from "react-router-dom";
import "./App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">CODES CLUB</div>

        <nav>
          <a href="#">About</a>
          <a href="#">Plans</a>
          <a href="#">Impact</a>
          <a href="#">Projects</a>
        </nav>

        <div className="nav-actions">
          <button
            className="link-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="primary-btn"
            onClick={() => navigate("/register")}
          >
            Join
          </button>
        </div>
      </header>

      <section className="hero">
        <span className="badge">BUILD · CODE · SHIP · GROW</span>

        <h1>
          Learn. Code. <br />
          <span>Build. Innovate.</span>
        </h1>

        <p>
          Empowering the next generation of engineers through high-impact
          collaboration and exposure to real-world tech.
        </p>

        <div className="hero-actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/register")}
          >
            Join the Movement
          </button>

          <button className="secondary-btn">
            Explore Labs
          </button>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h2>About Codes Club</h2>
          <p>
            Bridging the gap between academia and industry. Codes Club helps
            students build real projects, gain exposure, and grow together.
          </p>

          <div className="stats">
            <div>
              <h3>0+</h3>
              <span>Communities</span>
            </div>
            <div>
              <h3>100+</h3>
              <span>Workshops</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="team"
          />
        </div>
      </section>

      <section className="pillars">
        <h2>Our Core Pillars</h2>

        <div className="pillar-grid">
          <div className="pillar">
            <h3>Web Development</h3>
            <p>Hands-on learning with real projects.</p>
          </div>

          <div className="pillar">
            <h3>Ship Together</h3>
            <p>Collaborate, build, and deploy as a team.</p>
          </div>

          <div className="pillar">
            <h3>DSA</h3>
            <p>Improves logical and problem-solving skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
}


