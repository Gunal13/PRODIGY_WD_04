import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm [Gunal] — a [Bsc.computer science student]</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate [computer science student] with experience in [solving codes or creating some codes]. 
          I love creating innovative and user-friendly solutions. When I’m not coding, 
          you’ll find me [in my hobbies such as fitness,outdoor games,or travelling etc].
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Other relevant skills</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Navigation menu</h3>
            <h3>Stop watch</h3>
            <h3>Tic-Tac-Toe</h3>
            <h3>My Portfolio</h3>
            <a href="https://github.com/Gunal13?tab=repositories" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
  
          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:your.email@example.com">[gunaldgvc13@gmail.com]</a></p>
        <p>LinkedIn: <a href="[Linkedin URL]" target="_blank" rel="noopener noreferrer">[www.linkedin.com/in/gunal-s-6573122a5]</a></p>
        <p>GitHub: <a href="[Github URl]" target="_blank" rel="noopener noreferrer">[https://github.com/Gunal13/repository]</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
