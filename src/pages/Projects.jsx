function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website created to showcase my education, skills, projects, and interests in software development.",
      role: "Designed and developed the website, including the page structure, navigation, styling, and contact form.",
      outcome:
        "Created a functional multi-page portfolio that presents my information in a clear and organized way.",
      technologies: "React, JavaScript, HTML, CSS",
      image: "/images/project-portfolio.svg",
    },
    {
      title: "Student Task Manager",
      description:
        "A simple web application concept designed to help students organize assignments, tasks, and important deadlines.",
      role: "Planned the user interface and developed the main task management features.",
      outcome:
        "Created an organized interface that allows students to keep track of their tasks more easily.",
      technologies: "JavaScript, HTML, CSS",
      image: "/images/project-task-manager.svg",
    },
    {
      title: "AI Study Assistant",
      description:
        "An AI-themed student project concept designed to help students organize study topics and receive useful learning suggestions.",
      role: "Designed the interface and explored how AI features could be included in a student-focused application.",
      outcome:
        "Developed a simple concept showing how artificial intelligence could support everyday studying.",
      technologies: "JavaScript, React, AI concepts",
      image: "/images/project-ai-assistant.svg",
    },
  ];

  return (
    <section className="projects-page">
      <div className="projects-heading">
        <p className="section-label">My work</p>
        <h1>Projects</h1>
        <p>
          Here are some of the projects I have worked on while developing my
          skills in software engineering and artificial intelligence.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              className="project-image"
            />

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-info">
                <p>
                  <strong>My Role:</strong> {project.role}
                </p>

                <p>
                  <strong>Outcome:</strong> {project.outcome}
                </p>

                <p>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;