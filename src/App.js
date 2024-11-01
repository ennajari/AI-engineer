import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">AI Engineer</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
          <h1>Welcome to My Portfolio</h1>
          <p>AI Engineer & Developer</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="/images/3D_smart_factorypng.png" alt="AI Factory" className="about-image" />
          <div className="about-text">
            <p>I am a passionate AI Engineer with expertise in machine learning, deep learning, and software development. I love creating intelligent solutions that solve real-world problems.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <img src="/images/ibn_zohr.png" alt="Ibn Zohr University" />
            <h3>Ibn Zohr University</h3>
            <p>Computer Science</p>
          </div>
          <div className="education-card">
            <img src="/images/eniad.png" alt="ENIAD" />
            <h3>ENIAD</h3>
            <p>AI Engineering</p>
          </div>
          <div className="education-card">
            <img src="/images/hgs.png" alt="HGS" />
            <h3>HGS</h3>
            <p>Advanced Studies</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>AI Smart Factory</h3>
            <p>Implemented machine learning algorithms for predictive maintenance</p>
          </div>
          <div className="project-card">
            <h3>Deep Learning Models</h3>
            <p>Developed neural networks for image recognition</p>
          </div>
          <div className="project-card">
            <h3>Data Analytics</h3>
            <p>Created dashboards for business intelligence</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 AI Engineer Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;