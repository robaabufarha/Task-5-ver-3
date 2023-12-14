import React from "react";
import "./Details.css";
import de from "../../assets/images/de.svg";
import CountryDetails from "../../Compotants/CountryDetails/CountryDetails";
import CountryBorders from "../../Compotants/CountryBorders/CountryBorders";
import Button from "../../Compotants/Button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";

function Details() {
  return (
    <div className="details-page">
      <div className="back-button-container">
        <Button
          className={"back-button"}
          icon={<IoIosArrowRoundBack size={"1.5em"} />}
          text="Back"
          linkTo={"/"}
        />
      </div>
      <div className="main-container py-5">
        <div>
          <img src={de} alt="Germany flag" />
        </div>

        <div>
          <div className="header-country">Belgium</div>
          <CountryDetails />
          <CountryBorders />
        </div>
      </div>
    </div>
  );
}

export default Details;
