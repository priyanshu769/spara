import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => (
  <div className="header">
    <Link to="/" className="header-link">Home</Link>
  </div>
);
