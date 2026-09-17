// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <span className="numeral">404</span>
      <h1>This page doesn't exist</h1>
      <p>The page you're looking for may have moved or was never written.</p>
      <Link className="btn primary" to="/">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
