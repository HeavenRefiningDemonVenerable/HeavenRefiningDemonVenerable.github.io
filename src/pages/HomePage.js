import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  const profileImagePath = process.env.PUBLIC_URL + '/profile.png';

  return (
    <div className="homepage">
      <div className="profile-image-container">
        <img src={profileImagePath} alt="Demi" className="profile-image" />
      </div>

      <div className="intro-container">
        <h1>I'm Demi, a Computer Science Student</h1>
        <p className="intro-text">
          I am pursuing a bachelor's degree in Computer Science at Ontario Tech University. Throughout my studies, I have dabbled in machine learning, artificial intelligence, cybersecurity, and software development.
        </p>
        <div className="stats">
          <div className="stat">
            <span className="stat-value">2+</span>
            <span className="stat-key">Years of Experience</span>
          </div>
          <div className="stat">
            <span className="stat-value">5+</span>
            <span className="stat-key">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-value">3</span>
            <span className="stat-key">Languages Spoken</span>
          </div>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="list">
          <div className="item">
            <h3>Front-End</h3>
            <p>ReactJS, Angular, HTML, CSS</p>
          </div>
          <div className="item">
            <h3>Back-End</h3>
            <p>NodeJS, .NET</p>
          </div>
          <div className="item">
            <h3>Languages</h3>
            <p>JavaScript, Java, Python, C++</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
