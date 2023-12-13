import React from "react";
import "./DetailsStyle.css";
import de from "../../assets/images/de.svg";
import BackButton from "../../Compotants/Button/BackButton";
import CountryDetails from "../../Compotants/CountryDetails";
import CountryBorders from "../../Compotants/CountryBorders";
function Details() {
  return (
    <div className="details-page">
      <BackButton />
      <div className="main-container py-5">
        <div>
          <img src={de} alt="Germany flag" />
        </div>

        <div>
          <h2 className="header-country">Belgium</h2>
          <CountryDetails />
          <CountryBorders />
        </div>
      </div>
    </div>
  );
}

export default Details;
