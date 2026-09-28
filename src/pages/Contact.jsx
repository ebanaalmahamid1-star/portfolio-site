import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // The form captures the user's information and redirects to Home.
    navigate("/");
  }

  return (
    <section className="contact-page">
      <div className="contact-heading">
        <p className="section-label">Get in touch</p>

        <h1>Contact Me</h1>

        <p>
          If you would like to get in touch with me, you can use the contact
          information below or fill out the form.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="contact-info-card">
            <strong>Email</strong>
            <a href="mailto:ebana.almahamid1@gmail.com">
              ebana.almahamid1@gmail.com
            </a>
          </div>

          <div className="contact-info-card">
            <strong>Phone</strong>
            <a href="tel:3653360883">365-336-0883</a>
          </div>

          <div className="contact-info-card">
            <strong>Program</strong>
            <span>Software Engineering – Artificial Intelligence</span>
          </div>

          <div className="contact-info-card">
            <strong>College</strong>
            <span>Centennial College</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Send Me a Message</h2>

          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;