import React, { useState, useEffect } from "react";
import "./App.css";
import ThemeButton from "./Compotants/Button/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import Header from "../src/Compotants/Header/Header";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <Header>
        <h1 className="m-0">Where in the world?</h1>
        <ThemeButton
          className={"dark-mode-button"}
          icon={<IoMoonOutline />}
          text="Dark Mode"
          action={toggleDarkMode}
          iconStyle={"icon-style"}
        />
      </Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
