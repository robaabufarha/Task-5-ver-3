import React from "react";
import "./button.css";
import { IoIosArrowRoundBack } from "react-icons/io";

function BackButton() {
  return (
    <div className="button-div">
      <button className="button">
        <a href="/">
          <IoIosArrowRoundBack size="1.5em" />
          <p className="button-text">Back</p>
        </a>
      </button>
    </div>
  );
}

export default BackButton;
