import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="home-content">
        <p className="welcome-text">Welcome to my portfolio</p>

        <h1>
          Hi, I'm <span>Ebana Almahamid</span>
        </h1>

        <h2>Software Engineering – Artificial Intelligence Student</h2>

        <p className="home-description">
          I am a Software Engineering – AI student at Centennial College with
          an interest in programming, user interface design, and developing
          practical technology solutions.
        </p>

        <p className="mission">
          My goal is to continue developing my technical and creative skills
          while building useful, accessible, and thoughtful digital
          experiences.
        </p>

        <div className="home-buttons">
          <Link to="/about" className="primary-button">
            About Me
          </Link>

          <Link to="/projects" className="secondary-button">
            View My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;