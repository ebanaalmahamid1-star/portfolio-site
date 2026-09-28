function Services() {
  const services = [
    {
      title: "UI Design",
      description:
        "I can create clean and user-friendly interface designs with a focus on clear layouts, simple navigation, and a consistent visual style.",
      skills: "User Interface Design, Layout, Visual Design",
      icon: "UI",
    },
    {
      title: "Programming",
      description:
        "I can develop simple applications and websites using programming concepts learned through my software engineering studies.",
      skills: "JavaScript, React, HTML, CSS",
      icon: "</>",
    },
  ];

  return (
    <section className="services-page">
      <div className="services-heading">
        <p className="section-label">What I can do</p>

        <h1>Services</h1>

        <p>
          Here are some of the areas I am developing skills in through my
          software engineering studies and personal projects.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <div className="service-content">
              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <div className="service-skills">
                <strong>Skills:</strong>
                <span>{service.skills}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;