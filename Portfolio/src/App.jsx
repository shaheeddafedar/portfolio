import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Shaheed Dafedar</h1>
        <p>Full-Stack Developer | AI & ML Enthusiast | CSE Student</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a passionate Computer Science student exploring full-stack
          development and AI-based solutions. I enjoy building real-world
          projects using React, Node.js, and Express.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React, Node.js, Express, MongoDB</li>
          <li>HTML, CSS, Tailwind, JavaScript</li>
          <li>Java, SQL, Git, GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>AgriMind 🌾</h3>
          <p>
            AI-based crop recommendation system for farmers using IoT and
            satellite data.
          </p>
        </div>
        <div className="project">
          <h3>Blood Donation Awareness ❤️</h3>
          <p>Responsive website to promote awareness about blood donation.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>📞 +91 7846084283</p>
        <p>📧 shaheeddafedar7866@gmail.com</p>
        <p>
          <a href="https://linkedin.com/in/shaheed-dafedar-584274300">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/shaheeddafedar" target="_blank">
            GitHub
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Shaheed Dafedar | Made with 💙 using React</p>
      </footer>
    </div>
  );
}

export default App;
