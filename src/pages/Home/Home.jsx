import React from "react";
import "./Home.css";
import { FilterCountryList } from "../../assets/data/FilterCountryList";
import DropdownList from "../../Compotants/Dropdown/Dropdown";
import Search from "../../Compotants/Search/Search";
import FavouritReagion from "../../Compotants/FavouritRegion/FavouritRegion";
import CardLayout from "../../Compotants/CardLayout/CardLayout";
function Home() {
  return (
    <div className="home-page">
      <section className="search-container d-flex justify-content-between py-5">
        <Search placeholder="Search for a country ..." />
        <DropdownList items={FilterCountryList} defaultLabel="Filter by" />
      </section>

      <div className="grid-container">
        <div className="vertical-menu-container">
          <FavouritReagion />
        </div>
        <div className="country-info-container">
          <div className="container-fluid text-center">
            <CardLayout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
