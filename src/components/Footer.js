import React from "react";
import "../styles/Footer.css";
import { site } from "../content/site";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="fine-print">
        &copy; {year} {site.name}. {site.footerNote}
        {" "}&mdash;{" "}
        <a href={`mailto:${site.email}`} className="text-link">
          {site.email}
        </a>
      </p>
    </div>
  );
}

export default Footer;
