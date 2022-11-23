import "../assets/css/SearchBar.css";
import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchActive, setSearchActive] = useState(false);

  const searchEverything = () => {
    const searchBar = document.getElementById("search");
    if (!searchActive) {
        searchBar.classList.toggle("search-bar-active");
        searchBar.focus();
        setSearchActive(!searchActive);
    } else {
      props.searchEverything(searchBar.value);
      searchBar.classList.toggle("search-bar-active");
      searchBar.value = "";
      setSearchActive(!searchActive);
    }
  };

  return (
    <div>
      <input
        id="search"
        className="search-bar"
        type="text"
        name="search"
        placeholder="Type your search"
        onKeyUp={(e) => e.code === 'Enter' ? searchEverything() : null}
      />
      <div className="search-icon">
        <img
          onClick={searchEverything}
          src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SearchBar;
