import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [category, setCategory] = useState("general");
  const [selectedCountry, setSelectedCountry] = useState("ar");
  const [searchInput, setSearchInput] = useState("");

  /* const updateCategory = (newCategory) => {
    setCategory(newCategory);
  }; */

  const changeCountry = (country) => {
    setSelectedCountry(country);
  };

  const searchEverything = (input) => {
    setSearchInput(input)
  }

  return (
    <div className="App">
      <Header
        setCategory={setCategory}
        selectedCountry={selectedCountry}
        changeCountry={changeCountry}
        searchEverything={searchEverything}
      />
      <Main category={category} selectedCountry={selectedCountry} searchInput={searchInput} />
    </div>
  );
}

export default App;

// !!! 
// Is passing set function directly as props OK ???