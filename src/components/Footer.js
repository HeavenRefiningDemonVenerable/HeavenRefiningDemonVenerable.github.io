import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* Add your actual social media profile URLs in the href attributes */}
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
      <p>
        This isn't serious, but I think it is hilarious. If this was serious, I would be ready to hack the world.
      </p>
    </div>
  );
}

export default Footer;
