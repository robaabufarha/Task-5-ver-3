import React from "react";
import ThemeButton from "../ThemeButton";
import "./header.css";

function Header({ children }) {
  return (
    <header>
      <nav className="navbar align-items-center sticky-top">
        <div className="container-fluid">{children}</div>
      </nav>
    </header>
  );
}

export default Header;
