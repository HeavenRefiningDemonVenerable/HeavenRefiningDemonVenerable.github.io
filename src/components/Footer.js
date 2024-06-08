import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly chat.</p>
      <div className="socialMedia">
        <a href="https://www.instagram.com/itzdemi__/?next=%2F" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/demi-ogboye-a1b0782a9/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:ogboye.demi@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <p>© 2024 Demi Ogboye. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
