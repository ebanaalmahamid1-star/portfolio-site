function About() {
  return (
    <section className="about-page">
      <div className="about-image">
        <img
          src="/images/ebana-headshot.png"
          alt="Ebana Almahamid"
        />
      </div>

      <div className="about-content">
        <p className="section-label">Get to know me</p>

        <h1>About Me</h1>

        <h2>Ebana Almahamid</h2>

        <h3>Software Engineering – Artificial Intelligence Student</h3>

        <p>
          I am a Software Engineering – Artificial Intelligence student at
          Centennial College, currently working toward my diploma with an
          expected graduation year of 2028. I am interested in programming,
          user interface design, and learning how technology can be used to
          create practical solutions.
        </p>

        <p>
          Through my studies, I am developing my skills in software
          development, problem solving, and creating user-friendly
          applications. I enjoy learning new technologies and improving my
          skills through hands-on projects.
        </p>

        <div className="about-details">
          <div>
            <strong>Program</strong>
            <span>Software Engineering – Artificial Intelligence</span>
          </div>

          <div>
            <strong>College</strong>
            <span>Centennial College</span>
          </div>

          <div>
            <strong>Expected Graduation</strong>
            <span>2028</span>
          </div>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}

export default About;