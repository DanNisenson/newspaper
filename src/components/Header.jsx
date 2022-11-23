import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import "../assets/css/Header.css";
import CountrySelect from "./CountrySelect";
import SearchBar from "./SearchBar";

const Header = (props) => {
  // current date and time
  const [date, setDate] = useState();
  // update and format date on render
  useEffect(() => {
    let newDate = new Date();
    newDate = newDate.toUTCString().replace(",", "");
    setDate(newDate.slice(0, newDate.length - 7));
  }, []);

  return (
    <>
      {/* header */}
      <div className="header">
        {/* country selection menu and display */}
        <CountrySelect
          selectedCountry={props.selectedCountry}
          changeCountry={(country) => props.changeCountry(country)}
        />
        {/* brand logo */}
        <h1 className="logo" onClick={() => props.setCategory("general")}>
          The Bridge Times
        </h1>
        {/* search */}
        <SearchBar searchEverything={props.searchEverything} />
      </div>
      {/* date display and subscription call */}
      <div className="date-susc">
        <div>
          <div>{date}</div>
        </div>
        <div>
          <div>Suscribe for free!</div>
        </div>
      </div>
      {/* categories navigation bar */}
      <Categories
        setCategory={(newCategory) => props.setCategory(newCategory)}
      />
      {/* maybe make latest news bar ? */}
      <div className="latest"></div>
    </>
  );
};

export default Header;
