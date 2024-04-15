import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  // The path to images in the public folder can be referenced directly
  const profileImagePath = process.env.PUBLIC_URL + '/profile.png'; 

  return (
    <div className="homepage">
      {/* Image container */}
      <div className="profile-image-container">
        <img src={profileImagePath} alt="Demi" className="profile-image" />
      </div>

      <div className="intro-container">
        <h1>I'm Demi, a Computer Science Student</h1>
        <p className="intro-text">
          "I am a student pursuing a bachelor's degree in Computer Science at Ontario Tech University. Throughout my studies, I have dabbled in machine learning, artificial intelligence, cybersecurity, and software development."
        </p>
        <div className="stats">
          <div className="stat">
            <span className="stat-value">2+</span>
            <span className="stat-key">Years of Experience</span>
          </div>
          {/* ... other stats */}
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
      {/* No footer here anymore */}
    </div>
  );
}

export default HomePage;
