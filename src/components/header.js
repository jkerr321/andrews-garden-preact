import React from "react";
import { Link } from "@reach/router";

const Header = () => (
  <div className="header">
    <div className="header-right">
      <Link to="/">Gallery</Link>
      <Link
        to="https://docs.google.com/spreadsheets/d/1Khj2u55fpyr7pjKxJKu8HQzmj6UD5x2fTAxpsme0wcM/edit#gid=590538584"
        target="_blank"
      >
        Data
      </Link>
    </div>
    <div className="header-left"></div>
    <button
      className="header-centre
        button
        button--big
        border"
      type="button"
    >
      Get Started
    </button>
  </div>
);

export default Header;
